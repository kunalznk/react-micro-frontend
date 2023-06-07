import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";
import ProductLists from "./Components/ProductLists";
import ProductPage from "./Components/ProductPage";
import Header from "./Components/Header";

const App = () => (
  <>
  <Header />
  <Routes>
   <Route path="/" element={<ProductLists />}/> 
   <Route path="/:productId" element={<ProductPage />}/> 
 </Routes>
 </>
);

const root = document.getElementById("app");

ReactDOM.render(
  <BrowserRouter basename="/products">
  <App />
  </BrowserRouter>
  ,root);
