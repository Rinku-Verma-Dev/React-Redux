import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("token", "1234567890");
    navigate("/");
  };
  return (
    <>
      <h1>REDUX LOGIN</h1>
      <button type="submit" onClick={handleLogin}>
        LogIn
      </button>
    </>
  );
}

export default Login;
