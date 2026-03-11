import React, { useEffect, useState } from "react";
import { Form, Card, Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import { Orders, WebContent } from "../../Store/Atom";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { openNotification, PatchAxios, PostAxios } from "../../assets/Api/Api";

import PersonalDetails from "../FormBlocks/PersonalDetails";
import KameezBlock from "../FormBlocks/KameezBlock";
import ShalwarBlock from "../FormBlocks/ShalwarBlock";
import ShirtBlock from "../FormBlocks/ShirtBlock";
import PentBlock from "../FormBlocks/PentBlock";
import WaistCortBlock from "../FormBlocks/WaistCortBlock";
import NotesBlock from "../FormBlocks/NotesBlock";

const NewOrder = () => {
  const [form] = Form.useForm();
  const [orders, setOrders] = useRecoilState(Orders);
  const webContent = useRecoilValue(WebContent);

  const Nav = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [step, setStep] = useState(1);

  const stepFlow = {
    "shalwar kameez": [1, 2, 3, "final"],
    "Pant Shirt": [1, 4, 5, "final"],
    "Dress Shirt": [1, 6, "final"],
    "Dress Pent": [1, 7, "final"],
    "Waist Cort": [1, 8, "final"],
  };

  const nextStep = async () => {
    try {
      const values = await form.validateFields();
      const { typeOfCloth } = values;

      if (!typeOfCloth) {
        openNotification("error", "topRight", "Error", "Select cloth type");
        return;
      }

      const steps = stepFlow[typeOfCloth];
      const index = steps.indexOf(step);

      if (index !== -1 && index < steps.length - 1) {
        setStep(steps[index + 1]);
      }
    } catch {
      // validation failed
    }
  };

  const prevStep = () => {
    const values = form.getFieldsValue();
    const steps = stepFlow[values.typeOfCloth];
    const index = steps.indexOf(step);

    if (index > 0) {
      setStep(steps[index - 1]);
    }
  };

  const onSubmit = async (values) => {
    try {
      let res = "";

      if (!values?._id) {
        values.status = "Pending";
        res = await PostAxios("/order/add", values);
      } else {
        res = await PatchAxios("/order/update", values);
      }

      if (res) {
        setOrders((prev) =>
          values?._id
            ? prev.map((o) => (o._id === values._id ? res : o))
            : [...prev, res],
        );

        openNotification("success", "topRight", "Success", "Saved");
        Nav("/");
      }
    } catch (error) {
      openNotification("error", "topRight", "Error", error.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <KameezBlock />;
      case 3:
        return <ShalwarBlock />;
      case 4:
      case 6:
        return <ShirtBlock />;
      case 5:
      case 7:
        return <PentBlock />;
      case 8:
        return <WaistCortBlock />;
      case "final":
        return <NotesBlock />;
      default:
        return null;
    }
  };

  return (
    <div className="bold-order-wrapper">
      <Card className="bold-order-card" bordered={false}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onSubmit}
          autoComplete="off"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.97 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          <div className="step-controls">
            {step !== 1 && (
              <Button onClick={prevStep} size="large">
                Back
              </Button>
            )}

            {step !== "final" ? (
              <Button type="primary" size="large" onClick={nextStep}>
                Continue
              </Button>
            ) : (
              <Button type="primary" size="large" htmlType="submit">
                Submit Order
              </Button>
            )}
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default NewOrder;
