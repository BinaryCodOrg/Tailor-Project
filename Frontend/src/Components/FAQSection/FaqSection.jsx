import React from "react";
import { Collapse, Typography } from "antd";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const faqData = [
  {
    question: "How does the measurement system work?",
    answer:
      "Our platform allows tailors to enter customer measurements digitally. These measurements automatically update the live garment preview and can be exported as PDF for workshop use.",
  },
  {
    question: "Can I manage multiple tailoring branches?",
    answer:
      "Yes. Ultra and Enterprise plans support multi-branch management, allowing you to track orders, staff, and inventory across different store locations.",
  },
  {
    question: "Does the platform generate patterns automatically?",
    answer:
      "Yes. The Pro plan and above include our smart pattern generator that converts measurements into ready-to-use cutting references.",
  },
  {
    question: "Can I customize branding for my tailoring shop?",
    answer:
      "Absolutely. Ultra and Enterprise plans allow you to apply custom logos, brand colors, and white-label the system under your tailoring brand.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes. Our Standard plan is free and allows you to test core features before upgrading.",
  },
  {
    question: "Do you support team collaboration?",
    answer:
      "Yes. Pro allows limited staff access, Ultra includes up to 5 team members, and Enterprise supports unlimited users.",
  },
  {
    question: "Can I export customer measurements as PDF?",
    answer:
      "Yes. All plans allow PDF exports of measurement sheets for workshop or record keeping.",
  },
  {
    question: "Is Enterprise white-label available?",
    answer:
      "Yes. Enterprise clients receive a fully white-labeled version of the platform with custom integrations and dedicated support.",
  },
];

const FaqSection = () => {
  return (
    <div style={{ padding: "80px 20px", background: "#ffffff" }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <Title level={2}>Frequently Asked Questions</Title>
        <Text type="secondary">
          Everything you need to know about Tailor Project.
        </Text>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Collapse
          accordion
          bordered={false}
          expandIconPosition="end"
          style={{
            background: "#f8fafc",
            borderRadius: 16,
            padding: 20,
          }}
        >
          {faqData.map((faq, index) => (
            <Panel
              header={
                <span style={{ fontWeight: 600, fontSize: 16 }}>
                  {faq.question}
                </span>
              }
              key={index}
              style={{
                background: "#ffffff",
                borderRadius: 12,
                marginBottom: 12,
                border: "1px solid #e5e7eb",
              }}
            >
              <Text style={{ color: "#4b5563" }}>{faq.answer}</Text>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default FaqSection;
