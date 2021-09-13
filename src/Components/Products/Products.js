import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const {name, img,seller,price,stock} = props.product;
    //console.log(props)
    return (
        <div className="products">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h3>{name}</h3>
                <p><small>by: {seller}</small></p>
                <p><small>Only {stock} avialable. Order now</small></p>
                <p>Price: $<b>{price}</b></p>

                <button className="cart-btn" 
                onClick={()=>props.cartBtnHandle(props.product)}><FontAwesomeIcon icon={faShoppingCart } />Add to cart</button>
            </div>
            
        </div>
    );
};

export default Products;