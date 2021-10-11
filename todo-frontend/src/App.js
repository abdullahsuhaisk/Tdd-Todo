import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import ClockLoader from 'react-spinners/ClockLoader'

function App() {
  const [todo, setTodo] = useState({duty:'', done:false});
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = "http://localhost:3001/"

  async function addTodoBackend(todoParam) {
    setLoading(true)
    try {
      const response = await axios.post(`${URL}todo`, { todo: todoParam })
      const { data: { id, message } } = response
      alert(`${message} your todo is : ${todo.duty}`)
      setLoading(false)
    } catch (error) {
      alert()
      setLoading(false)
    }
  }

  // console.log(todo)
  function handleClick() {
    addTodoBackend(todo)
    setTodoList([...todoList, todo])
    setTodo({duty:'', done:false})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Todo-container">
          <h3>TODOS</h3>
          <div className="Todo-input">
            <input placeholder="add todo" type="text" id="todo-add" onChange={(e) => { setTodo({...todo,duty:e.target.value}) }}  value={todo.duty}/>
            <div className="margin-left">
              {!loading ? <button onClick={() => handleClick()} id="addButton">Add todo</button> : <div className="Todo-spinner"><ClockLoader color={"#61dafb"} loading={loading} /> </div>}
            </div>
          </div>
          <ul className="Todo-list" id="Todo">
            {todoList.length > 0 ? todoList.map((todoItem, index) => {
              return (<li key={index}>
                {todoItem.duty}
              </li>)
            }) : null}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
