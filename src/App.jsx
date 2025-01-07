/* eslint-disable no-unused-vars */
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/header/header'
import Footer from './components/layout/footer/footer'
import { Outlet } from 'react-router-dom'


const App = () => {

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
    <>
      <Header />
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
      <Outlet />
      <Footer />
    </>
  )
}




export default App
