/* eslint-disable no-unused-vars */
import { Button, Input, notification } from "antd"
import { useState } from "react"
import { creatUserAPI } from "../../services/api.service";


const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleClick = async () => {
        const response = await creatUserAPI(fullName, email, passWord, phoneNumber)
        console.log("check response", response)
        if (response.data) {
            notification.success({
                message: " create user",
                description: " Tạo user thành công"
            })
        }
        else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(response.message)
            })
        }
        console.log(">>>>>>>>>>>>: ", response.data)
    }
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>FullName</span>
                    <Input onChange={(event) => setFullName(event.target.value)}
                    />
                </div>

                <div>
                    <span>Email</span>
                    <Input onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div>
                    <span>Password</span>
                    <Input.Password onChange={(event) => setPassWord(event.target.value)} />
                </div>

                <div>
                    <span>PhoneNumber</span>
                    <Input onChange={(event) => setPhoneNumber(event.target.value)} />
                </div>

                <div>
                    <Button type="primary"
                        onClick={() => handleClick()}
                    > Create User</Button>
                </div>
            </div>
        </div>
    )

}
export default UserForm