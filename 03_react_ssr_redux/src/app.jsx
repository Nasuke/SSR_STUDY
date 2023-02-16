import React from "react";
import { useState } from "react";
import { useRoutes, Link } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const [count, setCount] = useState(10);

  function add() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>React SSR</h1>
      <div>{count}</div>
      <button onClick={add}>+1</button>
      <Link to="/"><button>Home</button></Link>
      <Link to="/about"><button>About</button></Link>
      {
        // 占位
        useRoutes(routes)
      }
    </div>
  );
};

export default App;
