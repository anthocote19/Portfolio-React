import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./PricingCardStyles.css";

const PricingCard = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(localStorage.getItem("theme") || "dark");
    };

    window.addEventListener("storage", handleThemeChange);
    return () => window.removeEventListener("storage", handleThemeChange);
  }, []);

  const profiles = [
    {
      name: "GitHub",
      icon: <FaGithub size={60} />,
      description: "Découvrez mes projets open-source et mon code.",
      url: "https://github.com/anthocote19",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={60} />,
      description: "Explorez mon parcours professionnel et mes compétences.",
      url: "https://www.linkedin.com/in/anthony-cote-25390433a/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={60} />,
      description: "Découvrez un peu plus de mon univers visuel et personnel.",
      url: "https://www.instagram.com/cte_antho/",
    },
  ];

  return (
    <motion.div
      className={`showcase futuristic ${theme}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h2
        className="title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
         Mes Réseaux !
      </motion.h2>

      <div className="profile-container">
        {profiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`profile-card ${theme}`}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {profile.icon}
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingCard;
