import React from "react";
import { Image, Row } from "react-bootstrap";
import CInput from "../../assets/Custom/CInput";
import CButton from "../../assets/Custom/CButton";

const PersonalDetails = ({
  values,
  webContent,
  setFieldValue,
  prevStep,
  nextStep,
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
              label={webContent?.InputForm?.FirstSet?.name || ""}
              type="text"
              name="name"
            />
          </div>
          <div className="col-md-6 mt-2">
            <CInput
              label={webContent?.InputForm?.FirstSet?.phoneNumber || ""}
              type="text"
              name="phoneNumber"
            />
          </div>
          <div className="col-md-6 mt-2">
            <CInput
              values={values}
              setFieldValue={setFieldValue}
              maxDate={new Date()}
              label={webContent?.InputForm?.FirstSet?.receivedDate || ""}
              type="date"
              name="receivedDate"
            />
          </div>
          <div className="col-md-6 mt-2">
            <CInput
              values={values}
              setFieldValue={setFieldValue}
              label={webContent?.InputForm?.FirstSet?.returnDate || ""}
              type="date"
              name="returnDate"
            />
          </div>
          <div className="col-md-6 mt-2">
            <CInput
              label={webContent?.InputForm?.FirstSet?.numberOfSuits || ""}
              type="number"
              name="numberOfSuits"
            />
          </div>
          <div className="col-md-6 mt-2">
            <CInput
              label={webContent?.InputForm?.FirstSet?.typeOfCloth || ""}
              type="select"
              name="typeOfCloth"
              options={[
                { value: "", label: "Select" },
                { value: "shalwar kameez", label: "Shalwar Kameez" },
                { value: "Pant Shirt", label: "Pant Shirt" },
                { value: "Dress Shirt", label: "Dress Shirt" },
                { value: "Dress Pent", label: "Dress Pent" },
                { value: "Waist Cort", label: "Waist Cort" },
              ]}
            />
          </div>
          <div className="col-md-12 mt-4">
            <Row className="justify-content-center">
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

export default PersonalDetails;
