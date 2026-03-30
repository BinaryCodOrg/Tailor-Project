import React from "react";
import { Row, Col, Typography, Input, Button } from "antd";
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  InstagramFilled,
} from "@ant-design/icons";
import logo from "../../assets/Images/logos/logo.png";

const { Title, Text } = Typography;

const FooterSection = () => {
  return (
    <div
      style={{
        background: "#111827",
        color: "#ffffff",
        padding: "80px 20px 40px 20px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Row gutter={[40, 40]}>
          {/* Brand Column */}
          <Col xs={24} md={8}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              {/* Dummy Logo */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 6,
                  marginRight: 12,
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <Title
                level={4}
                style={{
                  color: "#ffffff",
                  margin: 0,
                  fontFamily: "Fraunces, sans-serif",
                }}
              >
                Stitch & Stone
              </Title>
            </div>

            <Text style={{ color: "#9ca3af" }}>
              Digitizing tailoring businesses with smart measurement management,
              garment previews, and scalable tools.
            </Text>

            {/* Newsletter */}
            <div style={{ marginTop: 25 }}>
              <Input
                placeholder="Enter your email"
                style={{
                  borderRadius: 6,
                  marginBottom: 10,
                }}
              />
              <Button
                type="primary"
                block
                style={{
                  background: "#2563eb",
                  border: "none",
                }}
              >
                Subscribe
              </Button>
            </div>
          </Col>

          {/* Product Links */}
          <Col xs={12} md={4}>
            <Title level={5} style={{ color: "#ffffff" }}>
              Product
            </Title>
            <Text
              style={{ color: "#9ca3af", display: "block", marginBottom: 8 }}
            >
              Features
            </Text>
            <Text
              style={{ color: "#9ca3af", display: "block", marginBottom: 8 }}
            >
              Pricing
            </Text>
            <Text
              style={{ color: "#9ca3af", display: "block", marginBottom: 8 }}
            >
              Live Demo
            </Text>
            <Text style={{ color: "#9ca3af", display: "block" }}>Updates</Text>
          </Col>

          {/* Company Links */}
          <Col xs={12} md={4}>
            <Title level={5} style={{ color: "#ffffff" }}>
              Company
            </Title>
            <Text
              style={{ color: "#9ca3af", display: "block", marginBottom: 8 }}
            >
              About Us
            </Text>
            <Text
              style={{ color: "#9ca3af", display: "block", marginBottom: 8 }}
            >
              Careers
            </Text>
            <Text
              style={{ color: "#9ca3af", display: "block", marginBottom: 8 }}
            >
              Blog
            </Text>
            <Text style={{ color: "#9ca3af", display: "block" }}>Contact</Text>
          </Col>

          {/* Support Links */}
          <Col xs={12} md={4}>
            <Title level={5} style={{ color: "#ffffff" }}>
              Support
            </Title>
            <Text
              style={{ color: "#9ca3af", display: "block", marginBottom: 8 }}
            >
              Help Center
            </Text>
            <Text
              style={{ color: "#9ca3af", display: "block", marginBottom: 8 }}
            >
              Submit Ticket
            </Text>
            <Text
              style={{ color: "#9ca3af", display: "block", marginBottom: 8 }}
            >
              FAQs
            </Text>
            <Text style={{ color: "#9ca3af", display: "block" }}>
              Privacy Policy
            </Text>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #1f2937",
            marginTop: 50,
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Text style={{ color: "#6b7280" }}>
            © {new Date().getFullYear()} Stitch &amp; Stone. All rights
            reserved.
          </Text>

          <div style={{ fontSize: 22 }}>
            <FacebookFilled style={{ marginRight: 15, color: "#f7f9fd" }} />
            <TwitterSquareFilled
              style={{ marginRight: 15, color: "#f7f9fd" }}
            />
            <LinkedinFilled style={{ marginRight: 15, color: "#f7f9fd" }} />
            <InstagramFilled style={{ color: "#f7f9fd" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
