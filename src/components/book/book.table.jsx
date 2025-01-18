import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Space, Table, Tag } from "antd";
import { useState } from "react";
import ViewBookDetail from "./view.book.detail";
import BookUpdateModal from "./book.update";
import { deleteBookAPI } from "../../services/api.service";

const BookTable = (props) => {
    const { dataBook, setDataBook, current, setCurrent, pageSize, setPagesize, total, setTotal, loadBook } = props

    const [dataViewDetail, setDataViewDetail] = useState("")
    const [isOpenViewDetail, setIsOpenViewDetail] = useState(false);

    const [isModalUpdateOpen, setIsModelUpdateOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState("")
    const handleConfirm = async (id) => {
        const resPonse = await deleteBookAPI(id)
        if (resPonse.data) {
            notification.success({
                description: "Xóa sách",
                message: "Xóa thành công"
            })
            await loadBook()
        }
        else {
            notification.error({
                description: "Xóa sách",
                message: "Xóa thất bại"
            })
        }
    }

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
                <div style={{ gap: "20px", display: "flex" }}>
                    <EditOutlined style={{ cursor: "pointer", color: "orange" }}
                        onClick={() => {
                            setIsModelUpdateOpen(true)
                            setDataUpdate(record)
                        }}
                    />

                    <Popconfirm
                        title="Xóa sách"
                        description="Bạn có chắc chắn muốn xóa sách không"
                        onConfirm={() => handleConfirm(record._id)}
                        onCancel
                        okText="Yes"
                        cancelText="No"
                        placement="leftTop"
                    >
                        <DeleteOutlined
                            style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>

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
            <BookUpdateModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModelUpdateOpen={setIsModelUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadBook={loadBook}

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