import React, {useState} from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import empty from '../../../img/empty.png'
import './Cart.css'
import Trending from '../../Trending/Trending';
import Swal from 'sweetalert2';
import { info } from 'toastr';
const Cart = ({cart, setCart, handleChange, size}) => {
  const [price, setPrice] = useState(0);

  const handlePrice = ()=>{
    let ans = 0;
    cart.map((pop)=>{
      ans += pop.amount * pop.price
    })
    setPrice(ans);
  }
  const handleRemove = (id) =>{
    const arr = cart.filter((pop) => pop.id !== id);
    setCart(arr);
    handlePrice();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Removed!',
          'This Product has been removed.',
          'success'
        )
      }
    })
  }
  useEffect(()=>{
    handlePrice();
  })
  return (
    
    <div className='cartall'>
      
            <div className="carttitles">
              <p className="carttitletext">Cart ({size})</p>
            </div>
      {cart.length === 0 && <div> <div className='emptydiv'> <img src={empty} alt="" className='cartimgempty' /> <div className='emptytext'>Your Cart Is Empty!</div><div className='emptybrowse'>Browse Our Categories and discover our best deals</div><Link to="/products" className='emptybtndiv'><button className='emptybtn'>Start Shopping</button></Link></div><Trending/></div>}
      {
        cart?.map((pop)=>(
          <div className="cartdivs">
          <div className="cartdiv">
          <div key={pop.id} className="cart">
            <div className="cartimg">
            <img src={pop.cartimg} alt="" className='cartimg' />
            <div className="remove" onClick={() => handleRemove(pop.id)}>
              <i class="fa fa-trash"></i>
            <button  className='removebtn'>Remove</button>
            </div>
            </div>
            <div className="cartothers">
            <div className="poptitle">
            <p className='carttitle'>{pop.title}</p>
            <p className="stock">in stock</p>
            <p className="mart">Ado mart</p>
            </div>
            <div className='cartprice'>
              <span>₦ {pop.price}</span>
            </div>
            </div>
          </div>
          </div>
          </div>
          
          ))
        }
        <div className="bottom">
          <div className="summary">
            <span>Cart Summary</span>
          </div>
          <div className="hrdiv">
            <hr/>
          </div>
        <div className="carttotal">
        <span>Subtotal </span>
        <span>₦ {price}</span>
        </div>
        <div className="hrdiv">
          <hr />
        </div>
        <Link className="checkouts" to="/checkout">
          <button>Checkout (₦ {price})</button>
        </Link>
        </div>
        <div className="continueshop">
        <Link to="/products" className='emptybtndiv'><button className='emptybtn'>Continue Shopping</button></Link>
        </div>
    </div>
  )
}

export default Cart
