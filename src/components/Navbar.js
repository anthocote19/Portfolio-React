import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import "./NavbarStyles.css";

const Navbar = ({ theme, toggleTheme }) => {
    const [click, setClick] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.nav 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`header ${scrolling ? "scrolled" : ""}`}
        >
            <div className="logo-container">
                <NavLink to="/" className="logo">Portfolio</NavLink>
                <div className="theme-toggle" onClick={toggleTheme}>
                    <AnimatePresence mode="wait">
                        {theme === "light" ? (
                            <motion.div 
                                key="moon" 
                                initial={{ opacity: 0, scale: 0.8 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                exit={{ opacity: 0, scale: 0.8 }} 
                                transition={{ duration: 0.3 }}
                            >
                                <FaMoon size={22} />
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="sun" 
                                initial={{ opacity: 0, scale: 0.8 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                exit={{ opacity: 0, scale: 0.8 }} 
                                transition={{ duration: 0.3 }}
                            >
                                <FaSun size={22} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Menu de navigation */}
            <motion.ul 
                className={`nav-menu ${click ? "active" : ""}`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
            >
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <NavLink to="/" onClick={() => setClick(false)}>Home</NavLink>
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <NavLink to="/project" onClick={() => setClick(false)}>Projects</NavLink>
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <NavLink to="/about" onClick={() => setClick(false)}>About</NavLink>
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <NavLink to="/contact" onClick={() => setClick(false)}>Contact</NavLink>
                </motion.li>
                <motion.li 
                    className="auth-button-mobile" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.4 }}
                >
                    <NavLink to="/login" onClick={() => setClick(false)}>
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Se Connecter ?
                        </motion.button>
                    </NavLink>
                </motion.li>
            </motion.ul>
            <NavLink to="/login" className="auth-button-desktop">
                Se Connecter ?
            </NavLink>

            
            <div className="hamburger" onClick={() => setClick(!click)}>
                {click ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
        </motion.nav>
    );
};

export default Navbar;
