import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Contador</h1>
      <p style={{ fontSize: "1.5rem" }}>Valor: {count}</p>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "1rem" }}>
        Restar
      </button>
    </div>
  );
}

export default Counter;