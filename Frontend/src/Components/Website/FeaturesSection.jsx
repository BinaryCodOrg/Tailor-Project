import React from "react";
import { Row, Col, Card, Typography } from "antd";
import {
  ScissorOutlined,
  EyeOutlined,
  DatabaseOutlined,
  TeamOutlined,
  ShopOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const features = [
  {
    title: "Live Garment Preview",
    description:
      "Visualize shirts and trousers in real-time as measurements are entered.",
    icon: <EyeOutlined />,
  },
  {
    title: "Smart Pattern Generator",
    description:
      "Automatically generate cutting references based on measurements.",
    icon: <ScissorOutlined />,
  },
  {
    title: "Customer Management",
    description:
      "Store and manage all customer profiles and measurement history.",
    icon: <TeamOutlined />,
  },
  {
    title: "Measurement Storage",
    description:
      "Securely store unlimited measurements with easy access anytime.",
    icon: <DatabaseOutlined />,
  },
  {
    title: "Multi-Branch Support",
    description: "Manage multiple tailoring shops from a single dashboard.",
    icon: <ShopOutlined />,
  },
  {
    title: "Inventory Management",
    description: "Track fabrics, materials, and stock levels efficiently.",
    icon: <AppstoreOutlined />,
  },
];

const FeaturesSection = () => {
  return (
    <div style={{ padding: "100px 20px", background: "#ffffff" }}>
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <Title level={2}>Powerful Features for Modern Tailors</Title>
        <Text type="secondary">
          Everything you need to digitize and scale your tailoring business.
        </Text>
      </div>

      {/* Features Grid */}
      <Row gutter={[24, 24]} justify="center">
        {features.map((feature, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card
              bordered={false}
              style={{
                borderRadius: 16,
                height: "100%",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
              hoverable
            >
              {/* Icon */}
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 12,
                  background: "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 22,
                  marginBottom: 20,
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <Title level={4}>{feature.title}</Title>

              {/* Description */}
              <Text style={{ color: "#6b7280" }}>{feature.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturesSection;
