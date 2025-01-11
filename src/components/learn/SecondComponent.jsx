/* eslint-disable no-unused-vars */
import './style.css'

const SecondComponent = () => {
    const test = "Trinh Quang Lam "
    const onject = {
        name: "Trinh Lam",
        age: 21
    }
    return (
        <div>
            {JSON.stringify(onject)}
            {test}
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