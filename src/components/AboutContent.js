import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import React1 from "../assets/Anthony COTE.JPG";
import Cap from "../assets/cap.jpg";
import { FaRocket } from "react-icons/fa"; 

const AboutContent = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <h1 className="futuristic-title">Découvrez qui je suis</h1>
        <p className="futuristic-text">
          Je suis Anthony Cote, un développeur passionné par l'innovation et la création de solutions digitales avant-gardistes.
          <br /> J'aime résoudre des problèmes complexes, repousser les limites de la technologie et partager mes découvertes.
        </p>
        <Link to="/contact">
          <motion.button
            className="btn futuristic-btn"
            whileHover={{ scale: 1.1, backgroundColor: "#1f3c63", boxShadow: "0 4px 20px rgba(0, 255, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            Me contacter ? <FaRocket style={{ marginLeft: "8px"}} />
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        className="right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <div className="img-container">
          <motion.div
            className="img-stack top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          >
            <img src={React1} className="img" alt="Anthony Cote" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="cv-section futuristic"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      >
        <h2 className="futuristic-subheading">Mon Parcours Personnel</h2>
        <div className="cv-content">
          {[ 
            { 
              icon: <img src={Cap} alt="Capgemini" className="capgemini-icon" />, 
              title: "Expérience chez Capgemini", 
              text: "Découverte des métiers du développement logiciel et maîtrise de plusieurs langages de programmation." 
            },
            { 
              icon: <img src="https://cdn-icons-png.flaticon.com/512/3661/3661341.png" alt="Infirmière" className="nurse-icon" />, 
              title: "Expérience dans le domaine médical", 
              text: "Apprentissage des soins médicaux à domicile et gestion des tâches administratives." 
            }
          ].map((item, index) => (
            <motion.div
              className="cv-card futuristic-card"
              key={index}
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px rgba(0, 255, 255, 0.8)" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 + index * 0.2 }}
            >
              <div className="cv-icon futuristic-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
