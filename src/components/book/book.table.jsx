import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table, Tag } from "antd";
import { useState } from "react";
import ViewBookDetail from "./view.book.detail";

const BookTable = (props) => {
    const { dataBook, setDataBook, current, setCurrent, pageSize, setPagesize, total, setTotal } = props

    const [dataViewDetail, setDataViewDetail] = useState("")
    const [isOpenViewDetail, setIsOpenViewDetail] = useState(false);

    const columns = [
        {
            title: 'STT',
            render: (_, record, index) => {
                return (
                    <>
                        {index + pageSize * (current - 1) + 1}

                    </>

                )
            }
        },
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#' onClick={() => {
                        console.log(">>>RECORD", { record })
                        setDataViewDetail(record)
                        setIsOpenViewDetail(true)
                    }}>{record._id}</a>
                )
            }
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'mainText',

        },
        {
            title: 'Giá tiền',
            dataIndex: 'price',

        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',

        },
        {
            title: 'Tác giả',
            dataIndex: 'author',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ gap: "20px" }}>
                    <DeleteOutlined
                        style={{ cursor: "pointer", color: "red" }} />
                    <EditOutlined style={{ cursor: "pointer", color: "orange" }} />
                </div>
            ),
        }
    ];
    const onChange = (pagination) => {
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


    return (
        <>

            <Table
                rowKey={"_id"}
                columns={columns}
                dataSource={dataBook}
                pagination={
                    {
                        pageSizeOptions: ['5', '10', '15', '20'],
                        current: current,
                        //pageSize = lấy ra bao nhiêu phần tử 1 lần
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }}
                onChange={onChange}
            />

            <ViewBookDetail
                isOpenViewDetail={isOpenViewDetail}
                setIsOpenViewDetail={setIsOpenViewDetail}
                dataViewDetail={dataViewDetail}
                setDataViewDetail={setDataViewDetail}
            />

        </>
    )
}
export default BookTable