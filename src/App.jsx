import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "123", completed: false },
    { id: 1, content: "코딩 공부하기", completed: false },
    { id: 2, content: "잠 자기", completed: false },
  ]);

  return (
    <>
      <h1>Todo 앱</h1>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        onClick={() => {
          if (inputValue.trim() === "") return; // 빈값 추가 방지
          const newTodo = { id: Number(new Date()), content: inputValue, completed: false };
          const newTodoList = [...todoList, newTodo];
          setTodoList(newTodoList);
          setInputValue("");
        }}
      >
        추가하기
      </button>
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
  const [isEditing, setIsEditing] = useState(false); // 오타 수정

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
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button
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
