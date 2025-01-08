import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {

    const [dataUser, setDataUser] = useState([])
    //mảng rỗng => chạy 1 lần
    useEffect(() => {
        console.log(">>> run useEffect 111")
        loadUser()
    }, []);


    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUser(res.data)
    }

    return (

        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                loadUser={loadUser}
                dataUser={dataUser} />
        </div>

    )
}
export default UserPage