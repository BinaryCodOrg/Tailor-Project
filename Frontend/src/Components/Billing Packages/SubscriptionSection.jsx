import React from "react";
import { Card, Row, Col, Button, Typography, List, Tag, Badge } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const plans = [
  {
    name: "Standard",
    price: "Free",
    highlight: false,
    features: [
      "50 measurements / month",
      "Basic Shirt & Pant Preview",
      "1 Store Profile",
      "PDF Measurement Export",
      "Email Support",
    ],
  },
  {
    name: "Pro",
    price: "$19/month",
    highlight: true,
    tag: "Most Popular",
    features: [
      "Unlimited measurements",
      "Advanced Live Garment Preview",
      "Pattern Generator",
      "3 Store Profiles",
      "Customer Management",
      "WhatsApp Integration",
      "Priority Support",
    ],
  },
  {
    name: "Ultra",
    price: "$49/month",
    highlight: false,
    features: [
      "Everything in Pro",
      "Multi-Branch Support",
      "Fabric Inventory Module",
      "Custom Branding",
      "Team Collaboration (5 users)",
      "Sales Analytics Dashboard",
      "API Access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    highlight: false,
    features: [
      "Everything in Ultra",
      "Unlimited Team Members",
      "Dedicated Account Manager",
      "Custom Integrations",
      "White-Label Platform",
      "Onboarding & Training",
      "SLA Support",
    ],
  },
];

const SubscriptionSection = () => {
  return (
    <div style={{ padding: "80px 20px", background: "#f8fafc" }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <Title level={2} className="Head1" strong>
          Simple pricing for your Stitch & Stone
        </Title>
        <Text type="secondary">
          Scale your tailoring business with powerful digital tools.
        </Text>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {plans.map((plan, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            {plan.name == "Standard" ? (
              <Badge.Ribbon text="Current Plan">
                <Card
                  bordered={false}
                  style={{
                    borderRadius: 16,
                    height: "100%",
                    background: plan.highlight ? "#2563eb" : "#ffffff",
                    color: plan.highlight ? "#ffffff" : "#000000",
                    boxShadow: plan.highlight
                      ? "0 20px 50px rgba(37, 99, 235, 0.3)"
                      : "0 10px 30px rgba(0,0,0,0.05)",
                    transform: plan.highlight ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {plan.tag && (
                    <Tag
                      color="white"
                      style={{
                        background: "#1e40af",
                        border: "none",
                        marginBottom: 16,
                      }}
                    >
                      {plan.tag}
                    </Tag>
                  )}

                  <Title
                    level={3}
                    style={{
                      color: plan.highlight ? "#ffffff" : "#111827",
                    }}
                  >
                    {plan.name}
                  </Title>

                  <Title
                    level={2}
                    style={{
                      color: plan.highlight ? "#ffffff" : "#2563eb",
                    }}
                  >
                    {plan.price}
                  </Title>

                  <List
                    style={{ marginTop: 24, marginBottom: 24 }}
                    dataSource={plan.features}
                    renderItem={(item) => (
                      <List.Item
                        style={{
                          border: "none",
                          color: plan.highlight ? "#e0f2fe" : "#374151",
                          paddingLeft: 0,
                        }}
                      >
                        <CheckOutlined
                          style={{
                            marginRight: 10,
                            color: plan.highlight ? "#ffffff" : "#2563eb",
                          }}
                        />
                        {item}
                      </List.Item>
                    )}
                  />

                  <Button
                    type={plan.highlight ? "default" : "primary"}
                    size="large"
                    block
                    style={{
                      background: "#d5dceb",
                      color: "#2563eb",
                      border: "none",
                      height: 45,
                      fontWeight: 600,
                    }}
                    disabled
                  >
                    Get Started
                  </Button>
                </Card>
              </Badge.Ribbon>
            ) : (
              <Card
                bordered={false}
                style={{
                  borderRadius: 16,
                  height: "100%",
                  background: plan.highlight
                    ? "linear-gradient(145deg, #1142d4 0%, #041750 50%, #020b2e 100%)"
                    : "#ffffff",
                  color: plan.highlight ? "#ffffff" : "#000000",
                  boxShadow: plan.highlight
                    ? "0 20px 50px rgba(37, 99, 235, 0.3)"
                    : "0 10px 30px rgba(0,0,0,0.05)",
                  transform: plan.highlight ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.3s ease",
                }}
              >
                {plan.tag && (
                  <Tag
                    color="white"
                    style={{
                      background: "#1e40af",
                      border: "none",
                      marginBottom: 16,
                    }}
                  >
                    {plan.tag}
                  </Tag>
                )}

                <Title
                  level={3}
                  style={{
                    color: plan.highlight ? "#ffffff" : "#111827",
                  }}
                >
                  {plan.name}
                </Title>

                <Title
                  level={2}
                  style={{
                    color: plan.highlight ? "#ffffff" : "#2563eb",
                  }}
                >
                  {plan.price}
                </Title>

                <List
                  style={{ marginTop: 24, marginBottom: 24 }}
                  dataSource={plan.features}
                  renderItem={(item) => (
                    <List.Item
                      style={{
                        border: "none",
                        color: plan.highlight ? "#e0f2fe" : "#374151",
                        paddingLeft: 0,
                      }}
                    >
                      <CheckOutlined
                        style={{
                          marginRight: 10,
                          color: plan.highlight ? "#ffffff" : "#2563eb",
                        }}
                      />
                      {item}
                    </List.Item>
                  )}
                />

                <Button
                  type={plan.highlight ? "default" : "primary"}
                  size="large"
                  block
                  style={{
                    background: plan.highlight ? "#ffffff" : "#2563eb",
                    color: plan.highlight ? "#2563eb" : "#ffffff",
                    border: "none",
                    height: 45,
                    fontWeight: 600,
                  }}
                >
                  Get Started
                </Button>
              </Card>
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SubscriptionSection;
