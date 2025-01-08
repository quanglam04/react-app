/* eslint-disable no-unused-vars */
import { Button, Input, Modal, notification } from "antd"
import { useState } from "react"
import { creatUserAPI } from "../../services/api.service";


const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isModalOpen, setIsModelOpen] = useState(false)


    const handleSubmitBTN = async () => {
        const response = await creatUserAPI(fullName, email, passWord, phoneNumber)
        console.log("check response", response)
        if (response.data) {
            notification.success({
                message: " create user",
                description: " Tạo user thành công"
            })

            setIsModelOpen(false)
        }
        else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(response.message)
            })
        }
    }

    return (
        <div className="user-form" style={{ margin: "10px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table User</h3>
                <Button type="primary"
                    onClick={() => setIsModelOpen(true)}
                > Create User</Button>

            </div>


            <Modal title="Craete User"
                open={isModalOpen}
                onOk={() => handleSubmitBTN()}
                onCancel={() => setIsModelOpen(false)}
                maskClosable={false}
                okText="CREATE"
            >
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    <div>
                        <span>FullName</span>
                        <Input onChange={(event) => setFullName(event.target.value)}
                        />
                    </div>

                    <div>
                        <span>Email</span>
                        <Input onChange={(event) => setEmail(event.target.value)} />
                    </div>

                    <div>
                        <span>Password</span>
                        <Input.Password onChange={(event) => setPassWord(event.target.value)} />
                    </div>

                    <div>
                        <span>PhoneNumber</span>
                        <Input onChange={(event) => setPhoneNumber(event.target.value)} />
                    </div>

                </div>
            </Modal>


        </div>
    )

}
export default UserForm