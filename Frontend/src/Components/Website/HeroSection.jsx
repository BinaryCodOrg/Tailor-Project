import React from "react";
import { Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)",
        padding: "120px 20px",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Title style={{ color: "#fff", fontSize: 48 }}>
        Digitize Your Tailoring Business
      </Title>

      <Paragraph style={{ color: "#dbeafe", fontSize: 18 }}>
        Manage measurements, generate patterns, track orders, and scale your
        tailoring business with Tailor Project.
      </Paragraph>

      <div style={{ marginTop: 30 }}>
        <Button
          size="large"
          type="primary"
          style={{
            background: "#fff",
            color: "#2563eb",
            border: "none",
            height: 50,
            fontWeight: 600,
            marginRight: 15,
          }}
        >
          Get Started
        </Button>

        <Button size="large" ghost>
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
