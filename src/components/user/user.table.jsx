
import { message, notification, Popconfirm, Space, Table, Tag } from 'antd';
import { deleteUserAPI, fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined, TikTokFilled } from '@ant-design/icons';
import { ColorFactory } from 'antd/es/color-picker/color';
import UpdateUserModal from './user.update';
import ViewUserDetail from './view.user.detail';




const UserTable = (props) => {
    const { dataUser, loadUser, current, pageSize, total, setCurrent, setPagesize, setTotal } = props

    const [isModalUpdateOpen, setIsModelUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState("")

    const [dataViewDetail, setDataViewDetail] = useState("")
    const [isOpenViewDetail, setIsOpenViewDetail] = useState(false);


    const handleConfirm = async (id) => {
        const response = await deleteUserAPI(id);
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
    const onChange = (pagination, filters, sorter, extra) => {
        // nếu thay đổi trang
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current)
            }
        }

        // nếu thay đổi tổng số phần tử
        if (pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPagesize(+pagination.pageSize)
            }
        }
    }
    const cancel = (e) => {
        message.error('Click on No');
    };


    const columns = [
        {
            title: "STT",
            render: (_, record, index) => {
                return (
                    <>
                        {index + pageSize * (current - 1) + 1}
                    </>
                )
            }
        },
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
                pagination={
                    {
                        current: current,
                        //pageSize = lấy ra bao nhiêu phần tử 1 lần
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }}
                onChange={onChange}

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
                loadUser={loadUser}
            />
        </>
    )

}
export default UserTable