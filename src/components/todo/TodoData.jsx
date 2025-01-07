/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Phải để là props để react nhận diện data truyền từ component cha
const TodoData = (props) => {
    const { todoList } = props
    console.log(">>>>>>>", todoList)
    return (
        <div className='todo-data'>
            {
                todoList.map((item, index) => {
                    return (
                        <div className="todo-item">
                            <div>{item.name}</div>
                            <button>Delete</button>
                        </div>
                    )
                })
            }
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}
export default TodoData