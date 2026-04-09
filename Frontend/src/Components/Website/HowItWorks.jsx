import React from "react";
import { Row, Col, Typography, Card } from "antd";

const { Title, Text } = Typography;

const steps = [
  {
    title: "Create Customer Profile",
    description:
      "Add customer details and maintain complete measurement history securely.",
  },
  {
    title: "Enter Measurements",
    description:
      "Input body measurements and see live garment previews instantly.",
  },
  {
    title: "Generate Pattern & Save",
    description:
      "Automatically calculate cutting references and store patterns digitally.",
  },
  {
    title: "Manage Orders & Deliver",
    description: "Track production status and manage deliveries efficiently.",
  },
];

const HowItWorks = () => {
  return (
    <div style={{ padding: "100px 20px", background: "#f8fafc" }}>
      {/* Section Heading */}
      <div style={{ textAlign: "center", marginBottom: 80 }}>
        <Title
          level={2}
          style={{
            fontFamily: "Fraunces, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            color: "rgb(15, 23, 42)",
            fontWeight: 700,
          }}
        >
          How Tailor Project Works
        </Title>
        <Text type="secondary">
          Simple workflow designed for modern tailoring businesses.
        </Text>
      </div>

      <Row gutter={[40, 40]} justify="center">
        {steps.map((step, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              bordered={false}
              style={{
                textAlign: "center",
                borderRadius: 16,
                height: "100%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              {/* Step Number */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "#2563eb",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 600,
                  margin: "0 auto 20px auto",
                }}
              >
                {index + 1}
              </div>

              <Title level={4}>{step.title}</Title>
              <Text style={{ color: "#6b7280" }}>{step.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HowItWorks;
