import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  // console.log(todo)
  function handleClick() {
    setTodoList([...todoList,todo])
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
            <button onClick={() => handleClick()} id="addButton">Add todo</button>
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
