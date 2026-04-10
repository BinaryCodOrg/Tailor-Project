import React from 'react'
import { Form, Input, Button, Select, Row, Col, InputNumber } from 'antd'

const { Option } = Select

const jobDesignations = [
    'Cutting Master',
    'Stitching Master',
    'Fitting Specialist',
    'Pattern Maker',
    'Quality Inspector',
    'Tailor',
    'Finishing Expert',
    'Alteration Specialist',
    'Customer Coordinator',
]

const phoneRegex = /^(?:\+92|0)3\d{2}-?\d{7}$/
const nationalIdRegex = /^(?:\d{13}|\d{5}-\d{7}-\d)$/
const nameRegex = /^[A-Za-z ]+$/

const AddTeamMemberForm = ({ onClose }) => {
    const [form] = Form.useForm()

    const handleFinish = (values) => {
        console.log('Employee submitted:', values)
        // TODO: Replace this with your save logic / API call
        if (onClose) onClose()
    }

    return (
        <div className='pt-2'>
            <Form
                form={form}
                layout="vertical"
                name="add_team_member"
                initialValues={{
                    employee: {
                        name: '',
                        number: '',
                        salary: '',
                        nationalID: '',
                        speciality: '',
                        jobDesignation: '',
                    },
                }}
                onFinish={handleFinish}
            >
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            style={{ marginBottom: "5px" }}
                            label="Name"
                            name={['employee', 'name']}
                            rules={[
                                { required: true, message: 'Please enter the employee name' },
                                { pattern: nameRegex, message: 'Name may only contain letters and spaces' },
                                { min: 3, message: 'Name must be at least 3 characters' },
                            ]}
                        >
                            <Input placeholder="Employee name" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                        <Form.Item
                            style={{ marginBottom: "5px" }}
                            label="Phone Number"
                            name={['employee', 'number']}
                            rules={[
                                { required: true, message: 'Please enter a phone number' },
                                { pattern: phoneRegex, message: 'Enter a valid Pakistani phone number' },
                            ]}
                        >
                            <Input placeholder="03XXXXXXXXX" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                        <Form.Item
                            style={{ marginBottom: "5px" }}
                            label="Salary"
                            name={['employee', 'salary']}
                            rules={[{ required: true, message: 'Please enter salary' }]}
                        >
                            <InputNumber
                                style={{ width: '100%' }}
                                min={0}
                                formatter={(value) =>
                                    `Rs ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                }
                                parser={(value) => value.replace(/Rs\s?|\,/g, '')}
                                placeholder="Salary amount"
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                        <Form.Item
                            style={{ marginBottom: "5px" }}
                            label="National ID"
                            name={['employee', 'nationalID']}
                            rules={[
                                { required: true, message: 'Please enter national ID' },
                                { pattern: nationalIdRegex, message: 'Enter a valid Pakistani ID card number' },
                            ]}
                        >
                            <Input placeholder="12345-1234567-1" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                        <Form.Item
                            style={{ marginBottom: "5px" }}
                            label="Speciality"
                            name={['employee', 'speciality']}
                            rules={[{ required: true, message: 'Please enter speciality' }]}
                        >
                            <Input placeholder="Speciality (e.g. embroidery, fitting)" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                        <Form.Item
                            style={{ marginBottom: "5px" }}
                            label="Job Designation"
                            name={['employee', 'jobDesignation']}
                            rules={[{ required: true, message: 'Please select a job designation' }]}
                        >
                            <Select placeholder="Select job designation">
                                {jobDesignations.map((designation) => (
                                    <Option key={designation} value={designation}>
                                        {designation}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item style={{ margin: "10px 0px 0px 0px" }}>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddTeamMemberForm