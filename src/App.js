import React from 'react'
import Categories from './components/Categories';
import Products from './components/Products';
import DenseAppBar from './components/Header';
import Footer from './components/Footer';

import Cart from './components/Cart';
import {useState} from 'react';


function App() {
  const [showCart, setshowCart] = useState(false)


  function handleShow(){
    setshowCart(!showCart);
  }
  
  
  return (
    <div>
      <DenseAppBar show={handleShow}/>
      <Categories/>
      <Products/>
      {showCart&&<Cart />}
      <Footer />
    </div>
  )
}

export default App
