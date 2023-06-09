import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import "./checkout.styles.css";



const CheckoutPage = ({cartItems, total})=>(
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
            <span>Product</span>
        </div>
        <div className='header-block'>
            <span>Discription</span>
        </div>
        <div className='header-block'>
            <span>Quanitity</span>
        </div>
        <div className='header-block'>
            <span>Price</span>
        </div>
        <div className='header-block'>
            <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => (<CheckoutItem  key={cartItem.id} cartItem={cartItem}/>))
      }
      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
      <div className='test-warning'>*Please use the following test credit card for payments*<br/> 4242 4242 4242 4242 - Exp: 30/32 - CVV: 303</div>
      <StripeCheckoutButton price={total} />
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)( CheckoutPage);