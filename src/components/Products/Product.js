import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
    const {name, img, price, stock, seller,star} = props.product
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
            <img className='img' src={img} alt="" />
            <div>
                <h5 className='product-name'>{name}</h5>
                <p><small>Order by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>only {stock} left in stock - order soon</small> </p>
                <Rating 
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    initialRating={star}
                    readonly
                ></Rating>
                <br />
                <br />
                <button 
                    onClick={()=>props.handleAddToCart(props.product)} 
                    className="btn-regular"
                >{cartIcon}  add to cart</button>
            </div>
        </div>
    );
};

export default Product;