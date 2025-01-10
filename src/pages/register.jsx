import { Button, Form, Input, notification } from "antd"
import { registerUserAPI } from "../services/api.service"
import { useNavigate } from "react-router-dom"

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
            layout="vertical">
            <div style={
                {
                    margin: "50px",
                    display: "flex",
                    flexDirection: "column"
                }
            }>
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
                <div>
                    <Button onClick={() => form.submit()} type="primary">Register</Button>
                </div>
            </div>
            {/* <button style={{ marginLeft: "20px" }} type="submit">Register</button> */}
        </Form>
    )
}
export default RegisterPage