/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ColorFactory } from 'antd/es/color-picker/color';
import UpdateUserModal from './user.update';
import ViewUserDetail from './view.user.detail';



const UserTable = (props) => {

    const [isModalUpdateOpen, setIsModelUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState("")
    const [dataViewDetail, setDataViewDetail] = useState("")

    const [isOpenViewDetail, setIsOpenViewDetail] = useState(false);


    const { dataUser, loadUser } = props
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#' onClick={() => {
                        setDataViewDetail(record)
                        setIsOpenViewDetail(true)
                    }}>{record._id}</a>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (

                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined onClick={() => {
                        setDataUpdate(record)
                        setIsModelUpdateOpen(true)
                    }} style={{ cursor: "pointer", color: "orange" }} />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </div>

            )
        }

    ];


    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={"_id"}
            />
            <UpdateUserModal
                setDataUpdate={setDataUpdate}
                dataUpdate={dataUpdate}
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModelUpdateOpen={setIsModelUpdateOpen}
                loadUser={loadUser}
            />

            <ViewUserDetail
                dataViewDetail={dataViewDetail}
                setDataViewDetail={setDataViewDetail}
                isOpenViewDetail={isOpenViewDetail}
                setIsOpenViewDetail={setIsOpenViewDetail}
            />
        </>
    )

}
export default UserTable