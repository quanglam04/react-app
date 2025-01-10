import { Button, Col, Divider, Form, Input, notification, Row } from "antd"
import { registerUserAPI } from "../services/api.service"
import { Link, useNavigate } from "react-router-dom"

const RegisterPage = () => {

    const [form] = Form.useForm()
    const navigate = useNavigate()
    const onFinish = async (values) => {
        console.log(values)
        const res = await registerUserAPI(values.fullName, values.email, values.password, values.phone)
        if (res.data) {

            notification.success({
                message: "Register user",
                description: "Đăng ký thành công"
            })
            navigate("/users")
        }
        else {
            notification.error({
                message: "Register use",
                description: JSON.stringify(res.message)
            })
        }
    }
    return (

        <Form
            form={form}
            onFinish={onFinish}
            style={{ margin: "30px" }}
            layout="vertical">
            <div style={
                {
                    margin: "50px",
                    display: "flex",
                    flexDirection: "column"
                }
            }>
                <h3 style={{ textAlign: "center" }}>Đăng ký tài khoản</h3>
                <Row justify={"center"}>
                    <Col xs={24} md={8}>
                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập FullName!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify={"center"}>
                    <Col xs={24} md={8}>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập Email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>


                <Row justify={"center"}>
                    <Col xs={24} md={8}>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập Password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify={"center"}>
                    <Col xs={24} md={8}>
                        <Form.Item
                            label="Phone Number"
                            name="phone"

                            rules={[
                                {
                                    pattern: new RegExp(/\d+/g),
                                    message: "Sai định dạng"
                                },
                                {
                                    required: true,
                                    message: "Vui lòng nhập Phone"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col xs={24} md={8}>
                        <div>
                            <Button onClick={() => form.submit()} type="primary">Register</Button>
                            <Divider></Divider>
                            <div>Đã có tài khoản? <Link to={"/login"}> Đăng nhập tại đây</Link></div>
                        </div>

                    </Col>
                </Row>
            </div>

        </Form>
    )
}
export default RegisterPage