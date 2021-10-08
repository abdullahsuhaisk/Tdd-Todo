import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import ClockLoader from 'react-spinners/ClockLoader'

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function addTodoBackend(todoParam) {
    setLoading(true)
    try {
      const response = await axios.post('http://localhost:3001/todo', { todo: todoParam })
      const { data: { id, message } } = response
      alert(`${message} your todo is : ${todo}`)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  // console.log(todo)
  function handleClick() {
    addTodoBackend(todo)
    setTodoList([...todoList, todo])
    setTodo('')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Todo-container">
          <h3>TODOS</h3>
          <div className="Todo-input">
            <input placeholder="add todo" type="text" id="todo-add" onChange={(e) => { setTodo(e.target.value) }} value={todo} />
            <div className="margin-left">
              {!loading ? <button onClick={() => handleClick()} id="addButton">Add todo</button> : <div className="Todo-spinner"><ClockLoader color={"#61dafb"} loading={loading} /> </div>}
            </div>
          </div>
          <ul className="Todo-list" id="Todo">
            {todoList.length > 0 ? todoList.map(todoItem => {
              return (<li>
                {todoItem}
              </li>)
            }) : null}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
