import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import './App.css'
import Routes from './Routes'
import swal from 'sweetalert'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { BallTriangle, Circles, Puff } from 'react-loader-spinner'
import Swal from 'sweetalert2'

const App = () => {
  const [cart , setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  const handleClick = (pop) => {
   let isPresent = false;
   cart.forEach((prod)=>{
    if (pop.id === prod.id)
    isPresent = true;
   })
   if (isPresent){
    setWarning(true);
    setTimeout(()=>{
      setWarning(false);
    }, 2000);
    return ;
   }
      setCart([...cart, pop]);
      Swal.fire({
        icon: 'success',
        title: 'Good Job...',
        text: 'You have added this product to cart!',
        timer: 2000
      })
  }
  const handleChange = (pop, d) =>{
    let ind = -1;
    cart.forEach((data, index)=>{
      if (data.id === pop.id)
      ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0)
    tempArr[ind].amount = 1;
    setCart([...tempArr]);
  }
  return (
    <div>
      {
        loading?
      <div className='loader'>
       <Circles height="100" width="100" color="#FFBA00" ariaLabel="Loading" className="loading"/> 
      {/* <img src='./img/Logo.png' alt=''/> */}
      </div>
      :
      <div>
     <Navbar size={cart.length}/>
     <Routes handleClick={handleClick} cart={cart} setCart={setCart} handleChange={handleChange} size={cart.length}/> 
     <Footer/>
     </div>
}
     {
      warning && alert("this product is already added to cart")
     }
    </div>
  )
}

export default App

