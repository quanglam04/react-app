/* eslint-disable no-unused-vars */
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'

const App = () => {

  const test = "Trinh Quang Lam"
  const test_2 = 25
  const data = {
    address: "hanoi",
    country: "vietnam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">
        Todo List
      </div>
      <TodoNew />
      <TodoData
        name={test}
        test_2={test_2}
        data={data}
      />
      <div className='todo-images'>
        <img src={reactLogo} className="logo react" />
      </div>
    </div>
  )
}



export default App
