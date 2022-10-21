import "./App.css";
import Header from "./components/header/Header";
import AnimateRoutes from "./components/AnimateRoutes";
import CartBtn from "./components/header/CartBtn";
const App = () => {
    return (
        <div className='app-container'>
            <Header>
                <CartBtn />
            </Header>
            <AnimateRoutes />
        </div>
    );
};

export default App;
