/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Input, Modal, notification } from "antd"
import { creatUserAPI, updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
    const { setDataUpdate, dataUpdate, isModalUpdateOpen, setIsModelUpdateOpen, loadUser } = props
    const [fullName, setFullName] = useState("");
    const [id, setID] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    // const [isModalUpdateOpen, setIsModelUpdateOpen] = useState(true);

    const resetAndCloseModal = () => {
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
        const response = await updateUserAPI(id, fullName, phoneNumber)
        if (response.data) {
            notification.success({
                message: " Update user",
                description: " Cập nhật user thành công"
            })

            resetAndCloseModal()
            await loadUser()
        }
        else {
            notification.error({
                message: "Error update user",
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