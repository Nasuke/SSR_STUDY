import React from "react";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(1000);
  return (
    <div style={{  border: "2px solid blue", margin: "20px"}}>
      <h2>Home</h2>
      <div>{count}</div>
    </div>
  );
};

export default Home;
