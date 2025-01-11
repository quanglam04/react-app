import { Button, Input, InputNumber, message, Modal, notification, Select } from "antd"
import { useState } from "react"
import { createBookAPI, handleUploadFile } from "../../services/api.service"

const BookForm = (props) => {
    const { loadBook } = props
    const [isModalOpen, setIsModelOpen] = useState(false)

    const [mainText, setMainText] = useState("")
    const [author, setAuthor] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [category, setCategory] = useState("")
    const [preview, setPreview] = useState(null)
    const [thumbnail, setSelectedFile] = useState()
    const handleSubmitBTN = async () => {
        //0. check xem người dùng có ảnh lên không
        //1. Gọi API upload ảnh
        //3. Gọi API load lại danh sách
        //4. Gọi hàm resetAndCloseModal
        if (!preview) {
            notification.error({
                message: "Chưa upload ảnh",
                description: "Mày phải upload ảnh lên mới được tạo sách"
            })
        }
        else {
            const resUpload = await handleUploadFile(thumbnail, "book");
            if (resUpload.data) {
                const avatar = resUpload.data.fileUploaded
                console.log({ thumbnail })
                console.log({ resUpload })
                // const resCreate = await createBookAPI(thumbnail.name, mainText, author, price, quantity, category)
                const resCreate = await createBookAPI(avatar, mainText, author, price, quantity, category)
                if (resCreate) {
                    notification.success({
                        message: "Thêm mới sách",
                        description: "Thêm mới thành công"
                    })
                    await loadBook()
                    resetAndCloseModal()
                }
                else {
                    notification.error({
                        message: "Thêm mới sách",
                        description: JSON.stringify(resCreate.data.message)
                    })
                }

            }


        }




    }
    const resetAndCloseModal = () => {
        setMainText("")
        setAuthor("")
        setPrice("")
        setQuantity("")
        setCategory("")
        setPreview("")
        setIsModelOpen(false)
    }

    const handleChange = (event) => {
        setCategory(event)
    }

    const handleUploadImage = (event) => {

        // event.target.file[0]
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return
        }
        const file = event.target.files[0]
        if (file) {
            console.log(">>>>>>", { event })
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }

    }

    return (
        <div className="book-form" style={{ margin: "10px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Book</h3>
                <Button type="primary"
                    onClick={() => setIsModelOpen(true)}
                > Create Book</Button>

            </div>


            <Modal title="Craete Book"
                open={isModalOpen}
                onOk={() => handleSubmitBTN()}
                onCancel={() => resetAndCloseModal()}
                maskClosable={false}
                okText="CREATE"
            >
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
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


        </div>
    )
}
export default BookForm