import React from 'react'
import './NewsLetter.css'
function NewsLetter() {
  return (
    <div className='newsletter'>
      <h1>
        GET EXCLUSICVE OFEERS ON YOUR EMAIL
      </h1>
        <p>subscribe to our newletter and stay update</p>
        <div>
            <input type="email"  placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter