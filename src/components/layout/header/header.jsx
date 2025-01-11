/* eslint-disable no-unused-vars */
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, message } from 'antd'
import { AliwangwangOutlined, AppstoreOutlined, LoginOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Children, useContext, useState } from 'react';
import { AuthContext } from '../../context/auth.context';
import { logoutAPI } from '../../../services/api.service';
// import './header.css'

const Header = () => {
    const [current, setCurrent] = useState('mail');
    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const onClick = (e) => {
        setCurrent(e.key);
    };
    const handleLogout = async () => {
        const res = await logoutAPI()
        if (res.data) {
            localStorage.removeItem("access_token")
            setUser({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: ""
            })
            message.success("Logout thành công")
            navigate("/")

        }
    }

    const items = [
        {
            label: <Link to={"/"} >Home</Link>,
            key: 'home',
            icon: <MailOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <AppstoreOutlined />,

        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'book',
            icon: <SettingOutlined />,
        },
        ...(!user.id ? [{
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />
        }] : []),
        ...(user.id ? [{
            label: `Welcom ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: <span onClick={() => handleLogout()}>Đăng xuất</span>,
                    key: 'logout'
                }
            ]
        }
        ] : [])

    ];
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />

    )
}
export default Header