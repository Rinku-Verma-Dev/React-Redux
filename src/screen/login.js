import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("token", "1234567890");
    navigate("/");
  };
  return (
    <>
      <Link to="/about">About</Link>
      <button type="submit" onClick={handleLogin}>
        LogIn
      </button>
    </>
  );
}

export default Login;
