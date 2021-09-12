import React from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import './Shop.css'

const Shop = () => {
    const firstTen = fakeData.slice(0,10)
    console.log(firstTen);
    const [products,setProducts]= useState(firstTen)
    return (
        <div className="shop-container">
            <div className="products-container">
                <ol>
                    {
                        products.map(product => <li>{product.name}</li>)
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