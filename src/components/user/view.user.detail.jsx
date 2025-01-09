/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ConsoleSqlOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd"
import { useState } from "react";

const ViewUserDetail = (props) => {
    const { setIsOpenViewDetail, isOpenViewDetail, dataViewDetail, setDataViewDetail } = props
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleUploadFile = (event) => {
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
                                    onChange={(event) => handleUploadFile(event)}
                                    type="file" hidden id="btnUpload"></input>
                            </div>

                            {preview &&
                                <div style={{
                                    marginTop: "10px",
                                    height: "150px",
                                    width: "200px",
                                    border: "1px solid #ccc"
                                }}>
                                    <img
                                        style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                        src={preview} />
                                </div>
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