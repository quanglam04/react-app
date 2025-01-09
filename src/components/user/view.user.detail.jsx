/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ConsoleSqlOutlined, WarningTwoTone } from "@ant-design/icons";
import { Button, Drawer, notification } from "antd"
import { useState } from "react";
import { handleUploadFile, updateUserAvatarAPI } from "../../services/api.service";

const ViewUserDetail = (props) => {
    const { loadUser, setIsOpenViewDetail, isOpenViewDetail, dataViewDetail, setDataViewDetail } = props
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleOnChange = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return
        }
        console.log(event)
        const file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }
    const handleUpdateUserAvatar = async () => {
        //step 1: upload file
        const resUpload = await handleUploadFile(selectedFile, "avatar")
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded
            console.log("check newAvatar", newAvatar)
            console.log("dataViewDetail", dataViewDetail)
            const resUpdateAvatar = await updateUserAvatarAPI(newAvatar, dataViewDetail._id, dataViewDetail.fullName, dataViewDetail.phone)
            if (resUpdateAvatar.data) {
                setIsOpenViewDetail(false)
                setSelectedFile(false)
                setPreview(false)
                await loadUser()


                notification.success(
                    {
                        message: "Update user avatar",
                        description: "Cập nhật avatar thành công"
                    }
                )
            }
            else {
                notification.error(
                    {
                        message: "Error upload file",
                        description: JSON.stringify(resUpdateAvatar.message)
                    }
                )
            }
        }
        else {
            notification.error(
                {
                    message: "Error upload file",
                    description: JSON.stringify(resUpload.message)
                }
            )
            return;
        }
        //step 2: update user
    }
    console.log(dataViewDetail)
    return (
        <>

            <Drawer
                width={"40vw"}
                title="View Detail" onClose={() => {
                    setDataViewDetail(null)
                    setIsOpenViewDetail(false)
                }} open={isOpenViewDetail}>
                {
                    dataViewDetail ?
                        <>
                            <h3>ID: <span style={{ color: "red" }}>{dataViewDetail._id}</span></h3>
                            <br></br>
                            <h3>FullName: {dataViewDetail.fullName}</h3>
                            <br></br>
                            <h3>Email: {dataViewDetail.email}</h3>
                            <br></br>
                            <h3>Phone: {dataViewDetail.phone}</h3>
                            <br></br>
                            <h3>Avatar:</h3>
                            <br></br>
                            <div style={{
                                marginTop: "10px",
                                height: "150px",
                                width: "200px",
                                border: "1px solid #ccc"
                            }}>
                                <img
                                    style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                    src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataViewDetail.avatar}`} />
                            </div>
                            <div>
                                <label htmlFor="btnUpload"

                                    style={{
                                        display: "block", width: "fit-content", marginTop: "15px", padding: "5px 10px"
                                        , background: "orange", borderRadius: "5px", cursor: "pointer"

                                    }}>Upload File</label>
                                <input
                                    onChange={(event) => handleOnChange(event)}
                                    type="file" hidden id="btnUpload"></input>
                            </div>

                            {preview &&
                                <>
                                    <div style={{
                                        marginTop: "10px",
                                        height: "150px",
                                        width: "200px",
                                        border: "1px solid #ccc",
                                        marginBottom: "15px"
                                    }}>
                                        <img
                                            style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                            src={preview} />
                                    </div>
                                    <Button
                                        onClick={() => handleUpdateUserAvatar()}
                                        type="primary">Save</Button>
                                </>
                            }
                        </>
                        : <>
                            <p>Không có dữ liệu</p>
                        </>
                }
            </Drawer>
        </>
    )
}
export default ViewUserDetail