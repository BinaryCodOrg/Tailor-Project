import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CInput from '../../assets/Custom/CInput';
import { Row } from 'react-bootstrap';
import { toCommaAndDollar } from '../../assets/Api/Api';

const DeliveryDetail = (props) => {
    const initialValues = {
        houseNumber: "",
        qty: "",
        rate: "",
        dueAmt: "",
        prevBal: "PKR 0",
        remarks: ""
    };

    const validationSchema = Yup.object({
        houseNumber: Yup.string().required('Required'),
        qty: Yup.string().required('Required'),
        rate: Yup.string().required('Required'),
        dueAmt: Yup.string().required('Required'),
        prevBal: Yup.string().required('Required'),
    });

    const onSubmit = values => {
        console.log('Form data', values);

        // Reset the flag state if necessary
        if (props.flagState) {
            props.setFlagState(false);
        }
    };


    let CalculateDueAmount = (values, setFieldInput, CurrentInput) => {
        console.log(values, setFieldInput, CurrentInput, "dueAmt");

        let qty = parseFloat(values.qty.replace(/[^0-9.-]+/g, "")) || 0;
        let rate = parseFloat(values.rate.replace(/[^0-9.-]+/g, "")) || 0;

        switch (CurrentInput.name) {
            case "qty":
                setFieldInput("dueAmt", toCommaAndDollar(CurrentInput.value * rate || 0));
                break;
            case "rate":
                setFieldInput("rate", toCommaAndDollar(CurrentInput.value.replace(/[^0-9.-]+/g, "") || 0));
                setFieldInput("dueAmt", toCommaAndDollar(qty * parseFloat(CurrentInput.value.replace(/[^0-9.-]+/g, "")) || 0));
                break;
            default:
                console.log("object")
                break;
        }
    }

    let FindPreviousData = (values, setFieldValue, CurrentInput) => {
        console.log(values, setFieldValue, CurrentInput);

        let houseNumber_select1 = values.houseNumber_select1;
        let houseNumber_select2 = values.houseNumber_select2;
        let houseNumber_select3 = values.houseNumber_select3;
        let houseNumber_text = values.houseNumber_text;

        //now Creating Logic to Form a Proper HouseNumber Formate and then Storing in houseNumber Field

        switch (CurrentInput.name) {
            case "houseNumber_select1":
                houseNumber_select1 = CurrentInput.value;
                break;
            case "houseNumber_select2":
                houseNumber_select2 = CurrentInput.value;
                break;
            case "houseNumber_select3":
                houseNumber_select3 = CurrentInput.value;
                break;
            case "houseNumber_text":
                houseNumber_text = CurrentInput.value;
                break;
            default:
                console.log("object")
                break;
        }


        let homeNumber = houseNumber_text + "-" + houseNumber_select1 + "/" + houseNumber_select2 + "/" + houseNumber_select3;
        
        

    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
            innerRef={props.formRef}
        >
            {({ values, handleChange, setFieldValue, handleBlur }) => {
                return (
                    <Form className='container-fluid'>
                        <Row>
                            <div className='col-md-12 mt-2'>
                                {/*
                            <CInput label="House Number" type="customInputTSSS" name="houseNumber" />
                            */}
                                <CInput
                                    label="House Number"
                                    type="customInputTSSS"
                                    name="houseNumber"
                                    options1={[
                                        { value: 'A', label: 'A' },
                                        { value: 'AA', label: 'AA' },
                                        { value: 'B', label: 'B' },
                                        { value: 'C', label: 'C' },
                                        { value: 'D', label: 'D' },
                                        { value: 'E', label: 'E' },
                                        { value: 'EE', label: 'EE' },
                                        { value: 'F', label: 'F' },
                                        { value: 'F1', label: 'F1' },
                                    ]}
                                    options2={[
                                        { value: 'G floor', label: 'G floor' },
                                        { value: '1 floor', label: '1 floor' },
                                        { value: '2 floor', label: '2 floor' },
                                        { value: '3 floor', label: '3 floor' },
                                    ]}
                                    options3={[
                                        { value: 'Pak Arab', label: 'Pak Arab' },
                                        { value: 'Shadab', label: 'Shadab' },
                                        { value: 'Vital ', label: 'Vital ' },
                                        { value: 'Peral', label: 'Peral' },
                                        { value: 'Chandraya', label: 'Chandraya' },
                                    ]}
                                    onChangeCallback={FindPreviousData}
                                />
                            </div>
                            <div className='col-md-3 mt-2'>
                                <CInput label="Previous Balance" type="text" name="prevBal"
                                    onChangeCallback={(values, setFieldInput, CurrentInput) => {
                                        setFieldInput(CurrentInput.name, toCommaAndDollar(Current.value.string().required('Required')))
                                    }}
                                    disabled
                                />
                            </div>
                            <div className='col-md-3 mt-2'>
                                <CInput label="Quantity" type="number" name="qty"
                                    onChangeCallback={CalculateDueAmount}
                                />
                            </div>
                            <div className='col-md-3 mt-2'>
                                <CInput label="Rate" type="text" name="rate"
                                    onChangeCallback={CalculateDueAmount}
                                />
                            </div>
                            <div className='col-md-3 mt-2'>
                                <CInput label="Due Amount" type="text" name="dueAmt" disabled />
                            </div>
                            <div className='col-md-12 mt-2'>
                                <CInput label="Remarks" type="textarea" name="remarks" />
                            </div>

                        </Row>
                        <Row className="justify-content-between">
                            <div className='col-md-5 mt-2'>
                                <h4>Total Amount:</h4>
                            </div>
                            <div className='col-md-3 mt-2'>
                                <h4>{toCommaAndDollar(parseFloat(values.dueAmt.replace(/[^0-9.-]+/g, "") || 0) + parseFloat(values.prevBal.replace(/[^0-9.-]+/g, "") || 0))}</h4>
                            </div>
                        </Row>
                    </Form>
                )
            }}
        </Formik>
    );
};

export default DeliveryDetail;
