// src/routes/PrivateRoute.jsx

import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return userInfo ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
