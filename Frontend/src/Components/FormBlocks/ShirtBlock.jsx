import React, { useState } from "react";
import { Form, InputNumber, Select, Row, Col } from "antd";
import { motion } from "framer-motion";
import ShirtPreview from "./ShirtPreview";
import "./Shirt.css";

const { Option } = Select;

const ShirtBlock = () => {
  const form = Form.useFormInstance();
  const collarStyle = Form.useWatch("collarStyle", form);
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
          <h2 className="bold-title">Shirt Measurements</h2>
          <p className="bold-subtitle">Enter all measurements in inches</p>
        </motion.div>

        <Row gutter={[24, 16]}>
          {/* Shirt Length */}
          <Col xs={24} md={12}>
            <Form.Item
              label="Shirt Length"
              name="shirtLength"
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

          {/* Shoulder Width */}
          <Col xs={24} md={12}>
            <Form.Item
              label="Shoulder Width"
              name="shoulderWidth"
              rules={[{ required: true }]}
            >
              <InputNumber
                size="large"
                style={{ width: "100%" }}
                min={0}
                onFocus={() => setActiveField("shoulder")}
                onBlur={() => setActiveField(null)}
              />
            </Form.Item>
          </Col>

          {/* Armhole */}
          <Col xs={24} md={12}>
            <Form.Item label="Armhole" name="armhole">
              <InputNumber
                size="large"
                style={{ width: "100%" }}
                min={0}
                onFocus={() => setActiveField("armhole")}
                onBlur={() => setActiveField(null)}
              />
            </Form.Item>
          </Col>

          {/* Sleeve Length */}
          <Col xs={24} md={12}>
            <Form.Item label="Sleeve Length" name="sleeveLength">
              <InputNumber
                size="large"
                style={{ width: "100%" }}
                min={0}
                onFocus={() => setActiveField("sleeve")}
                onBlur={() => setActiveField(null)}
              />
            </Form.Item>
          </Col>

          {/* Chest Circumference */}
          <Col xs={24} md={12}>
            <Form.Item label="Chest Circumference" name="chestCircumference">
              <InputNumber
                size="large"
                style={{ width: "100%" }}
                min={0}
                onFocus={() => setActiveField("chest")}
                onBlur={() => setActiveField(null)}
              />
            </Form.Item>
          </Col>

          {/* Waist Circumference */}
          <Col xs={24} md={12}>
            <Form.Item label="Waist Circumference" name="waistCircumference">
              <InputNumber
                size="large"
                style={{ width: "100%" }}
                min={0}
                onFocus={() => setActiveField("waist")}
                onBlur={() => setActiveField(null)}
              />
            </Form.Item>
          </Col>

          {/* Hem Width */}
          <Col xs={24} md={12}>
            <Form.Item label="Hem Width" name="hemWidth">
              <InputNumber
                size="large"
                style={{ width: "100%" }}
                min={0}
                onFocus={() => setActiveField("hip")}
                onBlur={() => setActiveField(null)}
              />
            </Form.Item>
          </Col>

          {/* Collar Style */}
          <Col xs={24} md={12}>
            <Form.Item label="Collar Style" name="collarStyle">
              <Select
                size="large"
                onFocus={() => setActiveField("collar")}
                onBlur={() => setActiveField(null)}
              >
                <Option value="band">Band Collar</Option>
                <Option value="classic">Classic Collar</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Collar Size */}
          <Col xs={24} md={12}>
            <Form.Item label="Collar Size" name="collarSize">
              <InputNumber
                size="large"
                style={{ width: "100%" }}
                min={0}
                onFocus={() => setActiveField("collar")}
                onBlur={() => setActiveField(null)}
              />
            </Form.Item>
          </Col>

          {/* Collar Design Code */}
          <Col xs={24} md={12}>
            <Form.Item label="Collar Design Code" name="collarDesignCode">
              <Select
                size="large"
                onFocus={() => setActiveField("collar")}
                onBlur={() => setActiveField(null)}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <Option key={i} value={`CD-${i + 1}`}>
                    CD-{i + 1}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          {/* Chest Pocket */}
          <Col xs={24} md={12}>
            <Form.Item label="Chest Pocket" name="chestPocket">
              <Select
                size="large"
                onFocus={() => setActiveField("pocket")}
                onBlur={() => setActiveField(null)}
              >
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Col>

      {/* RIGHT SIDE SVG */}
      <Col xs={24} md={10}>
        <div className="shalwar-preview-wrapper">
          <ShirtPreview activeField={activeField} />
        </div>
      </Col>
    </Row>
  );
};

export default ShirtBlock;
