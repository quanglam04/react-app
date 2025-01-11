/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Input, Modal, notification } from "antd"
import { useState } from "react"
import { creatUserAPI } from "../../services/api.service";


const UserForm = (props) => {
    const { loadUser } = props

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isModalOpen, setIsModelOpen] = useState(false);

    const resetAndCloseModal = () => {
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setPassWord("");
        setIsModelOpen(false);
    }

    const handleSubmitBTN = async () => {
        const response = await creatUserAPI(fullName, email, passWord, phoneNumber)
        if (response.data) {
            notification.success({
                message: " create user",
                description: " Tạo user thành công"
            })

            resetAndCloseModal()
            await loadUser()
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
                onCancel={() => resetAndCloseModal()}
                maskClosable={false}
                okText="CREATE"
            >
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    <div>
                        <span>FullName</span>
                        <Input value={fullName} onChange={(event) => setFullName(event.target.value)}
                        />
                    </div>

                    <div>
                        <span>Email</span>
                        <Input value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>

                    <div>
                        <span>Password</span>
                        <Input.Password value={passWord} onChange={(event) => setPassWord(event.target.value)} />
                    </div>

                    <div>
                        <span>PhoneNumber</span>
                        <Input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                    </div>

                </div>
            </Modal>


        </div>
    )

}
export default UserForm