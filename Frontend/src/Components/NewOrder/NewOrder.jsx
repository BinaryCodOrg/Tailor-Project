import React, { useEffect } from "react";
import { Form, Card, Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import { Order, WebContent } from "../../Store/Atom";
import {
  useNavigate,
  useLocation,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { openNotification, PatchAxios, PostAxios } from "../../assets/Api/Api";
import PersonalDetails from "../FormBlocks/PersonalDetails";
import KameezMeasurements from "../FormBlocks/KameezMeasurements";
import ShalwarMeasurements from "../FormBlocks/ShalwarMeasurements";
import ShirtBlock from "../FormBlocks/ShirtBlock";
import TrouserBlock from "../FormBlocks/TrouserBlock";
import WaistCoatBlock from "../FormBlocks/WaistCortBlock";
import NotesBlock from "../FormBlocks/NotesBlock";

const BASE = "/orders/new";

// Maps cloth type to an ordered list of route segments
const stepFlow = {
  "shalwar kameez": ["details", "kameez", "shalwar", "notes"],
  "Pant Shirt": ["details", "shirt", "trouser", "notes"],
  "Dress Shirt": ["details", "shirt", "notes"],
  "Dress Pent": ["details", "trouser", "notes"],
  "Waist Cort": ["details", "waistcoat", "notes"],
};

const NewOrder = () => {
  const [form] = Form.useForm();
  const [order, setOrder] = useRecoilState(Order);
  const webContent = useRecoilValue(WebContent);

  const Nav = useNavigate();
  const location = useLocation();

  // Derive current segment from URL, e.g. "/orders/new/shirt" → "shirt"
  const currentSegment = location.pathname.replace(`${BASE}/`, "") || "details";

  const getSteps = () => {
    const { typeOfCloth } = form.getFieldsValue(true);
    return stepFlow[typeOfCloth?.title] ?? ["details", "notes"];
  };

  const navigateTo = (segment) => Nav(`${BASE}/${segment}`);

  const nextStep = async () => {
    try {
      await form.validateFields();

      const { typeOfCloth } = form.getFieldsValue(true);

      if (!typeOfCloth) {
        openNotification("error", "topRight", "Error", "Select cloth type");
        return;
      }

      const steps = getSteps();
      const index = steps.indexOf(currentSegment);
      setOrder(form.getFieldsValue(true));

      if (index !== -1 && index < steps.length - 1) {
        navigateTo(steps[index + 1]);
      }
    } catch {
      // validation failed — Ant Design shows field errors automatically
    }
  };

  const prevStep = () => {
    const steps = getSteps();
    const index = steps.indexOf(currentSegment);
    if (index > 0) navigateTo(steps[index - 1]);
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
        setOrder({});
        openNotification("success", "topRight", "Success", "Saved");
        Nav("/");
      }
    } catch (error) {
      openNotification("error", "topRight", "Error", error.message);
    }
  };

  const isFinalStep = currentSegment === "notes";
  const isFirstStep = currentSegment === "details";

  return (
    <div className="bold-order-wrapper">
      <Card
        className="bold-order-card"
        bordered={false}
        styles={{ body: { padding: "0px" } }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onSubmit}
          autoComplete="off"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.97 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <Routes>
                <Route
                  index
                  element={<Navigate to={`${BASE}/details`} replace />}
                />
                <Route
                  path="details"
                  element={<PersonalDetails form={form} />}
                />
                <Route path="kameez" element={<KameezMeasurements />} />
                <Route path="shalwar" element={<ShalwarMeasurements />} />
                <Route path="shirt" element={<ShirtBlock />} />
                <Route path="trouser" element={<TrouserBlock />} />
                <Route path="waistcoat" element={<WaistCoatBlock />} />
                <Route path="notes" element={<NotesBlock />} />
              </Routes>
            </motion.div>
          </AnimatePresence>

          <div className="step-controls">
            {!isFirstStep && (
              <Button
                onClick={prevStep}
                size="large"
                styles={{ root: { width: "300px" } }}
              >
                Back
              </Button>
            )}

            {!isFinalStep ? (
              <Button
                key="continueButton"
                type="primary"
                size="large"
                styles={{ root: { width: "300px" } }}
                onClick={nextStep}
              >
                Continue
              </Button>
            ) : (
              <Button
                key="submitButton"
                type="primary"
                size="large"
                styles={{ root: { width: "300px" } }}
                htmlType="submit"
              >
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
