import { useState } from "react";

const quotes = [
  "인내는 쓰지만 그 열매는 달다.",
  "행동은 모든 성공의 기초이다.",
  "실패는 성공으로 가는 가장 빠른 길이다.",
  "오늘 할 일을 내일로 미루지 마라.",
  "작은 성취도 큰 꿈의 시작이다.",
];

export default function Quiz() {
  const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));

  const changeQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };

  return (
    <div style={{ marginTop: "20px", fontStyle: "italic" }}>
      <p>"{quotes[index]}"</p>
      <button onClick={changeQuote}>다른 명언 보기</button>
    </div>
  );
}
