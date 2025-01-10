import { Button, Form, Input } from "antd"

const RegisterPage = () => {

    const [form] = Form.useForm()
    const onFinish = (values) => {
        console.log(values)
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
                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input your username!',
                //     },
                // ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input your username!',
                //     },
                // ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="PassWord"
                    name="password"
                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input your username!',
                //     },
                // ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phone"

                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input your username!',
                //     },
                // ]}
                >
                    <Input />
                </Form.Item>
            </div>
            <div>
                <Button onClick={() => form.submit()} type="primary">Register</Button>
            </div>
            {/* <button style={{ marginLeft: "20px" }} type="submit">Register</button> */}
        </Form>
    )
}
export default RegisterPage