/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { message, notification, Popconfirm, Space, Table, Tag } from 'antd';
import { deleteUserAPI, fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ColorFactory } from 'antd/es/color-picker/color';
import UpdateUserModal from './user.update';
import ViewUserDetail from './view.user.detail';




const UserTable = (props) => {
    const { dataUser, loadUser } = props

    const [isModalUpdateOpen, setIsModelUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState("")

    const [dataViewDetail, setDataViewDetail] = useState("")
    const [isOpenViewDetail, setIsOpenViewDetail] = useState(false);


    const handleConfirm = async (id) => {
        const response = await deleteUserAPI(id);
        console.log(response, ">>>>>>>>>>>>>>")
        if (response.statusCode !== 400) {
            notification.success({
                message: " Xóa user",
                description: " Xóa user thành công"
            })

            await loadUser()
        }

        else {
            notification.error({
                message: "Xóa user",
                description: JSON.stringify(response.message)
            })
        }
    };
    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };


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

                    <Popconfirm
                        title="Xóa người dùng"
                        description="Bạn có chắc chắn xóa người dùng không?"
                        onConfirm={() => handleConfirm(record._id)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                        placement="leftTop"
                    >
                        <DeleteOutlined
                            style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>

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