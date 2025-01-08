/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Input, Modal, notification } from "antd"
import { creatUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
    const { setDataUpdate, dataUpdate, isModalUpdateOpen, setIsModelUpdateOpen } = props
    const [fullName, setFullName] = useState("");
    const [id, setID] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    // const [isModalUpdateOpen, setIsModelUpdateOpen] = useState(true);

    const resetAndCloseModal = () => {
        console.log("123")
        setFullName("");
        setPhoneNumber("");
        setIsModelUpdateOpen(false);
        setID("")
        setDataUpdate(null)
    }

    useEffect(() => {
        if (dataUpdate) {
            setID(dataUpdate._id)
            setFullName(dataUpdate.fullName)
            setPhoneNumber(dataUpdate.phone)
        }
    }, [dataUpdate])


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
            open={isModalUpdateOpen}
            onOk={() => handleSubmitBTN()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText="SAVE"
        >
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>ID</span>
                    <Input value={id} disabled />
                </div>
                <div>
                    <span>FullName</span>
                    <Input value={fullName} onChange={(event) => setFullName(event.target.value)}
                    />
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