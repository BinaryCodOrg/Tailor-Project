import React, { useState } from "react";
import { Form, InputNumber, Row, Col, Button } from "antd";
import { motion } from "framer-motion";
import { Image } from "antd";
import "./Trouser.css"; // reuse same styling vibe
import TrouserPreview from "./TrouserPreview";

const TrouserBlock = ({ prevStep, nextStep, sideImage }) => {
  const [activeField, setActiveField] = useState(null);

  return (
    <Row gutter={[40, 20]}>
      {/* LEFT SIDE FORM */}
      <Col xs={24} md={14}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="bold-title">Trouser Measurements</h2>
          <p className="bold-subtitle">Enter all measurements in inches</p>
        </motion.div>

        <Row gutter={[24, 16]}>
          {/* Trouser Length */}
          <Col xs={24} md={12}>
            <Form.Item
              label="Trouser Length"
              name="trouserLength"
              rules={[{ required: true }]}
            >
              <InputNumber
                size="large"
                style={{ width: "100%" }}
                min={0}
                onFocus={() => setActiveField("length")}
                onBlur={() => setActiveField(null)}
              />
            </Form.Item>
          </Col>

          {/* Hip Circumference */}
          <Col xs={24} md={12}>
            <Form.Item
              label="Hip Circumference"
              name="hipCircumference"
              rules={[{ required: true }]}
            >
              <InputNumber
                size="large"
                style={{ width: "100%" }}
                min={0}
                onFocus={() => setActiveField("hip")}
                onBlur={() => setActiveField(null)}
              />
            </Form.Item>
          </Col>

          {/* Thigh Circumference */}
          <Col xs={24} md={12}>
            <Form.Item label="Thigh Circumference" name="thighCircumference">
              <InputNumber
                size="large"
                style={{ width: "100%" }}
                min={0}
                onFocus={() => setActiveField("thigh")}
                onBlur={() => setActiveField(null)}
              />
            </Form.Item>
          </Col>

          {/* Leg Opening Width */}
          <Col xs={24} md={12}>
            <Form.Item label="Leg Opening Width" name="legOpeningWidth">
              <InputNumber
                size="large"
                style={{ width: "100%" }}
                min={0}
                onFocus={() => setActiveField("bottom")}
                onBlur={() => setActiveField(null)}
              />
            </Form.Item>
          </Col>

          {/* Front Rise */}
          <Col xs={24} md={12}>
            <Form.Item label="Front Rise" name="frontRise">
              <InputNumber
                size="large"
                style={{ width: "100%" }}
                min={0}
                onFocus={() => setActiveField("frontRise")}
                onBlur={() => setActiveField(null)}
              />
            </Form.Item>
          </Col>

          {/* Back Rise */}
          <Col xs={24} md={12}>
            <Form.Item label="Back Rise" name="backRise">
              <InputNumber
                size="large"
                style={{ width: "100%" }}
                min={0}
                onFocus={() => setActiveField("backRise")}
                onBlur={() => setActiveField(null)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Col>

      {/* RIGHT SIDE IMAGE */}
      <Col xs={24} md={10}>
        <div className="shalwar-preview-wrapper">
          <TrouserPreview activeField={activeField} />
        </div>
      </Col>
    </Row>
  );
};

export default TrouserBlock;
