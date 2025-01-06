/* eslint-disable react/prop-types */
// Phải để là props để react nhận diện data truyền từ component cha
const TodoData = (props) => {
    console.log(">>>>>>>", props)
    return (
        <div className='todo-data'>
            <div>My name is {props.name}</div>
            <div>Learning React</div>
            <div>Watching Youtobe</div>
        </div>
    )
}
export default TodoData