import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./LangStyles.css";
import { FaPython, FaCuttlefish, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiLua } from "react-icons/si";

const categories = {
  "Développement Web :": [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" />, link: "https://fr.wikipedia.org/wiki/Hypertext_Markup_Language", description: "Langage de structuration des pages web." },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" />, link: "https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade", description: "Langage de style pour la mise en page web." },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" />, link: "https://fr.wikipedia.org/wiki/JavaScript", description: "Langage dynamique pour le web." },
    { name: "React JS", icon: <FaReact color="#61DAFB" />, link: "https://fr.wikipedia.org/wiki/React", description: "Bibliothèque JavaScript pour les interfaces utilisateur." },
  ],
  "Développement d'Applications :": [
    { name: "Python", icon: <FaPython color="#FFD43B" />, link: "https://fr.wikipedia.org/wiki/Python_(langage)", description: "Langage polyvalent et puissant." },
    { name: "C", icon: <FaCuttlefish color="#A8B9CC" />, link: "https://fr.wikipedia.org/wiki/C_(langage)", description: "Langage bas niveau, rapide et efficace." },
    { name: "SQL", icon: <FaDatabase color="#4479A1" />, link: "https://fr.wikipedia.org/wiki/Structured_Query_Language", description: "Langage de manipulation des bases de données." },
  ],
  "Développement de Jeux Vidéos :": [
    { name: "LUA", icon: <SiLua color="#2C2D72" />, link: "https://fr.wikipedia.org/wiki/Lua_(langage)", description: "Langage léger pour les jeux et scripts." },
    { name: "Pygame", icon: <FaPython color="#FFD43B" />, link: "https://fr.wikipedia.org/wiki/Pygame", description: "Bibliothèque Python pour le développement de jeux vidéo." },
    { name: "C#", icon: <FaCuttlefish color="#68217A" />, link: "https://fr.wikipedia.org/wiki/C%23", description: "Langage de programmation orienté objet, utilisé dans le développement de jeux avec Unity." },
  ]
};

const Lang = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="title"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Langages Maitrisés
      </motion.h1>

      {Object.entries(categories).map(([category, languages], catIndex) => (
        <div key={catIndex} className="category">
          <motion.h2
            className="category-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: catIndex * 0.2 }}
          >
            {category}
          </motion.h2>

          <div className="grid">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                className="card"
                style={{
                  transform: `perspective(800px) rotateY(${(mousePos.x / window.innerWidth - 0.5) * 15}deg) rotateX(${-(mousePos.y / window.innerHeight - 0.5) * 15}deg)`,
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="neon-border"></div>
                <a href={lang.link} target="_blank" rel="noopener noreferrer" className="icon">
                  {lang.icon}
                </a>
                <p className="name">
                  <a href={lang.link} target="_blank" rel="noopener noreferrer">{lang.name}</a>
                </p>
                <p className="description">{lang.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Lang;
