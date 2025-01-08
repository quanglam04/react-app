/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';



const UserTable = (props) => {

    const { dataUser } = props
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id'
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        }

    ];


    return (
        <Table
            columns={columns}
            dataSource={dataUser}
            rowKey={"_id"}
        />
    )

}
export default UserTable