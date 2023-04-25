import {Routes, Route, Navigate} from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Shop from '../pages/Shop';
import ProductDetail from '../pages/ProductDetail';
import ProtectedRouter from './ProtectedRouter';
import AddProduct from '../admin/AddProduct';
import AllProduct from '../admin/AllProduct';
import Dashboard from '../admin/Dashboard';
import User from '../admin/User';
const Routers=  () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to ='home'/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='/*' element={<ProtectedRouter/>}>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='dashboard/add-products' element={<AddProduct/>}/>
        <Route path='dashboard/all-product' element={<AllProduct/>}/>
        <Route path='dashboard/users' element={<User/>}/>
      </Route>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='shop/:id' element={<ProductDetail/>}/>
    </Routes>
  )
}
export default Routers;
