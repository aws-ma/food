import { motion } from "framer-motion";
import Creator from "../components/creator/Creator";
import Home from "../components/home/Home";
const HomePage = () => {
    return (
        <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0, transition: { duration: 0.5 } }}
            exit={{ x: 0, transition: { duration: 0 } }}>
            <Home />
            <Creator/>
        </motion.div>
    );
};

export default HomePage;
