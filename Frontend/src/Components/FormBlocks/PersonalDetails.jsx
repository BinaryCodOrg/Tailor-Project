import React from "react";
import { Form, Input, DatePicker, InputNumber, Row, Col, Card } from "antd";
import { motion } from "framer-motion";
import { Image } from "react-bootstrap";
import Shalwar_kameez from "../../assets/Images/product_images/shalwar kameez.png";
import Pent_shirt from "../../assets/Images/product_images/Pent shirt.png";
import Dress_shirt from "../../assets/Images/product_images/Shirt.png";
import Dress_pent from "../../assets/Images/product_images/pent.png";
import waist_Cort from "../../assets/Images/product_images/Waist cort.png";

const clothOptions = [
  { title: "shalwar kameez", image: Shalwar_kameez },
  { title: "Pant Shirt", image: Pent_shirt },
  { title: "Waist Cort", image: waist_Cort },
  { title: "Dress Shirt", image: Dress_shirt },
  { title: "Dress Pent", image: Dress_pent },
];

const PersonalDetails = ({ form }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2
          className="bold-title"
          onClick={() => console.log(form.getFieldValue("typeOfCloth"))}
        >
          Create New Order
        </h2>
        <p className="bold-subtitle">
          Enter customer details and select cloth type
        </p>
      </motion.div>

      <Row gutter={[24]} className="mt-3">
        <Col xs={24} md={8}>
          <Form.Item
            label="Customer Name"
            name="name"
            rules={[{ required: true, message: "Enter name" }]}
          >
            <Input size="large" placeholder="John Doe" />
          </Form.Item>
        </Col>

        <Col xs={24} md={8}>
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              { required: true },
              { pattern: /^[0-9]+$/, message: "Numbers only" },
            ]}
          >
            <Input size="large" placeholder="03XXXXXXXXX" />
          </Form.Item>
        </Col>

        <Col xs={24} md={8}>
          <Form.Item
            label="Received Date"
            name="receivedDate"
            rules={[{ required: true }]}
          >
            <DatePicker size="large" style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col xs={24} md={8}>
          <Form.Item
            label="Return Date"
            name="returnDate"
            rules={[{ required: true }]}
          >
            <DatePicker size="large" style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col xs={24} md={8}>
          <Form.Item
            label="Number of Suits"
            name="numberOfSuits"
            rules={[{ required: true }]}
          >
            <InputNumber size="large" min={1} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      {/* Cloth Type Visual Selector */}
      <Form.Item
        label="Type of Cloth"
        name="typeOfCloth"
        rules={[{ required: true, message: "Select cloth type" }]}
        className="mt-4"
      >
        <Row gutter={[16, 16]}>
          {clothOptions.map((type) => (
            <Col xs={12} md={8} key={type.title}>
              <Form.Item
                noStyle
                shouldUpdate={(prev, curr) =>
                  prev.typeOfCloth !== curr.typeOfCloth
                }
              >
                {({ getFieldValue, setFieldsValue }) => {
                  const selected =
                    getFieldValue("typeOfCloth")?.title === type?.title;

                  return (
                    <Card
                      hoverable
                      onClick={() => setFieldsValue({ typeOfCloth: type })}
                      className={`cloth-card ${selected ? "selected" : ""}`}
                    >
                      <div className="cloth-card-inner">
                        <img
                          src={type.image}
                          alt={type.title}
                          className="cloth-card-img"
                        />
                        <span className="cloth-card-title">{type.title}</span>
                      </div>
                    </Card>
                  );
                }}
              </Form.Item>
            </Col>
          ))}
        </Row>
      </Form.Item>
    </motion.div>
  );
};

export default PersonalDetails;
