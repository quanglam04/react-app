import { useContext } from "react"
import { AuthContext } from "../components/context/auth.context"
import { Link, Navigate } from "react-router-dom"
import { Button, Result } from "antd"

const PrivateRoute = (props) => {
    const { user } = useContext(AuthContext)
    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    }
    else
        return (
            <Result
                status="404"
                title="403"
                subTitle={<span style={{ fontSize: 45 }}>Chưa đăng nhập mà đòi vào?</span>}
                extra={<Button type="primary">

                    <Link to={"/login"}>
                        <span>
                            Back to homepage
                        </span>
                    </Link>
                </Button>}
            />
        )
}
export default PrivateRoute