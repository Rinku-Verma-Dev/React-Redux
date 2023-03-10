import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/features/counterSlice";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div>
        <h1>REDUX</h1>
        <div>{count}</div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <button onClick={logout}>Log Out</button>
    </>
  );
}

export default Home;
