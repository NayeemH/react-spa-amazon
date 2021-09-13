import React from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const firstTen = fakeData.slice(0,10)
    const [products,setProducts]= useState(firstTen)

    const cartBtnHandle = (products) =>{
        console.log("Added to cart", products);
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                <ol>
                    {
                        products.map(product => <Products
                             product={product}
                             cartBtnHandle={cartBtnHandle}>
                             </Products>)
                    }   
                </ol>
            </div>
            <div className="cart-container">
                <h1>cart portion</h1>
            </div>
            
        </div>
    );
};

export default Shop;