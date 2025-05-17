import React from "react";
import { Image, Row } from "react-bootstrap";
import CInput from "../../assets/Custom/CInput";
import CButton from "../../assets/Custom/CButton";

const ShirtBlock = ({
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
              name="length"
            />
          </div>

          <div className="col-md-6 mt-2">
            <CInput
              label={webContent?.InputForm?.SecondSet?.Sholder || ""}
              type="number"
              name="Sholder"
            />
          </div>
          <div className="col-md-6 mt-2">
            <CInput
              label={webContent?.InputForm?.SecondSet?.monda || ""}
              type="number"
              name="monda"
            />
          </div>

          <div className="col-md-6 mt-2">
            <CInput
              label={webContent?.InputForm?.SecondSet?.bazoHalf || ""}
              type="number"
              name="bazoHalf"
            />
          </div>

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

          <div className="col-md-6 mt-2">
            <CInput
              label={webContent?.InputForm?.SecondSet?.banCollar || ""}
              type="select"
              name="banCollar"
              options={[
                { value: "Ban", label: "Ban" },
                { value: "Collar", label: "Collar" },
              ]}
              onChangeCallback={(values, setFieldValue, CurrentInput) => {
                setFieldValue(CurrentInput.name, CurrentInput.value);
                setFieldValue("collarType", "");
              }}
            />
          </div>

          <div className="col-md-6 mt-2">
            <CInput
              label={
                values.banCollar === "Collar"
                  ? webContent?.InputForm?.SecondSet?.BanSize || ""
                  : webContent?.InputForm?.SecondSet?.BanSize2 || ""
              }
              type="number"
              name="BanSize"
            />
          </div>

          <div className="col-md-6 mt-2">
            <CInput
              label={
                values.banCollar === "Collar"
                  ? webContent?.InputForm?.SecondSet?.collarType || ""
                  : webContent?.InputForm?.SecondSet?.collarType2 || ""
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

export default ShirtBlock;
