import { useState } from 'react';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ProductLists from './Components/ProductLists';
import ProductPage from './Components/ProductPage';
import Orders from './Components/Orders';
import Delivery from './Components/Delivery';
import Checkout from "./Components/Checkout"

function App() {
  const [ loading, setLoading ] = useState(false);
  return (
    
   <>
  <Header />
  <Routes>
   <Route path="/" element={<Home loading={loading} setLoading={setLoading}/>}/> 
   <Route path="/products" element={<ProductLists loading={loading} setLoading={setLoading}/>}/> 
   <Route path="/products/:productId" element={<ProductPage loading={loading} setLoading={setLoading}/>}/> 
   <Route path="/orders/checkout" element={<Checkout loading={loading} setLoading={setLoading}/>}/> 
   <Route path="/orders" element={<Orders loading={loading} setLoading={setLoading}/>}/>
   <Route path="/delivery" element={<Delivery loading={loading} setLoading={setLoading}/>}/> 
 </Routes>
 </>
  );
}

export default App;
