// src/components/TodoItem.jsx

export default function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onEdit(todo.id)}>수정</button>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
}
