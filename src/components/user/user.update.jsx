import { useState } from "react";
import { Input, Modal, notification } from "antd"
import { creatUserAPI } from "../../services/api.service";

const UpdateUserModal = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isModalOpen, setIsModelOpen] = useState(true);

    const resetAndCloseModal = () => {
        console.log("123")
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setPassWord("");
        setIsModelOpen(false);
    }


    const handleSubmitBTN = async () => {
        const response = await creatUserAPI(fullName, email, passWord, phoneNumber)
        console.log("check response", response)
        if (response.data) {
            notification.success({
                message: " create user",
                description: " Tạo user thành công"
            })

            resetAndCloseModal()
            // await loadUser()
        }
        else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(response.message)
            })
        }
    }

    return (

        <Modal title="Update User"
            open={isModalOpen}
            onOk={() => handleSubmitBTN()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText="SAVE"
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

    )
}
export default UpdateUserModal