import { Input, InputNumber, Modal, notification, Select } from "antd"
import { useEffect, useState } from "react"
import { handleUploadFile, updateBookAPI } from "../../services/api.service"

const BookUpdateModal = (props) => {
    const { isModalUpdateOpen, setIsModelUpdateOpen, dataUpdate, setDataUpdate, loadBook } = props
    const [isChange, setIsChange] = useState(false)
    const [id, setId] = useState("")
    const [mainText, setMainText] = useState("")
    const [author, setAuthor] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [category, setCategory] = useState("")
    const [preview, setPreview] = useState(null)
    const [thumbnail, setSelectedFile] = useState()
    const handleUpdate = async () => {
        // check biến isChange xem người dùng có thêm file mới không
        // nếu biến này nhận giá trị true ==> có thay đổi, khi đó file mới sẽ lấy từ preview
        // còn nếu biến này bằng false tức là nó không thay đổi, khi đó file sẽ lấy từ dataUpdate
        if (isChange === true) {
            // có cập nhật ảnh mới
            // 1. Gọi API upload File
            // 2. Gọi API cập nhật danh sách
            // 3. Gọi API load danh sách
            const resUpload = await handleUploadFile(thumbnail, "book");
            if (resUpload.data) {
                const avatar = resUpload.data.fileUploaded
                const resUpdate = await updateBookAPI(id, avatar, mainText, author, price, quantity, category)
                if (resUpdate) {
                    notification.success({
                        description: "Cập nhật sách",
                        message: "Cập nhật sách thành công"
                    })
                    await loadBook()
                    resetAndCloseModal()
                }
                else {
                    notification.error({
                        description: "Cập nhật sách",
                        message: JSON.stringify(resUpdate.data.message)
                    })
                }
            }
        }
        else {
            //1. Gọi API cập nhật sách
            //2. Gọi API load lại danh sách
            const resUpdate = await updateBookAPI(id, dataUpdate.thumbnail, mainText, author, price, quantity, category)
            if (resUpdate) {
                notification.success({
                    description: "Cập nhật sách",
                    message: "Cập nhật sách thành công"
                })
                await loadBook()
                resetAndCloseModal()
            }
            else {
                notification.error({
                    description: "Cập nhật sách",
                    message: JSON.stringify(resUpdate.data.message)
                })
            }
        }

    }

    useEffect(() => {
        if (dataUpdate) {
            setMainText(dataUpdate.mainText)
            setAuthor(dataUpdate.author)
            setPrice(dataUpdate.price)
            setQuantity(dataUpdate.quantity)
            setCategory(dataUpdate.category)
            setId(dataUpdate._id)
            setPreview(`http://localhost:8080/images/book/${dataUpdate.thumbnail}`)

        }

    }, [dataUpdate])

    const handleUploadImage = (event) => {
        // event.target.file[0]
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return
        }
        const file = event.target.files[0]
        if (file) {
            console.log("BookUpdateModal", { event })
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
            setIsChange(true)
        }
    }


    const resetAndCloseModal = () => {
        setIsModelUpdateOpen(false)
    }
    const handleChange = (event) => {
        setCategory(event)
    }
    return (
        <Modal title="Update Book"
            open={isModalUpdateOpen}
            onOk={() => handleUpdate()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText="UPDATE"
        >
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>ID</span>
                    <Input value={id} disabled
                    />
                </div>
                <div>
                    <span>Tiêu đề</span>
                    <Input value={mainText} onChange={(event) => setMainText(event.target.value)}
                    />
                </div>

                <div>
                    <span>Tác giả</span>
                    <Input value={author} onChange={(event) => setAuthor(event.target.value)}
                    />
                </div>

                <div>
                    <span style={{ display: "block" }}>Giá tiền</span>
                    <InputNumber style={{ width: "100%" }} addonAfter="đ" value={price} onChange={(event) => setPrice(event)}
                    />
                </div>

                <div>
                    <span style={{ display: "block" }}>Số lượng</span>
                    <InputNumber style={{ width: "100%" }} value={quantity} onChange={(event) => setQuantity(event)}
                    />
                </div>

                <div>
                    <span style={{ display: "block" }}> Thể loại</span>
                    <Select
                        defaultValue="Arts"
                        value={category}
                        style={{
                            width: "100%",
                        }}
                        onChange={handleChange}
                        options={[
                            { value: 'Arts', label: 'Arts' },
                            { value: 'Business', label: 'Business' },
                            { value: 'Comics', label: 'Comics' },

                            { value: 'Cooking', label: 'Cooking' },
                            { value: 'Entertainment', label: 'Entertainment' },
                            { value: 'History', label: 'History' },

                            { value: 'Music', label: 'Music' },
                            { value: 'Sports', label: 'Sports' },
                            { value: 'Teen', label: 'Teen' },
                            { value: 'Travel', label: 'Travel' },

                        ]}

                    />
                </div>

                <span>Ảnh</span>
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
                    </>
                }


                <div>
                    <label htmlFor="btnUpload"

                        style={{
                            display: "block", width: "fit-content", marginTop: "15px", padding: "5px 10px"
                            , background: "orange", borderRadius: "5px", cursor: "pointer"

                        }}>Upload File</label>
                    <input
                        onClick={(event) => { event.target.value = null }}
                        onChange={(event) => handleUploadImage(event)}
                        type="file" hidden id="btnUpload"></input>
                </div>
            </div>
        </Modal>

    )
}
export default BookUpdateModal