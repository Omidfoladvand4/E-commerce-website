import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
    const [menu , setMenu] = useState('shop')
  return (
    <div className='navbar'>
       <div className="navlogo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
       </div>
       <ul className='nav-menu'>
        <li onClick={() => setMenu('shop')}>shop {menu === 'shop' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('men')}>men{menu === 'men' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('women')}>women {menu === 'women' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('kids')}>kids {menu === 'kids' ? <hr /> : <></>}</li>
       </ul>
        <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar