import React from "react";
import Cards from "../components/cards/Cards";
import Categories from "../components/categories/Categories";
import { motion } from "framer-motion";
const MenuPage = () => {
    return (
        <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0, transition: { duration: 0.5 } }}
        exit={{ x: 0, transition: { duration: 0 } }}>
            <Categories />
            <Cards />
        </motion.div>
    );
};

export default MenuPage;
