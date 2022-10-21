import "./card.css";
import { useSelector, useDispatch } from "react-redux";
import { ordered, disordered, changeQuantity } from "./foodSlice";
import { addToCart, removeFromCart } from "../cart/cartSlice";
import coins from "../../images/coins.svg";
const Card = ({ details, categoryIndex, meal }) => {
    const { img, title, price } = details;
    const isOrdered = useSelector(
        (state) => state.food[categoryIndex][meal].ordered
    );
    const quantity = useSelector(
        (state) => state.food[categoryIndex][meal].quantity
    );
    const dispatch = useDispatch();
    const handleCartAdding = () => {
        dispatch(ordered({ category: categoryIndex, meal: meal }));
        dispatch(addToCart({ category: categoryIndex, meal: meal }));
    };
    const handleCartRemoving = () => {
        dispatch(disordered({ category: categoryIndex, meal: meal }));
        dispatch(
            removeFromCart({
                category: categoryIndex,
                meal: meal,
            })
        );
    };
    return (
        <div className='card-container'>
            <img src={img} alt={title} className='card-img' />
            <h1 className='card-title'>{title}</h1>
            <h3 className='card-price'>
                <img src={coins} alt='' /> $ {price}
            </h3>
            {isOrdered ? (
                <div className='quantity-btns-container'>
                    <button
                        className='quantity-btn'
                        onClick={() => {
                            dispatch(
                                changeQuantity({
                                    category: categoryIndex,
                                    meal: meal,
                                    number: -1,
                                })
                            );
                            if (quantity <= 1) { 
                                handleCartRemoving();
                            }
                        }}>
                        -
                    </button>
                    <span className='quantity-counter'>{quantity}</span>
                    <button
                        className='quantity-btn'
                        onClick={() =>
                            dispatch(
                                changeQuantity({
                                    category: categoryIndex,
                                    meal: meal,
                                    number: +1,
                                })
                            )
                        }>
                        +
                    </button>
                </div>
            ) : (
                <button className='add-btn' onClick={handleCartAdding}>
                    Add to cart
                </button>
            )}
        </div>
    );
};

export default Card;
