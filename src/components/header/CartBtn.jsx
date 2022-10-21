import {NavLink} from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
const CartBtn = () => {
    const counter = useSelector((state) => state.cart.value.length);
    return (
        <NavLink className='icon-btn' to='/cart'>
            <BsCart4 />
            <span className='cart-badge'>{counter}</span>
        </NavLink>
    );
};

export default CartBtn;
