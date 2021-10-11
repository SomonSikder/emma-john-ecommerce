import React from 'react';
import { useHistory } from 'react-router-dom';
import { default as useCart } from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const OrderReview = () => {
    const [products] = useProducts()
    const [cart]  = useCart(products)
    const history = useHistory()
    const handleRemove = (id)=>{
        console.log('clicked', id)
        deleteFromDb(id)
    }
    const handleProceedToShipping=()=>{
        history.push('./shipping')
        // clearTheCart()
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem 
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                } 
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    
                    <button onClick={handleProceedToShipping} className="order-btn">Proceed to shipping</button>
                    
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;