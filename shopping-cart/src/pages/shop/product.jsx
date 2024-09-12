import React,{useContext} from 'react';
import {ShopContext} from '../../context/shop-context';

export const Product=(props)=>{
    const {id,title,price,category,description,image}=props.data;
    const {cartItems,addToCart}=useContext(ShopContext);
    const cartItemAmount=cartItems[id];
    return <div className='product'>
        <img src={image}/>
        <div className='description'>
<p><b>{title}</b></p>
<p>${price}</p>
        </div>
        <button className='addToCartBtn' onClick={()=>addToCart(id)}>
            Add to cart {cartItemAmount>0 && <>({cartItemAmount})</>}
            </button>
    </div>
};