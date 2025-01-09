/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Drawer } from "antd"
import { useState } from "react";

const ViewUserDetail = (props) => {
    const { setIsOpenViewDetail, isOpenViewDetail, dataViewDetail, setDataViewDetail } = props


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
                            <div>
                                <img
                                    height={100} width={150}
                                    src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataViewDetail.avatar}`} />
                            </div>
                            <div>
                                <label htmlFor="btnUpload"

                                    style={{
                                        display: "block", width: "fit-content", marginTop: "15px", padding: "5px 10px"
                                        , background: "orange", borderRadius: "5px", cursor: "pointer"

                                    }}>Upload File</label>
                                <input type="file" hidden id="btnUpload"></input>
                            </div>

                            {/* <Button type="primary" >Upload File</Button> */}


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