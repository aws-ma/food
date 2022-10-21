import "./home.css";
import mainDish from "../../images/main-dish.png";
import frenchFries from "../../images/gif/french-fries.gif";
import truckDelivery from "../../images/gif/truck-delivery.gif";
import star from "../../images/gif/star.gif";
import { Link } from "react-router-dom";
import bgForMob from "../../images/bg-for-mobile.png";
const Home = () => {
    const stamps = [
        { text: "Top qualit", img: frenchFries },
        { text: "Fast delivery", img: truckDelivery },
        { text: "Five stars", img: star },
    ];
    return (
        <div className='home-container'>
            <div className='left-section'>
                <h2>
                    <span>Hungry?</span>
                    <br />
                    You are in the <br />
                    right Pleace.
                </h2>
                <h3>
                    Treat yourself tonight to one
                    <br /> of our delicious takeaways.
                </h3>
                <div className='stamps-container'>
                    {stamps.map((stamp, index) => {
                        return (
                            <div className='circle' key={index}>
                                <div className='gif-container'>
                                    <img src={stamp.img} alt='' />
                                </div>
                                <div className='text'>{stamp.text}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='right-section'>
                <img src={mainDish} alt='' className='main-img' />
            </div>
            <div className='order-now-mobile'>
                <Link className='order-now-btn' to='/menu'>
                    Order Now
                </Link>
                <img src={bgForMob} alt='' />
            </div>
        </div>
    );
};

export default Home;
