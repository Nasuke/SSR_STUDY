import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment } from '../store/modules/home';

const Home = () => {

  const { count } = useSelector(state => {
    return {
      count: state.home.count
    }
  });

  const dispatch = useDispatch()
  
  function add() {
    dispatch(increment(count + 1));
  }

  return (
    <div style={{  border: "2px solid blue", margin: "20px"}}>
      <h2>Home</h2>
      <div>{count}</div>
      <button onClick={add}>add</button>
    </div>
  );
};

export default Home;
