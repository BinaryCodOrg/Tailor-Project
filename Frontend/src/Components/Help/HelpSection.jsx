import React, { useState } from "react";
import { Form, Input, Button, Card, Typography, message, Result } from "antd";

const { Title, Text } = Typography;
const { TextArea } = Input;

const HelpSection = () => {
  const [loading, setLoading] = useState(false);
  const [ticketId, setTicketId] = useState(null);

  const generateTicketId = () => {
    const random = Math.floor(10000 + Math.random() * 90000);
    return `TP-${random}`;
  };

  const onFinish = (values) => {
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const newTicketId = generateTicketId();
      setTicketId(newTicketId);
      setLoading(false);
      message.success("Support ticket created successfully!");
    }, 1500);
  };

  const resetForm = () => {
    setTicketId(null);
  };

  return (
    <div style={{ padding: "80px 20px", background: "#f8fafc" }}>
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <Title level={2}>Need Help?</Title>
        <Text type="secondary">
          Submit a support ticket and our team will assist you.
        </Text>
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        {!ticketId ? (
          <Card
            bordered={false}
            style={{
              borderRadius: 16,
              boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
            }}
          >
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Subject"
                name="subject"
                rules={[
                  { required: true, message: "Please enter ticket subject" },
                ]}
              >
                <Input placeholder="Enter ticket subject" size="large" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <TextArea
                  rows={5}
                  placeholder="Describe your issue..."
                  size="large"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                size="large"
                block
                style={{
                  background: "#2563eb",
                  border: "none",
                  height: 45,
                  fontWeight: 600,
                }}
              >
                Submit Ticket
              </Button>
            </Form>
          </Card>
        ) : (
          <Result
            status="success"
            title="Your Ticket Has Been Submitted!"
            subTitle={
              <span>
                Your Ticket ID is:{" "}
                <Text strong style={{ color: "#2563eb" }}>
                  {ticketId}
                </Text>
                <br />
                Please keep this ID for future reference.
              </span>
            }
            extra={[
              <Button
                type="primary"
                key="new"
                onClick={resetForm}
                style={{
                  background: "#2563eb",
                  border: "none",
                }}
              >
                Create Another Ticket
              </Button>,
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default HelpSection;
