/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Phải để là props để react nhận diện data truyền từ component cha
const TodoData = (props) => {
    const { todoList } = props
    const { deleteItem } = props
    return (
        <div className='todo-data'>
            {
                todoList.map((item, index) => {
                    return (
                        <div className="todo-item" key={item.id}>
                            <div>{item.name}</div>
                            <button style={{ cursor: "pointer" }} onClick={() => { deleteItem(item.id) }}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default TodoData