import React, { useState } from "react";
import { Form, InputNumber, Row, Col, Card, Select } from "antd";
import { motion } from "framer-motion";
import KameezPreview from "./KameezPreview";
import "./Kameez.css";

const { Option } = Select;

const KameezMeasurements = ({ prevStep, nextStep }) => {
  const [activeField, setActiveField] = useState(null);

  const measurementFields = [
    { label: "Length", name: "length", part: "length" },
    { label: "Shoulder", name: "shoulder", part: "shoulder" },
    { label: "Chest", name: "chest", part: "chest" },
    { label: "Waist", name: "waist", part: "waist" },
    { label: "Hip / Ghara", name: "hip", part: "hip" },
    { label: "Sleeve Length", name: "sleeveLength", part: "sleeve" },
    { label: "Sleeve Round", name: "sleeveRound", part: "sleeveRound" },
    { label: "Armhole (Monda)", name: "armhole", part: "armhole" },
  ];

  return (
    <Row gutter={[40, 20]}>
      {/* LEFT SIDE FORM */}
      <Col xs={24} md={14}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="bold-title text-center">Kameez Measurements</h2>
          <p className="bold-subtitle text-center">
            Enter measurements in inches
          </p>

          <Row gutter={[20, 18]} className="mt-3">
            {measurementFields.map((field) => (
              <Col xs={24} md={12} key={field.name}>
                <Form.Item
                  label={field.label}
                  name={field.name}
                  rules={[{ required: true }]}
                >
                  <InputNumber
                    size="large"
                    style={{ width: "100%" }}
                    min={0}
                    parser={(value) => value.replace(/[^\d.]/g, "")}
                    formatter={(value) => `${value}`}
                    onFocus={() => setActiveField(field.part)}
                    onBlur={() => setActiveField(null)}
                  />
                </Form.Item>
              </Col>
            ))}

            <Col xs={24} md={12}>
              <Form.Item
                label="Collar Style"
                name="collarStyle"
                rules={[{ required: true }]}
              >
                <Select
                  size="large"
                  onFocus={() => setActiveField("collar")}
                  onBlur={() => setActiveField(null)}
                >
                  <Option value="ban">Ban</Option>
                  <Option value="collar">Collar</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Button Type"
                name="buttonType"
                rules={[{ required: true }]}
              >
                <Select size="large">
                  <Option value="simple">Simple</Option>
                  <Option value="fancy">Fancy</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </motion.div>
      </Col>

      {/* RIGHT SIDE KAMEEZ SVG */}
      <Col xs={24} md={10} >
        <KameezPreview activeField={activeField} />
      </Col>
    </Row>
  );
};

export default KameezMeasurements;
