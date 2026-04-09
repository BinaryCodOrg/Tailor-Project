import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const plans = [
  {
    name: "Standard",
    highlight: false,
    features: {
      response: "48 Hours",
      priority: "Normal",
      onboarding: "Self Guided",
      manager: false,
      sla: false,
      phone: false,
      integration: false,
    },
  },
  {
    name: "Pro",
    highlight: true,
    features: {
      response: "24 Hours",
      priority: "High",
      onboarding: "Video Training",
      manager: false,
      sla: false,
      phone: false,
      integration: false,
    },
  },
  {
    name: "Ultra",
    highlight: false,
    features: {
      response: "12 Hours",
      priority: "High",
      onboarding: "Live Training",
      manager: true,
      sla: false,
      phone: true,
      integration: true,
    },
  },
  {
    name: "Enterprise",
    highlight: false,
    features: {
      response: "4 Hours",
      priority: "Critical",
      onboarding: "Full Deployment Support",
      manager: true,
      sla: true,
      phone: true,
      integration: true,
    },
  },
];

const FeatureRow = ({ label, keyName }) => (
  <Row
    style={{
      padding: "12px 0",
      borderBottom: "1px solid #f1f5f9",
      alignItems: "center",
    }}
  >
    <Col xs={24} md={6}>
      <Text strong>{label}</Text>
    </Col>

    {plans.map((plan, index) => {
      const value = plan.features[keyName];

      return (
        <Col xs={12} md={4} key={index} style={{ textAlign: "center" }}>
          {typeof value === "boolean" ? (
            value ? (
              <CheckOutlined style={{ color: "#2563eb" }} />
            ) : (
              <CloseOutlined style={{ color: "#9ca3af" }} />
            )
          ) : (
            <Text
              style={{
                color: plan.highlight ? "#2563eb" : "#374151",
                fontWeight: plan.highlight ? 600 : 400,
              }}
            >
              {value}
            </Text>
          )}
        </Col>
      );
    })}
  </Row>
);

const PlanSupportBreakdown = () => {
  return (
    <div style={{ padding: "100px 20px", background: "#ffffff" }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <Title
          level={2}
          style={{
            fontFamily: "Fraunces, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            color: "rgb(15, 23, 42)",
            fontWeight: 700,
          }}
        >
          How We Handle Support Across Plans
        </Title>
        <Text type="secondary">
          Transparent issue resolution and support differences explained
          clearly.
        </Text>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          background: "#f8fafc",
          padding: 30,
          borderRadius: 16,
        }}
      >
        {/* Plan Headers */}
        <Row
          style={{
            paddingBottom: 20,
            borderBottom: "2px solid #e5e7eb",
            marginBottom: 10,
          }}
        >
          <Col xs={24} md={6}></Col>
          {plans.map((plan, index) => (
            <Col xs={12} md={4} key={index} style={{ textAlign: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: plan.highlight ? "#2563eb" : "#111827",
                }}
              >
                {plan.name}
              </Text>
            </Col>
          ))}
        </Row>

        {/* Feature Rows */}
        <FeatureRow label="Support Response Time" keyName="response" />
        <FeatureRow label="Ticket Priority Level" keyName="priority" />
        <FeatureRow label="Onboarding Assistance" keyName="onboarding" />
        <FeatureRow label="Dedicated Account Manager" keyName="manager" />
        <FeatureRow label="SLA Guarantee" keyName="sla" />
        <FeatureRow label="Phone Support" keyName="phone" />
        <FeatureRow label="Custom Integration Help" keyName="integration" />
      </div>
    </div>
  );
};

export default PlanSupportBreakdown;
