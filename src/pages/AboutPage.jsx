import { motion } from "framer-motion";
import About from "../components/about/About";
import Creator from "../components/creator/Creator";
const AboutPage = () => {
    return (
        <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0, transition: { duration: 0.5 } }}
            exit={{ x: 0, transition: { duration: 0 } }}>
            <About />
            <Creator/>

        </motion.div>
    );
};

export default AboutPage;
