import React from "react";
import { Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

const StatsSection = () => {
  const stats = [
    { label: "Active Tailors", value: "2,500+" },
    { label: "Measurements Stored", value: "120K+" },
    { label: "Patterns Generated", value: "45K+" },
    { label: "Countries Served", value: "18+" },
  ];

  return (
    <div style={{ padding: "80px 20px", background: "#f8fafc" }}>
      <Row justify="center" gutter={[40, 40]}>
        {stats.map((item, i) => (
          <Col key={i} xs={12} md={6} style={{ textAlign: "center" }}>
            <Title style={{ color: "#2563eb" }}>{item.value}</Title>
            <Text>{item.label}</Text>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StatsSection;
