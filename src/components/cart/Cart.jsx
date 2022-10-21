import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../cards/Card";
import "./cart.css";
import emptyCart from "../../images/gif/empty-cart.svg";
const Cart = () => {
    const food = useSelector((state) => state.food);
    const cartItems = useSelector((state) => state.cart.value);
    return (
        <div className='cart-container'>
            {cartItems.length > 0 ? (
                cartItems.map((cartItem, index) => {
                    const item = food[cartItem.category][cartItem.meal];
                    return (
                        <Card
                            details={item}
                            key={index}
                            meal={cartItem.meal}
                            categoryIndex={cartItem.category}
                        />
                    );
                })
            ) : (
                <div className='empty-cart-container'>
                    <img src={emptyCart} alt='' />
                    <span>Oops! Your cart is empty!</span>
                </div>
            )}
        </div>
    );
};

export default Cart;
