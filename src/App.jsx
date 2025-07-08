import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Quiz from "./components/Quiz";
import Time from "./components/Time";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "123", completed: false },
    { id: 1, content: "코딩 공부하기", completed: false },
    { id: 2, content: "잠 자기", completed: false },
  ]);

  const handleAdd = (text) => {
    const newTodo = { id: Date.now(), content: text, completed: false };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <h1>Todo 앱</h1>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoForm onAdd={handleAdd} /> 
      <Quiz />
      <Time />
    </>
  );
}


function TodoList({ todoList, setTodoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </ul>
  );
}

function Todo({ todo, setTodoList }) {
  const [inputValue, setInputValue] = useState(todo.content);
  const [isEditing, setIsEditing] = useState(false); 

  const toggleCompleted = () => {
    setTodoList(prev =>
      prev.map(el =>
        el.id === todo.id ? { ...el, completed: !el.completed } : el
      )
    );
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed || false}
        onChange={toggleCompleted}
      />

      {isEditing ? (
        <>
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button
            onClick={() => {
              setTodoList(prev =>
                prev.map(el =>
                  el.id === todo.id ? { ...el, content: inputValue } : el
                )
              );
              setIsEditing(false);
            }}
          >
            저장
          </button>
          <button onClick={() => setIsEditing(false)}>취소</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.content}
          </span>
          <button className="todo-button edit-button" onClick={() => setIsEditing(true)}>수정</button>
          <button
          className="todo-button delete-button"
          onClick={() => {
            setTodoList(prev => prev.filter(el => el.id !== todo.id));
          }}
          >
            삭제
          </button>
        </>
      )}
    </li>
  );
}

export default App;
