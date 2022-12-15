import React from 'react'
import error from '../img/error.png'
import { Link } from 'react-router-dom'
import './style.css'
const NotFound = () => {
  return (
    <div className='notfound'>
      <img src={error} alt="" className="404" /><br/>
      <p className="errortext">
      This Page Does not exist
      </p>
      <Link className='errorlink' to='/'>Try Going Home</Link>
    </div>
  )
}

export default NotFound
