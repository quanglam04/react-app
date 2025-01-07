/* eslint-disable no-unused-vars */
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching youtobe" }
  ])

  const data = {
    address: "hanoi",
    country: "vietnam"
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
      <TodoNew addNewTodo={addNewTodo} />
      {
        todoList.length > 0 ?
          <TodoData
            data={data}
            todoList={todoList}
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




export default App
