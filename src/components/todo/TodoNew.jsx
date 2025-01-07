/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useState } from "react"

/* eslint-disable no-unused-vars */
const TodoNew = (props) => {

    //useState
    //setValueInput là 1 hàm
    const [valueInput, setValueInput] = useState("trinhlam")
    const { addNewTodo } = props

    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }
    const handleOnChang = (name) => {
        setValueInput(name)

    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnChang(event.target.value)}
                value={valueInput}
            />
            <button style={{ cursor: "pointer" }} onClick={() => {
                handleClick()
            }}>Add</button>
            <div>My text input is: {valueInput}</div>

        </div>
    )
}
export default TodoNew;