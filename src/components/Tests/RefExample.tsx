import { useState, useEffect, useRef } from "react";
import React from 'react';

function RefExample() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  // const [ count, setCount ] = useState(0);

  useEffect(() => {
    count.current += 1;
    // setCount(count + 1);
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default RefExample;