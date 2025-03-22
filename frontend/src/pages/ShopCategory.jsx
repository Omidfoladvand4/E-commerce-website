import React, { useContext } from 'react'
import './css/ShopCategory.css'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'
import { ShopContext } from '../context/ShopContext'
const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div  className='shop-category'>
         <img className='shop-category-banner' src={props.banner} alt="" />
         <div className="shopcategory-indexsort">
          <p>
            <span>Showing 1-12</span>  our of 36 products
    
          </p>
          <div className="shopcategory-sort">
             Sort by <img src={dropdown_icon} alt="" />
          </div>
         </div>
         <div className="shopcategory-products">
          {all_products.map((item , index ) => {
            if(props.category === item.category){
            return    <Item  key={index}  id={item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
            }else{
              return null
            }
          })}
         </div>
         <div className="shopcategory-loadmore">
            EXPLORE MORE
         </div>
    </div>
  )
}

export default ShopCategory