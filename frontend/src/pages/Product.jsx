import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums/Breadcrums';
import { ShopContext  } from '../context/ShopContext';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/Description/DescriptionBox';
const Product = () => {
  const {all_products} = useContext(ShopContext);
  const Params = useParams()
   const {productId}  = Params;
   
  
  const product = all_products.find((e) => e.id === Number(productId))
  return (
    <div>
        <Breadcrums  product= {product}/>
        <ProductDisplay  product= {product}/>
        <DescriptionBox />
    </div>
  )
}

export default Product