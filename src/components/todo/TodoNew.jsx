/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const TodoNew = (props) => {
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => {
                    console.log(event.target.value)
                }}
            />
            <button style={{ cursor: "pointer" }} onClick={() => { props.function("trinhquanglam") }}>Add</button>
        </div>
    )
}
export default TodoNew;