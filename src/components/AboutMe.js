import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiJavascript, SiOpenai, SiReact, SiTesla, SiGooglecloud, SiAdobe } from "react-icons/si";
import { motion } from "framer-motion";
import "./AboutMeStyles.css";

const AboutMe = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(localStorage.getItem("theme") || "light");
      document.documentElement.className = localStorage.getItem("theme") || "light";
    };

    window.addEventListener("storage", handleThemeChange);
    handleThemeChange();
    return () => window.removeEventListener("storage", handleThemeChange);
  }, []);

  return (
    <motion.div
      className={`about-container ${theme}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="about-content"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="glitch"
          data-text="Anthony Cote"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Anthony Cote
        </motion.h1>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
         Développeur passionné par l’innovation, l’IA et les expériences immersives.
        </motion.p>

        <motion.div
          className="cards"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3, ease: "easeOut" },
            },
          }}
        >
          {[
            { icon: <SiJavascript />, title: "Développement", text: "Conception d’applications modernes et performantes." },
            { icon: <SiOpenai />, title: "IA & Automation", text: "Exploration du Machine Learning et des algorithmes intelligents." },
            { icon: <SiReact />, title: "Full-Stack", text: "Maîtrise du Front-End & Back-End pour des solutions complètes." },
            { icon: <SiTesla />, title: "Innovation", text: "Expérimentation des technologies futuristes et immersives." },
            { icon: <SiGooglecloud />, title: "Connectivité", text: "Intégration d’API et de solutions cloud avancées." },
            { icon: <SiAdobe />, title: "Design & UX", text: "Création d’interfaces captivantes et intuitives." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="card"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="icon">{item.icon}</div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="https://github.com/anthocote19"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <FaGithub className="icon" /> Cliquez ICI pour voir Mon GitHub !
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
