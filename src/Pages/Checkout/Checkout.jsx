import React, { useEffect, useState } from 'react'
import './Checkout.css'
import Apple from '../../img/ApplePay.png'
import PayPal from '../../img/PayPal.png'
import ShopPay from '../../img/ShopPay.png'
import Ship from '../../img/Ship.png'
import Store from '../../img/Store.png'
import question from '../../img/question.png'
import Efo from '../../img/Efo.png'
import Tag from '../../img/Tag.png'
import sale from '../../img/sale.png'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import Swal from 'sweetalert2'
const Checkout = ({ cart, setCart}) => {
    const [price, setPrice] = useState(0);
    const [isActive, setisActive] = useState(false);
    const [isActiv, setisActiv] = useState(false);
    const [delivery, setDelivery] = useState(0);
    const [totdelivery, settotdelivery] = useState(0)
    const [Selected, setSelected] = useState("Choose One")
    const [Select, setSelect] = useState("Choose One")
    const options = ['Nigeria', 'Ghana', 'United States', 'Portugal', 'Belgium', 'Qatar', 'Canada']
    const opt = ['Lagos', 'Enugu', 'Ibadan']
    
    const [checkTotal, setcheckTotal] = useState(0);
    const handlePrice = ()=>{
      let ans = 0;
      cart.map((pop)=>{
        ans += pop.amount * pop.price 
      })
      setPrice(ans);
    }
    const handletotd = ()=>{
        let totd = 0;
        totd += checkTotal + delivery + 500 -100
        settotdelivery(totd);
    }
    const handleDelivery = ()=>{
        let del = 0;
        cart.map((pop)=>{
            del += pop.amount * pop.delivery
        })
        setDelivery(del);
    }
    const handleTotal = ()=>{
        let tot = 0;
        cart.map((pop) => {
            tot += pop.amount * pop.price 
        })
        setcheckTotal(tot);
    }
    useEffect(()=>{
        handletotd();
    })
    useEffect(()=>{
        handlePrice();
      })
      useEffect(()=>{
        handleDelivery();
      })
    useEffect(()=>{
        handleTotal();
    })
  return (
    <div className="checkout">
        <div className="checkoutleft">
            <div className="expresscheckout">
                <p className="expresstitle">Express checkout</p>
                <div className="pay">
                    <img src={ShopPay} alt="" className='shoppay'/>
                    <img src={PayPal} alt="" />
                    <img src={Apple} alt="" />
                </div>
            </div>
            <div className="hr">
                <hr className="hrleft" />
                <p className="hrtext">OR</p>
                <hr className="hrright" />
            </div>
            <div className="contactinfo">
                <p className="infotitle">Contact information</p>
                <input type="email" name="" placeholder='Email' className='infoinput' id="" /><br/>
                <div className="checkbox">
                <input type="checkbox" className='infocheck' name="" id="" />
                <p className="checktext">Keep me up to date on news and exclusive offers</p>
                </div>
            </div>
            <form className="delivery">
                <p className="deliverytext">Delivery method</p>
                <div className="doorstep">
                    <input type="radio" name="delivery" className='radio' id="" />
                    <img src={Ship} alt="" />
                    <p className="doortext">Door step</p>
                </div>
                <div className="doorstep">
                    <input type="radio" name="delivery" className='radio' id="" />
                    <img src={Store} alt="" />
                    <p className="doortext">Pick Up</p>
                </div>
            </form>
            <div className="address">
                <p className="addressname">Delivery Address</p>
                <div className="names">
                    <input type="text" name="" id="" className='firstname' placeholder='First name (optional)' />
                    <input type="text" name="" id="" className='lastname' placeholder='Last name' />
                </div>
                <div className="addresscity">
                <input type="text" name="" className='addressinput' placeholder='Address' id="" />
                <div className='space'></div>
                <input type="text" name="" className='cityinput' placeholder='City' id="" />
                </div>
                <div className="optionsdiv">
                <div className="dropdown">
                    <div className="dropdownbtn" onClick={(e) => setisActive(!isActive)}>Country <br/> {Selected} <span className="fas fa-caret-down"></span></div>
                  {isActive && (
                      <div className="dropdowncontent">
                        {options.map(option => (

                            <div className="dropdownitem" onClick={(e) =>{ setSelected(option); setisActive(false);}}>{option}</div>
                        ))}
                  </div>
                  )}
                </div>
                <div className="dropdown">
                    <div className="dropdownbtn" onClick={(f) => setisActiv(!isActiv)}>State <br/> {Select} <span></span> <span className="fas fa-caret-down"></span></div>
                  {isActiv && (
                      <div className="dropdowncontent">
                        {opt.map(opti => (

                            <div className="dropdownitem" onClick={(f) =>{ setSelect(opti); setisActiv(false);}}>{opti}</div>
                        ))}
                  </div>
                  )}
                </div>
                </div>
                <div className="space"></div>
                <div className="checkphone">
                <input type="text" name="" className='cityinput' placeholder='Phone' id="" />
                <i className="phoneicon"><img src={question} alt="" /></i>
                </div>
                <div className="space"></div>
                <input type="text" name="" className='cityinput' placeholder='Add a Note (optional)' id="" />
                <div className="checkbox">
                <input type="checkbox" className='infocheck' name="" id="" />
                <p className="checktext">Save this information for next time</p>
                </div>
                <div className="complete">
                <input type="submit" value="Complete Order" className="checksubmit"/>
                </div>
                <div className="checkfooter">
                    <hr />
                    <div className="checkfootlinks">
                        <Link className='checklink'>Refund policy</Link>
                        <Link className='checklink'>Shipping policy</Link>
                        <Link className='checklink'>Privacy policy</Link>
                    </div>
                </div>
            </div>
        </div>
        {cart.length === 0 &&  
         Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Nothing to checkout!',
        footer: '<a href="/cart">Go back</a>',
        showConfirmButton: false
      })}
        <div className="checkoutright" >
        {
        cart?.map((pop)=>(
            <div className="checkrighthead" key={pop.id}>
                <img src={pop.cartimg} alt="" className="efo" />
                <div className="efoname">
                    <p className="eforiro">{pop.title}</p>
                    <p className="water">2 Bottle water</p>
                </div>
                <p className="checkprice">₦ {pop.price}</p>
            </div>
              ))
            }
            <div className="checkhr">
                <hr />
            </div>
            <div className="checkdiscount">
                <input type="text" placeholder='Discount code' className="discountcode" />
                <button className="discountbtn">Apply</button>
            </div>
                <div className="tag">
                    <img src={Tag} alt="" className="tagimg" />
                </div>
                <div className="checkhr">
                <hr />
            </div>
            
            <div className="subtotal">
                <p className="checksub">Subtotal</p>
                <p className="subprice">₦ {price}</p>
            </div>
            <div className="subtotal">
                <p className="checksub">Delivery</p>
                <p className="subprice">₦ {delivery}</p>
            </div>
        
            <div className="discountprice">
                <p className="checksub">Discount</p>
                <div className="eastersale">
                <img src={sale} alt="" />
                <p className="saletext">EasterSale</p>
                </div>
                <p className="subprice">₦ 100</p>
            </div>
            <div className="subtotaltax">
                <p className="checksub">Taxes</p>
                <p className="subprice">₦ 500</p>
            </div>
            <div className="checkhr">
                <hr />
            </div>
            <div className="checktotal">
                <p className="totalsub">Total</p>
                <p className="totalprice">₦{totdelivery} </p>
            </div>
        </div>
        
    </div>
  )
}

export default Checkout
