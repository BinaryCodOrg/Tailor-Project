import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinish = (values) => {
    console.log("Login Data:", values);
  };

  return (
    <>
      <p className="text-muted mb-4 text-center">Sign in your account</p>

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
          className="mb-0"
          rules={[{ required: true, message: "Please enter password" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="********"
            size="large"
          />
        </Form.Item>
        <p className="text-end small">
          <Link
            to={"/auth/forgetPassword"}
            className="ms-1 register-link text-muted"
          >
            Forgot Password?
          </Link>
        </p>

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
          Login
        </Button>

        <p className="text-center mt-2 small">
          Don't have an account?
          <Link to={"/auth/register"} className="ms-1 register-link">
            Register
          </Link>
        </p>
      </Form>
    </>
  );
};

export default Login;
