import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCategory } from "./categoriesSlice";
import "./categories.css";
import sandwich from "../../images/categories/sandwich.svg";
import pizza from "../../images/categories/pizza.svg";
import barbecue from "../../images/categories/barbecue.svg";
import salad from "../../images/categories/salad.svg";
import drink from "../../images/categories/drink.svg";
const categoriesArry = [
    { name: "sandwich", img: sandwich },
    { name: "pizza", img: pizza },
    { name: "barbecue", img: barbecue },
    { name: "salad", img: salad },
    { name: "drink", img: drink },
];
const Categories = () => {
    const activeBtn = useRef(0);
    const btnsList = useRef(null);
    const dispatch = useDispatch();
    const food = useSelector((state) => state.food);

    const handleActiveBtn = (event, index) => {
        btnsList.current.children[activeBtn.current].classList.remove(
            "active-btn"
        );
        btnsList.current.children[event.currentTarget.id].classList.add(
            "active-btn"
        );
        activeBtn.current = event.currentTarget.id;
        dispatch(changeCategory({ value: food[index], categoryIndex: index }));
    };
    useEffect(() => {
        btnsList.current.children[activeBtn.current].classList.add(
            "active-btn"
        );
        dispatch(
            changeCategory({
                value: food[activeBtn.current],
                categoryIndex: activeBtn.current,
            })
        );
    }, []);
    return (
        <ul ref={btnsList} className='categories-container'>
            {categoriesArry.map((category, index) => {
                return (
                    <li
                        className='category-btn'
                        onClick={(event) => handleActiveBtn(event, index)}
                        key={index}
                        id={index}>
                        <img src={category.img} />
                        <span className='category-name'>{category.name}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export default Categories;
