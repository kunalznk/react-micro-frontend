import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";
import Orders from "./Components/Orders";
import Checkout from "./Components/Checkout";

const App = () => {
  return <div className="border-4  border-green-700">
  <Routes>
   <Route path="/" element={<Orders />}/>
   <Route path=":productId/checkout" element={<Checkout />}/> 
 </Routes>
 </div>
};

export default App;

