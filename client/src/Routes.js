import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Components/Products/Cart/Cart'
import Products from './Components/Products/Products'
import Trend from './Pages/Trend'
import NotFound from './Pages/NotFound'
import CheckOut from './Pages/Checkout/Checkout'
import TestCheckout from './Pages/testcheckout'

const Routing = ({handleClick, cart, setCart, handleChange, size}) => {
  return <div>
    <Routes>
    <Route path="/" element={<Home handleClick={handleClick}/>}/>
    <Route path="/cart" element={<Cart cart={cart} handleChange={handleChange} setCart={setCart} size={cart.length}/>}/>
    <Route path="/products" element={<Products handleClick={handleClick}/>}/>
    <Route path="/trending" element={<Trend/>}/>
    <Route path="/testcheckout" element={<TestCheckout/>}/>
    <Route path="/checkout" element={<CheckOut cart={cart} handleChange={handleChange} setCart={setCart}/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
  </div>
}

export default Routing
