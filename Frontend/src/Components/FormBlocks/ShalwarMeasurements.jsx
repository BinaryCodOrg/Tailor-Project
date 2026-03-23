import React, { useState } from "react";
import { Form, InputNumber, Row, Col, Select } from "antd";
import { motion } from "framer-motion";
import ShalwarPreview from "./ShalwarPreview";
import "./Shalwar.css";

const { Option } = Select;

const ShalwarMeasurements = () => {
  const [activeField, setActiveField] = useState(null);

  const fields = [
    { label: "Outseam Length", name: "length", part: "length" },
    { label: "Seat Width", name: "hip", part: "hip" },
    { label: "Leg Opening (Poncha)", name: "poncha", part: "bottom" },
    { label: "Hip / Thigh Width (Asan)", name: "asan", part: "thigh" },
    { label: "Cuff Width", name: "kuff", part: "bottom" },
  ];

  return (
    <Row gutter={[40, 20]}>
      {/* LEFT FORM */}
      <Col xs={24} md={14}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="bold-title">Shalwar Measurements</h2>
          <p className="bold-subtitle">Enter measurements in inches</p>

          <Row gutter={[20, 18]} className="mt-3">
            <Col xs={24} md={12}>
              <Form.Item
                label="Garment Style"
                name="style"
                rules={[{ required: true }]}
              >
                <Select size="large">
                  <Option value="shalwar">Shalwar</Option>
                  <Option value="pajama">Pajama</Option>
                  <Option value="pantPajama">Pant Pajama</Option>
                </Select>
              </Form.Item>
            </Col>

            {fields.map((field) => (
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
                    step={0.5}
                    parser={(value) => value.replace(/[^\d.]/g, "")}
                    onFocus={() => setActiveField(field.part)}
                    onBlur={() => setActiveField(null)}
                  />
                </Form.Item>
              </Col>
            ))}

            <Col xs={24} md={12}>
              <Form.Item label="Waistband Style" name="patti">
                <Select size="large">
                  <Option value="simple">Simple</Option>
                  <Option value="design">Design</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item label="Pocket Type" name="pocket">
                <Select size="large">
                  <Option value="none">None</Option>
                  <Option value="side">Side Pocket</Option>
                  <Option value="back">Back Pocket</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </motion.div>
      </Col>

      {/* RIGHT SVG */}
      <Col xs={24} md={10}>
        <div className="shalwar-preview-wrapper">
          <ShalwarPreview activeField={activeField} />
        </div>
      </Col>
    </Row>
  );
};

export default ShalwarMeasurements;
