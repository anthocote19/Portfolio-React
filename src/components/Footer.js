import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./FooterStyles.css";

const footerVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.8, ease: "easeInOut", staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
};

const Footer = () => {
  return (
    <motion.div 
      className="footer"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="footer-glow"></div>
      <div className="footer-container">
        <motion.div className="left" variants={itemVariants}>
          <div className="info-item">
            <FaHome size={20} className="icon" />
            <p>Lyon, France</p>
          </div>
          <br />
          <div className="info-item">
            <FaPhone size={20} className="icon" />
            <p>+33 6 51 07 30 68</p>
          </div>
          <br />
          <div className="info-item">
            <FaMailBulk size={20} className="icon" />
            <p>pro.anthonycote@gmail.com</p>
          </div>
        </motion.div>

        <motion.div className="right" variants={itemVariants}>
          <h4>À Propos de moi</h4>
          <p>
            Je suis développeur passionné par la création d'applications web, le développement logiciel et l'intelligence
            artificielle. J'aime relever des défis techniques, apprendre de nouvelles technologies et partager mes connaissances avec la communauté.
          </p>
          <motion.div className="social" variants={itemVariants}>
            <a href="https://www.instagram.com/cte_antho/?next=%2F" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/anthony-cote-25390433a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} className="social-icon" />
            </a>
            <a href="https://github.com/anthocote19" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} className="social-icon" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="footer-bottom" variants={itemVariants}>
        <p>© {new Date().getFullYear()} Anthony Cote. Tous droits réservés.</p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
