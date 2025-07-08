import { useState } from "react";

function TodoFrom({ onAdd}) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        onAdd(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="할 일을 입력하세요"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button type="submit"></button>
        </form>
    );
}

export default TodoFrom;