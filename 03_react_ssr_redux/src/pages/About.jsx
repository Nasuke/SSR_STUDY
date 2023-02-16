import React from "react";
import { useSelector } from "react-redux";


const About = () => {
  
    const { count } = useSelector((state) => ({
        count: state.about.count,
    }));

  return (
      <div style={{ border: "1px solid red" }}>
      <h2>About</h2>
      <div>{count}</div>
    </div>
  );
};

export default About;
