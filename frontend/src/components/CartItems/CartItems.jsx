import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

function CartItems() {
    const { all_products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className='cart-items'>
            <div className="cart-items-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
                {all_products.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div className="cart-items-fomart cart-items-format-main" key={e.id}>
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cart-items-quantity'>{cartItems[e.id]}</button>
                                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                                <img className='carticon-remove-icon' src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove" />
                            </div>
                        );
                    }
                    return null;
                })}
                <hr />
            </div>
            <div className='cart-items-down'>
                <div className="cart-items-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-items-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount().toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount().toFixed(2)}</h3>
                        </div>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
                <div className="cart-items-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cart-items-promobox">
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
