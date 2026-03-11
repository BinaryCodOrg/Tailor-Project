import React from "react";
import { Form, Input, Button, Checkbox, Divider } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link } from "react-router-dom";

const Register = () => {
  const onFinish = (values) => {
    console.log("registration Data:", values);
  };

  return (
    <>
      <p className="text-muted mb-4 text-center">Sign up your account</p>
      <Form layout="vertical" onFinish={onFinish} className="w-75">
        <Form.Item
          label="Your Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="info.nexora@gmail.com"
            size="large"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter password" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="********"
            size="large"
          />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[{ required: true, message: "Please enter confirm password" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="********"
            size="large"
          />
        </Form.Item>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <Checkbox>Remember Me</Checkbox>
        </div>

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          block
          className="login-btn"
        >
          Register
        </Button>

        <p className="text-center mt-2 small">
          Already have an account?
          <Link to={"/auth/login"} className=" ms-1 register-link">
            Login
          </Link>
        </p>
      </Form>
    </>
  );
};

export default Register;
