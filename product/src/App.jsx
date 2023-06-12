import React from "react";
import {  Route, Routes } from "react-router-dom";

import "./index.scss";
import ProductLists from "./Components/ProductLists";
import ProductPage from "./Components/ProductPage";


const App = () => {
   return <div className="border-4  border-red-700">
   <Routes>
   <Route path="/" element={<ProductLists />}/> 
   <Route path=":productId" element={<ProductPage />}/> 
     </Routes>
   </div>
 
};

  export default App;
