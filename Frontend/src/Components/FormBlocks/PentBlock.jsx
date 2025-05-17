import React from "react";
import { Image, Row } from "react-bootstrap";
import CInput from "../../assets/Custom/CInput";
import CButton from "../../assets/Custom/CButton";

const PentBlock = ({
  values,
  webContent,
  setFieldValue,
  prevStep,
  nextStep,
  generateOptions,
  sideImage,
}) => {
  return (
    <>
      <div className="col-md-6">
        <Row className="justify-content-center">
          <h4 className="text-center Head2">
            {webContent?.InputForm?.FirstSet?.title || ""}
          </h4>
          <div className="col-md-6 mt-2">
            <CInput
              label={webContent?.InputForm?.SecondSet?.length || ""}
              type="number"
              name="pentLength"
            />
          </div>

          <div className="col-md-6 mt-2">
            <CInput
              label={webContent?.InputForm?.thirdSet?.hip || ""}
              type="number"
              name="hip"
            />
          </div>

          <div className="col-md-6 mt-2">
            <CInput
              label={webContent?.InputForm?.thirdSet?.thigh || ""}
              type="number"
              name="thigh"
            />
          </div>

          <div className="col-md-6 mt-2">
            <CInput
              label={webContent?.InputForm?.thirdSet?.bottom || ""}
              type="number"
              name="bottom"
            />
          </div>

          <div className="col-md-6 mt-2">
            <CInput
              label={webContent?.InputForm?.thirdSet?.frontRaise || ""}
              type="number"
              name="frontRaise"
            />
          </div>

          <div className="col-md-6 mt-2">
            <CInput
              label={webContent?.InputForm?.thirdSet?.backRaise || ""}
              type="number"
              name="backRaise"
            />
          </div>

          <div className="col-md-12 mt-4">
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
                  callBackFunction={() => nextStep(values)}
                  text="Next"
                  type="primary"
                />
              </div>
            </Row>
          </div>
        </Row>
      </div>
      <div className="col-md-6">
        <div className="d-none d-md-flex justify-content-center align-items-center h-100">
          <Image src={sideImage} fluid style={{ width: "65%" }} />
        </div>
      </div>
    </>
  );
};

export default PentBlock;
