import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./privateRoute/intex";
import RestriRoute from "./restrictRoute";
import Home from "../screen/home";
import Login from "../screen/login";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route exact path="/login" element={<RestriRoute />}>
          <Route exact path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
