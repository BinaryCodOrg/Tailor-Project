import React, { useState, useEffect } from "react";
import { Form, Input, Button, Typography } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import "./Login.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const { Text } = Typography;

const ForgetPassword = () => {
  const [form] = Form.useForm();
  const [step, setStep] = useState("email");
  const [countdown, setCountdown] = useState(30);
  const [otpError, setOtpError] = useState(false);

  // Countdown logic
  useEffect(() => {
    if (step === "otp" && countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, step]);

  const handleEmailSubmit = (values) => {
    console.log("Send OTP to:", values.email);
    setStep("otp");
    setCountdown(30);
  };

  const handleOtpChange = (value) => {
    if (value.length === 4) {
      handleVerify(value);
    }
  };

  const handleVerify = (otp) => {
    console.log("Entered OTP:", otp);

    // Simulate wrong OTP
    if (otp !== "1234") {
      setOtpError(true);
      setTimeout(() => setOtpError(false), 500);
      form.setFieldsValue({ otp: "" });
      return;
    }

    console.log("OTP Verified ✅");
  };

  const resendCode = () => {
    if (countdown === 0) {
      console.log("Resend OTP");
      setCountdown(30);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {step === "email" && (
          <motion.div
            key="email"
            initial={{ opacity: 0, y: 15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-100 d-flex justify-content-center align-items-center flex-column"
          >
            <p className="text-muted mb-4 text-center">Forgot your password?</p>

            <Form
              form={form}
              layout="vertical"
              onFinish={handleEmailSubmit}
              className="w-75"
            >
              <Form.Item
                label="Your Email"
                name="email"
                rules={[
                  { required: true, message: "Enter your email" },
                  { type: "email", message: "Enter valid email" },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="info@example.com"
                  size="large"
                />
              </Form.Item>

              <Button type="primary" htmlType="submit" block size="large">
                Send Code
              </Button>
              <p className="text-center mt-2 small">
                {" "}
                <Link
                  to={"/auth/login"}
                  className=" ms-1 register-link text-muted"
                >
                  {" "}
                  Back{" "}
                </Link>{" "}
              </p>
            </Form>
          </motion.div>
        )}

        {step === "otp" && (
          <motion.div
            key="otp"
            initial={{ opacity: 0, y: 15, scale: 0.97 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              x: otpError ? [-10, 10, -8, 8, -5, 5, 0] : 0,
            }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className="w-100 d-flex justify-content-center align-items-center flex-column"
          >
            <p className="text-muted mb-3 text-center">
              Enter 4-digit verification code
            </p>

            <Form form={form} layout="vertical">
              <Form.Item
                name="otp"
                rules={[
                  { required: true, message: "Enter OTP" },
                  { len: 4, message: "Code must be 4 digits" },
                ]}
              >
                <Input.OTP
                  length={4}
                  size="large"
                  autoFocus
                  onChange={handleOtpChange}
                  status={otpError && "error"}
                />
              </Form.Item>

              <Button
                type="primary"
                block
                size="large"
                onClick={() => handleVerify(form.getFieldValue("otp"))}
              >
                Verify
              </Button>
            </Form>

            <div className="text-center mt-3">
              {countdown > 0 ? (
                <Text type="secondary">Resend code in {countdown}s</Text>
              ) : (
                <Button type="link" onClick={resendCode}>
                  Resend Code
                </Button>
              )}
            </div>

            <Text
              type="secondary"
              className="text-center small text-decoration-underline "
              role="button"
              onClick={() => setStep("email")}
            >
              {" "}
              Back{" "}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ForgetPassword;
