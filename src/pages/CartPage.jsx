import React from "react";
import Cart from "../components/cart/Cart";
import { motion } from "framer-motion";
const CartPage = () => {
    return (
        <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0, transition: { duration: 0.5 } }}
            exit={{ y: 0, transition: { duration: 0 } }}>
            <Cart />
        </motion.div>
    );
};

export default CartPage;
