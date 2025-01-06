/* eslint-disable no-unused-vars */
import './style.css'

const SecondComponent = () => {
    return (
        <div>
            second component
        </div>

    )
}

const ThirdComponent = () => {
    return (
        <>
            <div className="thirdComponent">
                Third component
            </div>
            <div>
                Child compoment
            </div>
        </>

    )
}
export { SecondComponent, ThirdComponent }
// Khi cần export nhiều Component dùng dấu { }