import { React } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Product from './pages/Product'
import ShopCategory from './pages/ShopCategory'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/LoginSignup' element={<LoginSignup />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/mens' element={<ShopCategory category='mens' />} />
        <Route path='/womens' element={<ShopCategory category='womens' />} />
        <Route path='/kids' element={<ShopCategory category='kids' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
