import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart , addItem , removeItem} from '../../redux/cart/cart.action';

import "./checkout-item.styles.css"

const CheckoutItem =({cartItem,clearItem, addItem, removeItem})=>{
    const {name, imageUrl, price, quantity}= cartItem;
    return(
<div className='checkout-item'>
   <div className='image-container'>
    <img src={imageUrl} alt='item'/></div> 
    <span className='cname'>{name}</span>
    <span className='quantity'><div className='arrow' onClick={()=> removeItem(cartItem)}>&#45;</div><span className='value'>{quantity}</span><div className='arrow' onClick={()=> addItem(cartItem)}>&#43;</div></span>
    <span className='cprice'>{price}</span>
    <div className='remove-button' onClick={()=> clearItem(cartItem )}>&#10005;</div>
</div>
)};

const mapDispatchToProps = dispatch =>  ({

    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);