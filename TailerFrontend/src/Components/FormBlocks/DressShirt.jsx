import React from "react";
import { Row } from "react-bootstrap";
import CInput from "./CInput"; // Adjust path based on your file structure
import CButton from "./CButton";

const DressShirt = ({
  values,
  webContent,
  setFieldValue,
  prevStep,
  nextStep,
}) => {
  return (
    <Row className="justify-content-center">
      <div className="col-md-6 mt-2">
        <CInput
          label={webContent?.InputForm?.SecondSet?.length || ""}
          type="number"
          name="length"
        />
      </div>

      <div className="col-md-6 mt-2">
        <CInput
          label={webContent?.InputForm?.SecondSet?.typeOfSewing || ""}
          type="select"
          name="typeOfSewing"
          options={[
            { value: "single Sewing", label: "Single Sewing" },
            { value: "double Sewing", label: "Double Sewing" },
            { value: "triple Sewing", label: "Triple Sewing" },
            { value: "Hidden Sewing", label: "Hidden Sewing" },
          ]}
        />
      </div>

      <div className="col-md-6 mt-2">
        <CInput
          label={webContent?.InputForm?.SecondSet?.fullShoulder || ""}
          type="number"
          name="fullShoulder"
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
          label={webContent?.InputForm?.SecondSet?.bazoLength || ""}
          type="number"
          name="bazoLength"
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
  );
};

export default DressShirt;
