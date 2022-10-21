import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import { AnimatePresence } from "framer-motion";
const AnimateRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<HomePage />} />
                <Route path='home' element={<HomePage />} />
                <Route path='menu' element={<MenuPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='cart' element={<CartPage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimateRoutes;
