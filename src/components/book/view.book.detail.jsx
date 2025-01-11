import { Button, Drawer } from "antd"

const ViewBookDetail = (props) => {
    const { isOpenViewDetail, setIsOpenViewDetail, dataViewDetail, setDataViewDetail } = props

    const showDrawer = () => {

    }
    const onClose = () => {

    }
    console.log(dataViewDetail)
    return (
        <>

            <Drawer width={"40vw"} title="Chi tiết Book"
                onClose={() => {
                    setIsOpenViewDetail(false)
                    setDataViewDetail(null)
                }}
                open={isOpenViewDetail}>
                {

                    dataViewDetail ?
                        <>
                            <h3>ID: <span style={{ color: "red" }}>{dataViewDetail._id}</span></h3>
                            <br></br>
                            <h3>Tiêu đề: <span style={{ fontWeight: 'normal' }}>{dataViewDetail.mainText}</span></h3>
                            <br></br>
                            <h3>Tác giả: <span style={{ fontWeight: 'normal' }}>{dataViewDetail.author}</span></h3>
                            <br></br>
                            <h3>Thể loại: <span style={{ fontWeight: 'normal' }}>{dataViewDetail.category}</span></h3>
                            <br></br>
                            <h3>Giá tiền: <span style={{ fontWeight: 'normal' }}>{dataViewDetail.price}</span></h3>
                            <br></br>
                            <h3>Số lượng: <span style={{ fontWeight: 'normal' }}>{dataViewDetail.quantity}</span></h3>
                            <br></br>
                            <h3>Đã bán: <span style={{ fontWeight: 'normal' }}>{dataViewDetail.sold}</span></h3>
                            <br></br>
                            <h3>Ảnh sách</h3>
                            <div style={{
                                marginTop: "10px",
                                height: "150px",
                                width: "200px",
                                border: "1px solid #ccc"
                            }}>
                                <img
                                    style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                    src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataViewDetail.thumbnail}`} />
                            </div>
                        </>
                        :
                        <>

                        </>
                }
            </Drawer>
        </>
    )
}
export default ViewBookDetail