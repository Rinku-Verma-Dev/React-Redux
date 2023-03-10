import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./privateRoute/intex";
import PublicRoute from "./publicRoute";
import RestriRoute from "./restrictRoute";
import Home from "../screen/home";
import Login from "../screen/login";
import About from "../screen/about";
import ContactUs from "../screen/contactUs";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route exact path="/about" element={<PublicRoute />}>
          <Route exact path="/about" element={<About />} />
        </Route>
        <Route exact path="/contactus" element={<PrivateRoute />}>
          <Route exact path="/contactus" element={<ContactUs />} />
        </Route>
        <Route exact path="/login" element={<RestriRoute />}>
          <Route exact path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
