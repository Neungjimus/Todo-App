import { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div style={{ marginTop: "20px", fontSize: "1.2rem", fontWeight: "bold" }}>
      현재 시간: {time.toLocaleTimeString()}
    </div>
  );
}
