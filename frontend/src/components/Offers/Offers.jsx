import React from 'react'
import './Offers.css'
import exlucive_image from '../Assets/exclusive_image.png'
function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>EXCLUSIVE</h1>
            <h1>Offers for you</h1>
            <p>only on best sellers products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exlucive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers