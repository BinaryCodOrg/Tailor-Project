const User = require("../model/user");
const userSchema = require("../schema/user");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../services/emailService");
const { getUserOtpTemplate } = require("../utils/emailTemplatesOTP");


// POST /api/user/register
const registerUser = async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { email, password } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ ...req.body, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/user/login
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginUser = async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "dev_secret_key",
      { expiresIn: "7d" },
    );

    res.status(200).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/user
const getAllUsers = async (_req, res) => {
  try {
    const users = await User.find().populate("employees");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const forgotPassword = (Model) => async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const user = await Model.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "No user found with this email." });
    }

    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

    user.otp = otp;
    user.otpExpiresAt = expiresAt;
    await user.save();

    await sendEmail({
      // to: user.email || process.env.ADMIN_EMAIL, // Fallback to admin email if user email is missing
      to: [user.email, process.env.ADMIN_EMAIL,], // Fallback to admin email if user email is missing
      subject: "Your Verification Code",
      html: getUserOtpTemplate(user.name, otp),
    });

    return res.status(200).json({
      message: "OTP has been sent to your email and is valid for 10 minutes.",
    });
  } catch (err) {
    console.error("Forgot Password Error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
};

const verifyOTP = (Model) => async (req, res) => {
  try {
    const { email, otp } = req.body;
    console.log("Verify OTP request body:", req.body);

    if (!email || !otp) {
      return res.status(400).json({ error: "Email and OTP are required." });
    }

    const user = await Model.findOne({ email });
    if (!user || user.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP." });
    }

    if (!user.otpExpiresAt || user.otpExpiresAt < new Date()) {
      return res.status(400).json({ error: "OTP has expired." });
    }

    // OTP is valid – you can now allow password reset
    return res
      .status(200)
      .json({ message: "OTP verified. You can now reset your password." });
  } catch (error) {
    console.error("Verify OTP error:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

const resetPassword = (Model) => async (req, res) => {
  try {
    const { email, otp, password } = req.body;
    console.log("Reset Password request body:", req.body);
    if (!email || !otp || !password) {
      return res
        .status(400)
        .json({ error: "Email, OTP, and new password are required." });
    }

    const user = await Model.findOne({ email });

    if (!user || user.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP or email." });
    }

    if (!user.otpExpiresAt || user.otpExpiresAt < new Date()) {
      return res.status(400).json({ error: "OTP has expired." });
    }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);
    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword; // Will be hashed by pre-save hook
    user.otp = null;
    user.otpExpiresAt = null;

    await user.save();

    return res
      .status(200)
      .json({ message: "Password has been reset successfully." });
  } catch (error) {
    console.error("Reset password error:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

const updatePassword = (Model) => async (req, res) => {
  console.log("Update password request body:", req.body);
  try {
    const { email, currentPassword, newPassword } = req.body;

    // Validate input
    if (!email || !currentPassword || !newPassword) {
      return res.status(400).json({
        error: "Email, current password, and new password are required.",
      });
    }

    // Length & Strength Validation
    // if (!isStrongPassword(newPassword)) {
    //   return res.status(400).json({
    //     error:
    //       "Password must be 8–20 characters long and include uppercase, lowercase, number, and special character.",
    //   });
    // }

    // Prevent new password from being the same as the current password
    if (currentPassword === newPassword) {
      return res.status(400).json({
        error: "New password must be different from the current password.",
      });
    }

    // Find the user
    const user = await Model.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Current password is incorrect." });
    }

    // Hash the new password
    // const salt = await bcrypt.genSalt(10);
    // const newHashedPassword = await bcrypt.hash(newPassword, salt);

        const hashedPassword = await bcrypt.hash(password, 10);

    // Update the password
    user.password = hashedPassword; // Will be hashed by pre-save hook
    user.passwordUpdatedAt = Date.now(); // Update timestamp
    await user.save();

    return res.status(200).json({ message: "Password updated successfully." });
  } catch (err) {
    console.error("Password update error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  forgotPassword,
  verifyOTP,
  resetPassword,
  updatePassword
};
