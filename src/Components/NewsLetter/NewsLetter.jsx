import React from 'react'
import './NewsLetter.css'
import { toast } from 'react-toastify';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div>
        <input type="email" placeholder='Your email id' />
        <button onClick={() => toast.success("Subscribed Successfully")}>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
