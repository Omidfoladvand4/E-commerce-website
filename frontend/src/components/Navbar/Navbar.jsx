import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
const Navbar = () => {
    const [menu , setMenu] = useState('shop')
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
       <div className="navlogo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
       </div>
       <ul className='nav-menu'>
        <li onClick={() => setMenu('shop')}> <Link style={{textDecoration : "none"}} to='/'>Shop</Link> {menu === 'shop' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('men')}><Link  style={{textDecoration : "none"}}  to='/mens'>mens</Link>{menu === 'men' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('women')}><Link style={{textDecoration : "none"}}  to='/women'>women</Link> {menu === 'women' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('kids')}><Link  style={{textDecoration : "none"}} to='/kids'>kids</Link> {menu === 'kids' ? <hr /> : <></>}</li>
       </ul>
        <div className="nav-login-cart">
        <Link to='/LoginSignup'><button>Login</button></Link>
         <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar