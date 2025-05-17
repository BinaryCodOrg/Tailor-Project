import React from "react";
import { Image, Row } from "react-bootstrap";
import CInput from "../../assets/Custom/CInput";
import CButton from "../../assets/Custom/CButton";

const ShalwarBlock = ({
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
              label={webContent?.InputForm?.thirdSet?.pentOption || ""}
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
              label={webContent?.InputForm?.thirdSet?.shalwarGhara || ""}
              type="number"
              name="shalwarGhara"
            />
          </div>
          <div className="col-md-6 mt-2">
            <CInput
              label={webContent?.InputForm?.thirdSet?.shalwarLength || ""}
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

export default ShalwarBlock;
