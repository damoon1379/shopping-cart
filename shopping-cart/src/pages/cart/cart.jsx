import React,{useContext} from 'react';
import {PRODUCTS} from '../../products';
import {ShopContext} from '../../context/shop-context';
import {CartItem} from './cartItem';
import { useNavigate } from 'react-router';

export const Cart=()=>{
const {cartItems,getTotalCartAmount} =useContext(ShopContext);
const totalAmount=getTotalCartAmount();
const navigate=useNavigate();

    return <div className='cart'>
        <div>
            <h1>your cart items</h1>
        </div>
        <div className='cartItems'>
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id] !==0){
                    return <CartItem data={product}/>;
                }
            })}
        </div>
        {totalAmount>0 ?
        <div className='checkout'>
            <p>subtotal: ${totalAmount}</p>
            <button onClick={()=>navigate('/')} > Continue Shopping </button>
            <button> Checkout </button>
        </div>
        :<h1>Your cart is empty </h1>}
    </div>
};