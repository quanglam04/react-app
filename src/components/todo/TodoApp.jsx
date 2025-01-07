/* eslint-disable no-unused-vars */
import reactLogo from '../../assets/react.svg'
import { useState } from 'react'
import TodoData from './TodoData'
import TodoNew from './TodoNew'
import './todo.css'
const TodoApp = () => {
    const [todoList, setTodoList] = useState([
        // { id: 1, name: "Learning React" },
        // { id: 2, name: "Watching youtobe" }
    ])

    const data = {
        address: "hanoi",
        country: "vietnam"
    }

    const deleteItem = (id) => {
        const updatedList = todoList.filter((value, index) => {
            return value.id !== id
        })
        setTodoList(updatedList)
    }

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 100),
            name: name
        }
        setTodoList([...todoList, newTodo])
    }

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    return (
        <div className="todo-container">
            <div className="todo-title">
                Todo List
            </div>
            <TodoNew addNewTodo={addNewTodo}

            />
            {
                todoList.length > 0 ?
                    <TodoData
                        data={data}
                        todoList={todoList}
                        deleteItem={deleteItem}
                    />
                    :
                    todoList.length === 0 &&
                    <div className='todo-images'>
                        <img src={reactLogo} className="logo react" />
                    </div>
            }
        </div>
    )
}
export default TodoApp