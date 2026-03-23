import React from "react";
import { Row, Col, Form, Input, Button, Image } from "antd";
import { motion } from "framer-motion";

const { TextArea } = Input;

const NotesBlock = ({ values, prevStep, onSubmit, sideImage }) => {
  return (
    <Row gutter={[40, 20]}>
      {/* LEFT SIDE */}
      <Col xs={24} md={24}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="bold-title">Additional Instructions</h2>
          <p className="bold-subtitle">
            Add any special tailoring notes or design details
          </p>

          <Row gutter={[20, 18]} className="mt-3">
            {/* General Notes */}
            <Col xs={24}>
              <Form.Item label="Tailoring Notes" name="note">
                <TextArea
                  rows={4}
                  placeholder="Enter stitching instructions, fitting preferences, or any special notes"
                />
              </Form.Item>
            </Col>

            {/* Design Instructions */}
            <Col xs={24}>
              <Form.Item label="Design Instructions" name="design">
                <TextArea
                  rows={4}
                  placeholder="Mention embroidery, piping, contrast fabric, or other design details"
                />
              </Form.Item>
            </Col>
          </Row>
        </motion.div>
      </Col>
    </Row>
  );
};

export default NotesBlock;
