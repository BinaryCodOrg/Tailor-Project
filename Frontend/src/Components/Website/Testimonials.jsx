import React from "react";
import { Row, Col, Card, Typography, Avatar, Rate } from "antd";

const { Title, Text } = Typography;

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Owner, Raza Tailors",
    feedback:
      "Tailor Project reduced our measurement errors by almost 70%. The live garment preview is a game changer.",
    rating: 5,
  },
  {
    name: "Sarah Khan",
    role: "Boutique Manager",
    feedback:
      "Managing customer measurements and orders has never been this simple. The system saves us hours every week.",
    rating: 5,
  },
  {
    name: "Bilal Hussain",
    role: "Multi-Branch Tailor",
    feedback:
      "The multi-branch support helped me scale my tailoring business across three cities effortlessly.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div style={{ padding: "100px 20px", background: "#f8fafc" }}>
      {/* Section Heading */}
      <div style={{ textAlign: "center", marginBottom: 70 }}>
        <Title level={2}>What Tailors Say About Us</Title>
        <Text type="secondary">
          Trusted by modern tailoring businesses worldwide.
        </Text>
      </div>

      {/* Testimonials Grid */}
      <Row gutter={[24, 24]} justify="center">
        {testimonials.map((item, index) => (
          <Col xs={24} md={8} key={index}>
            <Card
              bordered={false}
              style={{
                borderRadius: 16,
                height: "100%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
              }}
              hoverable
            >
              {/* Rating */}
              <Rate
                disabled
                defaultValue={item.rating}
                style={{ color: "#2563eb", marginBottom: 15 }}
              />

              {/* Feedback */}
              <Text style={{ color: "#4b5563", fontSize: 15 }}>
                "{item.feedback}"
              </Text>

              {/* User Info */}
              <div
                style={{
                  marginTop: 25,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar
                  size={50}
                  style={{
                    backgroundColor: "#2563eb",
                    marginRight: 15,
                  }}
                >
                  {item.name.charAt(0)}
                </Avatar>

                <div>
                  <Text strong>{item.name}</Text>
                  <br />
                  <Text type="secondary">{item.role}</Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Testimonials;
