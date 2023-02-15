import React from "react";
import { useState } from "react";

const App = function () {
  const [count, setCount] = useState(10);

  function addCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={addCount}>+1</button>
    </div>
  );
};

export default App;
