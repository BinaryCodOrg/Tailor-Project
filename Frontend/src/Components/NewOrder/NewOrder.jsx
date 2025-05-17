// import React from 'react';
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Orders, WebContent } from "../../Store/Atom";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import PersonalDetails from "../FormBlocks/PersonalDetails";
import { openNotification, PatchAxios, PostAxios } from "../../assets/Api/Api";
import KameezBlock from "../FormBlocks/KameezBlock";
import ShalwarBlock from "../FormBlocks/ShalwarBlock";
import NotesBlock from "../FormBlocks/NotesBlock";

import PersonSvg1 from "../../assets/SVG/Opinion-pana.svg";
import PersonSvg2 from "../../assets/Images/Sizes/kameez_1_480x480.webp";
import PersonSvg3 from "../../assets/Images/Sizes/shalwar_480x480.webp";
import PersonSvg4 from "../../assets/Images/Sizes/dress-shirts-sizechart.webp";
import PersonSvg5 from "../../assets/Images/Sizes/dress-pant-sizechart.webp";
import PersonSvg8 from "../../assets/Images/Sizes/Waist-Coat-size-chart-mobile_1024x1024_59f61df9-1ca5-45aa-95a0-cb4a885cdd26.webp";
import PersonSvg9 from "../../assets/SVG/Thinking face-rafiki.svg";
import ShirtBlock from "../FormBlocks/ShirtBlock";
import PentBlock from "../FormBlocks/PentBlock";
import WaistCortBlock from "../FormBlocks/WaistCortBlock";

const NewOrder = (props) => {
  let [orders, setOrders] = useRecoilState(Orders);

  let Nav = useNavigate();
  let webContent = useRecoilValue(WebContent);
  const [step, setStep] = useState(1);

  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // console.log(
    //   searchParams.get("Order")
    //   ,orders
    // );

    let orderId = searchParams.get("Order");
    if (orderId) {
      const existingOrder = orders.find((order) => order._id === orderId);
      // console.log(existingOrder)
      if (existingOrder) {
        setInitialValues(existingOrder);
      }
    }
  }, [location]);

  const stepFlow = {
    "shalwar kameez": [1, 2, 3, "final"],
    "Pant Shirt": [1, 4, 5, "final"],
    "Dress Shirt": [1, 6, "final"],
    "Dress Pent": [1, 7, "final"],
    "Waist Cort": [1, 8, "final"],
  };

  const nextStep = (values) => {
    const { typeOfCloth } = values;
    if (!typeOfCloth) {
      return openNotification(
        "error",
        "topRight",
        "Error Notification",
        "Please Select cloth Type"
      );
    }

    const steps = stepFlow[typeOfCloth];
    const currentIndex = steps.indexOf(step);

    if (currentIndex !== -1 && currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    }
  };

  const prevStep = (values) => {
    const { typeOfCloth } = values;
    if (!typeOfCloth) return;

    const steps = stepFlow[typeOfCloth];
    const currentIndex = steps.indexOf(step);

    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
    }
  };

  const onSubmit = async (values) => {
    console.log("Form data", JSON.stringify(values));

    try {
      let res = "";
      if (!values?._id) {
        values.status = "Pending";
        res = await PostAxios("/order/add", values);
      } else {
        res = await PatchAxios("/order/update", values);
      }

      if (res) {
        if (!values?._id) {
          setOrders((prev) => [...prev, res]);
          openNotification(
            "success",
            "topRight",
            "Order Created",
            "Order has been created successfully"
          );
        } else {
          setOrders((prev) =>
            prev.map((order) => (order._id === values._id ? res : order))
          );
          openNotification(
            "success",
            "topRight",
            "Order Updated",
            "Order has been updated successfully"
          );
        }

        Nav("/");
      }
    } catch (error) {
      console.log("Error:", error);
      openNotification(
        "error",
        "topRight",
        "Error Notification",
        error.message
      );
    }

    // Reset the flag state if necessary
    // if (props.flagState) {
    //     props.setFlagState(false);
    // }
  };

  const [initialValues, setInitialValues] = useState(() => {
    // if (orderId !== "No Id Provider") {
    //   alert(orderId);
    // } else {
    return {
      name: "",
      receivedDate: "",
      returnDate: "",
      numberOfSuits: "",
      length: "",
      typeOfSewing: "",
      fullShoulder: "",
      monda: "",
      bazoHalf: "",
      bazoLength: "",
      chest: "",
      stomach: "",
      ghara: "",
      banCollar: "",
      collarType: "",
      pentOption: "",
      shalwarGhara: "",
      poncha: "",
      asang: "",
      typeOfButton: "",
      kuff: "",
      pati: "",
      pakit: "",
      note: "",
      design: "",
    };
    // }
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    receivedDate: Yup.date().required("Required"),
    returnDate: Yup.date().required("Required"),
    numberOfSuits: Yup.number().required("Required"),
    length: Yup.number().required("Required"),
    typeOfSewing: Yup.string().required("Required"),
    fullShoulder: Yup.number().required("Required"),
    monda: Yup.number().required("Required"),
    bazoHalf: Yup.number().required("Required"),
    bazoLength: Yup.number().required("Required"),
    chest: Yup.number().required("Required"),
    stomach: Yup.number().required("Required"),
    ghara: Yup.number().required("Required"),
    banCollar: Yup.string().required("Required"),
    collarType: Yup.string().when("banCollar", {
      is: "collar",
      then: Yup.string().required("Required"),
    }),
    pentOption: Yup.string().required("Required"),
    shalwarGhara: Yup.number().required("Required"),
    poncha: Yup.number().required("Required"),
    asang: Yup.number().required("Required"),
    typeOfButton: Yup.string().required("Required"),
    kuff: Yup.number().required("Required"),
    pati: Yup.number().required("Required"),
    pakit: Yup.number().required("Required"),
    note: Yup.string(),
    design: Yup.string(),
  });

  const generateOptions = (prefix) => {
    return Array.from({ length: 10 }, (_, i) => ({
      value: `${prefix}${i + 1}`,
      label: `${prefix}${i + 1}`,
    }));
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
      innerRef={props.formRef}
      enableReinitialize
    >
      {({ values, handleChange, setFieldValue, handleBlur }) => {
        return (
          <Form className="container mt-5">
            <Row className="align-items-center">
              {/* we will add components for every From insted of conditional rendring */}
              {step === 1 && (
                <PersonalDetails
                  values={values}
                  webContent={webContent}
                  setFieldValue={setFieldValue}
                  prevStep={prevStep}
                  nextStep={nextStep}
                  sideImage={PersonSvg1}
                />
              )}

              {step === 2 && (
                <KameezBlock
                  values={values}
                  webContent={webContent}
                  setFieldValue={setFieldValue}
                  prevStep={prevStep}
                  nextStep={nextStep}
                  generateOptions={generateOptions}
                  sideImage={PersonSvg2}
                />
              )}
              {step === 3 && (
                <ShalwarBlock
                  values={values}
                  webContent={webContent}
                  setFieldValue={setFieldValue}
                  prevStep={prevStep}
                  nextStep={nextStep}
                  generateOptions={generateOptions}
                  sideImage={PersonSvg3}
                />
              )}

              {step === 4 && (
                <ShirtBlock
                  values={values}
                  webContent={webContent}
                  setFieldValue={setFieldValue}
                  prevStep={prevStep}
                  nextStep={nextStep}
                  generateOptions={generateOptions}
                  sideImage={PersonSvg4}
                />
              )}

              {step === 5 && (
                <PentBlock
                  values={values}
                  webContent={webContent}
                  setFieldValue={setFieldValue}
                  prevStep={prevStep}
                  nextStep={nextStep}
                  generateOptions={generateOptions}
                  sideImage={PersonSvg5}
                />
              )}

              {step === 6 && (
                <ShirtBlock
                  values={values}
                  webContent={webContent}
                  setFieldValue={setFieldValue}
                  prevStep={prevStep}
                  nextStep={nextStep}
                  generateOptions={generateOptions}
                  sideImage={PersonSvg4}
                />
              )}

              {step === 7 && (
                <PentBlock
                  values={values}
                  webContent={webContent}
                  setFieldValue={setFieldValue}
                  prevStep={prevStep}
                  nextStep={nextStep}
                  generateOptions={generateOptions}
                  sideImage={PersonSvg5}
                />
              )}

              {step === 8 && (
                <WaistCortBlock
                  values={values}
                  webContent={webContent}
                  setFieldValue={setFieldValue}
                  prevStep={prevStep}
                  nextStep={nextStep}
                  generateOptions={generateOptions}
                  sideImage={PersonSvg8}
                />
              )}

              {step === "final" && (
                <NotesBlock
                  values={values}
                  webContent={webContent}
                  setFieldValue={setFieldValue}
                  prevStep={prevStep}
                  nextStep={nextStep}
                  generateOptions={generateOptions}
                  sideImage={PersonSvg9}
                  onSubmit={onSubmit}
                />
              )}
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
};

export default NewOrder;

/*

 <div className="col-md-6">
                <h4 className="text-center Head2 d-none">
                  {webContent?.Pages?.NewOrder || ""}
                </h4>
              
                {step === 2 && (
                  <Row className="justify-content-center">
                    <div className="col-md-6 mt-2">
                      <CInput
                        label={webContent?.InputForm?.SecondSet?.length || ""}
                        type="number"
                        name="length"
                      />
                    </div>
                    {values.typeOfCloth == "Waist Cort" && (
                      <React.Fragment>
                        <div className="col-md-6 mt-2">
                          <CInput
                            label={
                              webContent?.InputForm?.SecondSet?.patternCut || ""
                            }
                            type="number"
                            name="patternCut"
                          />
                        </div>
                      </React.Fragment>
                    )}
                    {values.typeOfCloth != "Waist Cort" && (
                      <React.Fragment>
                        <div className="col-md-6 mt-2">
                          <CInput
                            label={
                              webContent?.InputForm?.SecondSet?.typeOfSewing ||
                              ""
                            }
                            type="select"
                            name="typeOfSewing"
                            options={[
                              {
                                value: "single Sewing",
                                label: "Single Sewing",
                              },
                              {
                                value: "double Sewing",
                                label: "Double Sewing",
                              },
                              {
                                value: "triple Sewing",
                                label: "Triple Sewing",
                              },
                              {
                                value: "Hidden Sewing",
                                label: "Hidden Sewing",
                              },
                            ]}
                          />
                        </div>
                        <div className="col-md-6 mt-2">
                          <CInput
                            label={
                              webContent?.InputForm?.SecondSet?.fullShoulder ||
                              ""
                            }
                            type="number"
                            name="fullShoulder"
                          />
                        </div>
                        <div className="col-md-6 mt-2">
                          <CInput
                            label={
                              webContent?.InputForm?.SecondSet?.monda || ""
                            }
                            type="number"
                            name="monda"
                          />
                        </div>
                        <div className="col-md-6 mt-2">
                          <CInput
                            label={
                              webContent?.InputForm?.SecondSet?.bazoHalf || ""
                            }
                            type="number"
                            name="bazoHalf"
                          />
                        </div>
                        <div className="col-md-6 mt-2">
                          <CInput
                            label={
                              webContent?.InputForm?.SecondSet?.bazoLength || ""
                            }
                            type="number"
                            name="bazoLength"
                          />
                        </div>
                      </React.Fragment>
                    )}

                    <div className="col-md-6 mt-2">
                      <CInput
                        label={webContent?.InputForm?.SecondSet?.chest || ""}
                        type="number"
                        name="chest"
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <CInput
                        label={webContent?.InputForm?.SecondSet?.wast || ""}
                        type="number"
                        name="stomach"
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <CInput
                        label={webContent?.InputForm?.SecondSet?.ghara || ""}
                        type="number"
                        name="ghara"
                      />
                    </div>
                    {values.typeOfCloth != "Waist Cort" && (
                      <React.Fragment>
                        <div className="col-md-6 mt-2">
                          <CInput
                            label={
                              webContent?.InputForm?.SecondSet?.banCollar || ""
                            }
                            type="select"
                            name="banCollar"
                            options={[
                              { value: "Ban", label: "Ban" },
                              { value: "Collar", label: "Collar" },
                            ]}
                            onChangeCallback={(
                              values,
                              setFieldValue,
                              CurrentInput
                            ) => {
                              setFieldValue(
                                CurrentInput.name,
                                CurrentInput.value
                              );
                              if (CurrentInput.value === "Collar") {
                                setFieldValue("collarType", "");
                              } else {
                                setFieldValue("collarType", "");
                              }
                            }}
                          />
                        </div>
                        <div className="col-md-6 mt-2">
                          <CInput
                            label={
                              values.banCollar === "Collar"
                                ? webContent?.InputForm?.SecondSet?.BanSize ||
                                  ""
                                : webContent?.InputForm?.SecondSet?.BanSize2 ||
                                  ""
                            }
                            type="number"
                            name="BanSize"
                          />
                        </div>
                        <div className="col-md-6 mt-2">
                          <CInput
                            label={
                              values.banCollar === "Collar"
                                ? webContent?.InputForm?.SecondSet
                                    ?.collarType || ""
                                : webContent?.InputForm?.SecondSet
                                    ?.collarType2 || ""
                            }
                            type="select"
                            name="collarType"
                            options={
                              values.banCollar === "Collar"
                                ? generateOptions("C")
                                : generateOptions("B")
                            }
                          />
                        </div>
                      </React.Fragment>
                    )}

                    <div className="col-md-12 mt-3">
                      <Row className="justify-content-between">
                        <div className="col-md-4 mt-2">
                          <CButton
                            styles={{ width: "100%" }}
                            callBackFunction={() => prevStep(values)}
                            text="Back"
                            type="primary"
                          />
                        </div>

                        <div className="col-md-4 mt-3">
                          <CButton
                            styles={{ width: "100%" }}
                            callBackFunction={() => nextStep(values)}
                            text="Next"
                            type="primary"
                          />
                        </div>
                      </Row>
                    </div>
                  </Row>
                )}
                {step === 3 && (
                  <Row>
                    <div className="col-md-6 mt-2">
                      <CInput
                        label={
                          webContent?.InputForm?.thirdSet?.pentOption || ""
                        }
                        type="select"
                        name="pentOption"
                        options={[
                          { value: "Shalwar", label: "Shalwar" },
                          { value: "Pajama", label: "Pajama" },
                          { value: "Pent Pajama", label: "Pent Pajama" },
                        ]}
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <CInput
                        label={
                          webContent?.InputForm?.thirdSet?.shalwarGhara || ""
                        }
                        type="number"
                        name="shalwarGhara"
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <CInput
                        label={
                          webContent?.InputForm?.thirdSet?.shalwarLength || ""
                        }
                        type="number"
                        name="shalwarLength"
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <CInput
                        label={webContent?.InputForm?.thirdSet?.poncha || ""}
                        type="number"
                        name="poncha"
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <CInput
                        label={webContent?.InputForm?.thirdSet?.asang || ""}
                        type="number"
                        name="asang"
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <CInput
                        label={
                          webContent?.InputForm?.thirdSet?.typeOfButton || ""
                        }
                        type="select"
                        name="typeOfButton"
                        options={[
                          { value: "Simple", label: "Simple" },
                          { value: "Fancy", label: "Fancy" },
                        ]}
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <CInput
                        label={webContent?.InputForm?.thirdSet?.kuff || ""}
                        type="number"
                        name="kuff"
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <CInput
                        label={webContent?.InputForm?.thirdSet?.pati || ""}
                        type="text"
                        name="pati"
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <CInput
                        label={webContent?.InputForm?.thirdSet?.pakit || ""}
                        type="text"
                        name="pakit"
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <CInput
                        label={webContent?.InputForm?.thirdSet?.note || ""}
                        type="textarea"
                        name="note"
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <CInput
                        label={webContent?.InputForm?.thirdSet?.design || ""}
                        type="textarea"
                        name="design"
                      />
                    </div>

                    <div className="col-md-12 mt-2">
                      <Row className="justify-content-between">
                        <div className="col-md-4 mt-2">
                          <CButton
                            styles={{ width: "100%" }}
                            callBackFunction={() => prevStep(values)}
                            text="Back"
                            type="primary"
                          />
                        </div>

                        <div className="col-md-4 mt-2">
                          <CButton
                            styles={{ width: "100%" }}
                            callBackFunction={() => {
                              onSubmit(values);
                            }}
                            text="Submit"
                            type="primary"
                          />
                        </div>
                      </Row>
                    </div>
                  </Row>
                )}
              </div>
              <div className="col-md-6 h-100">
     
                <div style={{ height: "50vh" }}>
                {step === 1 && <UserRoundedIcon />}
                {step === 2 && <ShirtSvgRepoCom />}
                {step === 3 && <JeansSvgRepoCom />}
              </div>
          </div>

*/
