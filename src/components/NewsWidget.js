import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import "./NewsWidgetStyles.css";

const languages = [
  { name: "JavaScript", popularity: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", popularity: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", popularity: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C#", popularity: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "TypeScript", popularity: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "C++", popularity: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Go", popularity: 65, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "C", popularity: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.1, type: "spring", stiffness: 100 }
  })
};

const NewsWidget = () => {
  return (
    <motion.div
      className="news-widget-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="news-widget-title"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Trophy className="news-widget-icon" /> Mon Top Langages de Programmation !
      </motion.h2>
      <div className="news-widget-list">
        {languages.map((lang, index) => (
          <motion.div
            key={lang.name}
            className="news-widget-item"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <div className="news-widget-card">
              <div className="news-widget-card-header">
                <img src={lang.logo} alt={lang.name} className="news-widget-lang-logo" />
                <span className="news-widget-lang">{lang.name}</span>
                <span className="news-widget-popularity">{lang.popularity}%</span>
              </div>
              <div
                className="news-widget-progress"
                style={{ width: `${lang.popularity}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NewsWidget;

