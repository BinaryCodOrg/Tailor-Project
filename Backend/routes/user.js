const express = require("express");
const { registerUser, loginUser, getAllUsers , forgotPassword,  verifyOTP,resetPassword, updatePassword} = require("../controller/userController");

const UserModel = require("../model/user")
const router = express.Router();

// Register new user (shop owner)
router.post("/register", registerUser);

// Login user and get JWT
router.post("/login", loginUser);


router.patch("/forgot-password", forgotPassword(UserModel));
router.post("/verify-otp", verifyOTP(UserModel));
router.patch("/reset-password", resetPassword(UserModel));
router.patch("/update-password", updatePassword(UserModel));

// Get all users (with employees populated)
router.get("/", getAllUsers);

module.exports = router;


