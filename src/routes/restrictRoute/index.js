import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function RestriRoute() {
  const isAuth = useAuth();
  return isAuth ? <Navigate to="/" /> : <Outlet />;
}

export default RestriRoute;
