import React from "react";
import { useState } from "react";

const About = () => {
  const [count, setCount] = useState(100);
  return (
      <div style={{ border: "1px solid red" }}>
      <h2>About</h2>
      <div>{count}</div>
    </div>
  );
};

export default About;
