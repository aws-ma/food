import "./header.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import { CgMenuHotdog } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
const Header = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = (event) => {
        if (event.target.nodeName === "A") {
            setOpenMenu(false);
        }
    };
    return (
        <div className='header-container'>
            <div className='logo'>
                <img src={logo} alt='logo' className='logo' />
            </div>
            <div
                className={`menu ${openMenu ? "open" : ""}`}
                onClick={handleMenu}>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/menu'>Menu</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            {children}
            <div
                className='mobile-menu-icon'
                onClick={() => setOpenMenu((s) => !s)}>
                {openMenu ? (
                    <RiCloseFill className='hamburger' />
                ) : (
                    <CgMenuHotdog className='hamburger' />
                )}
            </div>
        </div>
    );
};

export default Header;
