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
import mens_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/LoginSignup' element={<LoginSignup />} />
        <Route path='/Product/:productId' element={<Product />}  />
        <Route path='/mens' element={<ShopCategory  banner= {mens_banner} category='men' />} />
        <Route path='/women' element={<ShopCategory banner= {women_banner} category='women' />} />
        <Route path='/kids' element={<ShopCategory banner= {kid_banner} category='kid' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
