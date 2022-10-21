import Card from "./Card";
import "./cards.css";
import { useSelector } from "react-redux";
const Cards = () => {
    const category = useSelector((state) => state.category.value);
    const categoryIndex = useSelector((state) => state.category.categoryIndex);
    return (
        <div className='cards-container'>
            {category.map((meal, index) => {
                return (
                    <Card
                        details={meal}
                        key={index}
                        meal={index}
                        categoryIndex={categoryIndex}
                    />
                );
            })}
        </div>
    );
};

export default Cards;
