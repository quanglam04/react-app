import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {

    const [dataUser, setDataUser] = useState([])
    const [current, setCurrent] = useState(1)
    const [pageSize, setPagesize] = useState(5)
    const [total, setTotal] = useState(1)
    //mảng rỗng => chạy 1 lần
    useEffect(() => {
        console.log(">>> run useEffect 111")
        loadUser()
    }, []);


    const loadUser = async () => {
        const res = await fetchAllUserAPI(current, pageSize)
        console.log(res)
        if (res.data) {
            setDataUser(res.data.result)
            setCurrent(res.data.meta.current)
            setPagesize(res.data.meta.pageSize)
            setTotal(res.data.meta.total)
        }

    }

    return (

        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                loadUser={loadUser}
                dataUser={dataUser}
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
export default UserPage