import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb.js';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProducts, setdisplayProducts] = useState([])

    useEffect(()=>{
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setdisplayProducts(data)
            })
    },[])
    
    useEffect(()=>{
        if(products.length){
            const savedProduct = getStoredCart()
            const storedCart = []
            for(const key in savedProduct){
                const addedProduct = products.find(product=>product.key=== key)
                if(addedProduct){
                    const quantity = savedProduct[key]
                    addedProduct.quantity = quantity
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart)
        }
    },[products])
    
    const handleAddToCart = (product)=>{
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)
    }
    
    const handleSearch = event =>{
        const searchText = event.target.value
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setdisplayProducts(matchProducts)
    }

    return (
        <>
            <div className="search-field">
                <input 
                    type="text" 
                    placeholder='Search Product'
                    onChange={handleSearch}
                />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {displayProducts.map(product =><Product 
                        product={product} 
                        key={product.key} 
                        handleAddToCart={handleAddToCart}
                    ></Product>)}

                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;