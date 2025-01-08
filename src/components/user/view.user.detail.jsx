/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Drawer } from "antd"
import { useState } from "react";

const ViewUserDetail = (props) => {
    const { setIsOpenViewDetail, isOpenViewDetail, dataViewDetail, setDataViewDetail } = props


    console.log(dataViewDetail)
    return (
        <>

            <Drawer title="View Detail" onClose={() => {
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
                            <h3>Phone: {dataViewDetail.phone}</h3></>
                        : <>
                            <p>Không có dữ liệu</p>
                        </>
                }
            </Drawer>
        </>
    )
}
export default ViewUserDetail