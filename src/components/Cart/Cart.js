import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props

    // const totalReducer = (previous, product) => previous + product.price
    // let total = cart.reduce(totalReducer, 0)
    
    let totalQuantity = 0
    let total = 0
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1
        }
        total = total + product.price * product.quantity
        totalQuantity = totalQuantity + product.quantity
    }
    
    const shipping = total > 0 ? 15 : 0
    const tax = (total + shipping) *.1
    const grandTotal = total+shipping+tax
    
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <hr/>
            <span className='btn'>Items Ordered: {totalQuantity}</span>
            <span className='btn'>Total: $ {total.toFixed(2)}</span>
            <span className='btn'>Shipping: $ {shipping}</span>
            <span className='btn'>Tax: $ {tax.toFixed(2)}</span>
            <span className='btn'>Grand total: $ {grandTotal.toFixed(2)}</span>
        </div>
    );
};

export default Cart;