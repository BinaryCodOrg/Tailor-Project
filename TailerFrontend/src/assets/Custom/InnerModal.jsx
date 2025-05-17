import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { scroller, Element } from 'react-scroll';

const InnerModal = (props) => {

    const formRef = useRef(null);  // Create a ref to store the form instance

    const handleOk = () => {
        if (formRef.current) {
            formRef.current.handleSubmit();  // Trigger Formik's handleSubmit
        }
    };

    let flagState = props.flagState;
    let setFieldValue = props.setFieldValue;
    let setFlagState = props.setFlagState;
    let modalObject = props.modalObject;
    let setQuestionChange = props.setQuestionChange;


    const xlTitles = [
        // "Bank Accounts Detail"
    ]; // Add other titles that should use "xl" here

    const xlKeys = [
        "totalCostBase"
    ]; // Add other titles that should use "xl" here


    let fullTitles = [
        "New Pension Rollover"
    ]

    let mdTitles = ["Other Percentage Amount"]


    let [size, setSize] = useState("md");

    useEffect(() => {
        if (props.modalObject && props.modalObject.title) {
            let currentTitle = props.modalObject.title;

            if (currentTitle.includes('_')) {
                currentTitle = (currentTitle.split('_').slice(1))[0];
            }

            let modalSize = "lg"; // Default size

            if (fullTitles.includes(currentTitle)) {
                modalSize = "xxl";
            } else if (xlTitles.includes(currentTitle)) {
                modalSize = "xl";
            } else if (xlKeys.includes(props.modalObject.key)) {
                modalSize = "xl";
            } else if (mdTitles.includes(currentTitle)) {
                modalSize = "md";
            }

            setSize(modalSize);
        }
    }, [props.modalObject]);


    return (
        <div>
            <Modal dialogClassName={size === "xxl" && "modal-90w"} size={size === "xxl" ? "" : size} backdrop="static" keyboard={false} centered show={props.flagState} onHide={() => { props.setFlagState(false) }}>
                <Element id="modal-container">
                </Element>
                <Modal.Header closeButton>
                    <Modal.Title>{props.modalObject.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {props.children ? (
                        React.cloneElement(props.children, { formRef, flagState, setFlagState, modalObject, setQuestionChange, setFieldValue })
                    ) : "no Child exist"}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" style={{ maxWidth: "12.5%", minWidth: "fit-content" }} onClick={() => props.setFlagState(false)}>
                        Close
                    </Button>
                    <button type='button' className='btn bgColor modalBtn' style={{ maxWidth: "12.5%", minWidth: "fit-content" }} onClick={handleOk}>
                        Submit
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default InnerModal

// {props.Question ? Question : "Submit"}