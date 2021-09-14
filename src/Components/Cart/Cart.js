import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    console.log(cart)

    let totalPrice= 0;
    for(let i=0;i<cart.length;i++){
        totalPrice = totalPrice + cart[i].price
    }

    let shippingPrice= 0;
    for(let i=0;i<cart.length;i++){
        shippingPrice = shippingPrice + cart[i].shipping
    }


    return (
        <div>
            <h3 className="order-summery">Order Summery</h3>
            <h4>Items ordered: {cart.length}</h4>
            <h4>Price: {totalPrice}</h4>
            <h5>Shipping Cost: {shippingPrice}</h5>
            <h3>Total Payable: {totalPrice+shippingPrice}</h3>
            {/* fix korba total payable ammount */}
        </div>
    );
};

export default Cart;