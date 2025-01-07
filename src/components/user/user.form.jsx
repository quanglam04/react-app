/* eslint-disable no-unused-vars */
import { Button, Input } from "antd"
import { useState } from "react"

const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleClick = () => {
        console.log(fullName, email, passWord, phoneNumber)
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