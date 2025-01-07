/* eslint-disable no-unused-vars */
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching youtobe" }
  ])

  const test = "Trinh Quang Lam"
  const test_2 = 25
  const data = {
    address: "hanoi",
    country: "vietnam"
  }

  const addNewTodo = (name) => {
    alert(`Call me ${name}`)
  }
  return (
    <div className="todo-container">
      <div className="todo-title">
        Todo List
      </div>
      <TodoNew function={addNewTodo} />
      <TodoData
        name={test}
        test_2={test_2}
        data={data}
        todoList={todoList}

      />
      <div className='todo-images'>
        <img src={reactLogo} className="logo react" />
      </div>
    </div>
  )
}




export default App
