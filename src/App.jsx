/* eslint-disable no-unused-vars */
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'

const App = () => {


  return (
    <div className="todo-container">
      <div className="todo-title">
        Todo List
      </div>
      <TodoNew />
      <TodoData />
      <div className='todo-images'>
        <img src={reactLogo} className="logo react" />
      </div>
    </div>
  )
}



export default App
