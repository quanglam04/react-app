import { useEffect, useState } from "react"
import BookTable from "../components/book/book.table"
import { fetchAllBookAPI } from "../services/api.service"
import BookForm from "../components/book/book.form"

const BookPage = () => {
    const [dataBook, setDataBook] = useState("")
    const [current, setCurrent] = useState(1)
    const [pageSize, setPagesize] = useState(5)
    const [total, setTotal] = useState(10)
    const loadBook = async () => {
        const res = await fetchAllBookAPI(current, pageSize)
        if (res.data) {
            console.log(res.data)
            setDataBook(res.data.result)
            setCurrent(res.data.meta.current)
            setPagesize(res.data.meta.pageSize)
            setTotal(res.data.meta.total)

        }

    }

    useEffect(() => {
        loadBook()
    }, [current, pageSize]);
    return (

        <div style={{ padding: "20px" }}>
            <BookForm loadBook={loadBook} />
            <BookTable
                dataBook={dataBook}
                setDataBook={setDataBook}
                loadBook={loadBook}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPagesize={setPagesize}
                setTotal={setTotal}
            />

        </div>

    )
}
export default BookPage