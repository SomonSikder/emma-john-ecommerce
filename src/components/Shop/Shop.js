import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useCart from '../../Hooks/useCart.js';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    // products to be rendered on the UI.
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);



    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <NavLink to='/orders'>
                            <button className="order-btn">Review Order</button>
                        </NavLink>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;