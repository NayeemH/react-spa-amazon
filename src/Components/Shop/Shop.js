import React from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const firstTen = fakeData.slice(0,10)
    const [products,setProducts]= useState(firstTen)
    //cart item
    const [cart, setCart] = useState([])



    const cartBtnHandle = (products) =>{
        //console.log("Added to cart", products);
        const cartItems = [...cart, products]
        setCart(cartItems)
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
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;