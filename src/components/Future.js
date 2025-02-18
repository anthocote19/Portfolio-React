import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode,FaNetworkWired, FaRobot } from "react-icons/fa";

const careerGoals = [
  {
    title: "Développeur Full-Stack",
    icon: <FaLaptopCode color="#61DAFB" />,
    description: "Créer des applications web robustes en combinant le développement frontend et backend.",
  },
  {
    title: "Administrateur Réseau",
    icon: <FaNetworkWired color="#28A745" />,
    description: "Assurer la gestion et la sécurité des réseaux informatiques au sein d'une ESN.",
  },
  {
    title: "Ingénieur en Intelligence Artificielle",
    icon: <FaRobot color="#F7DF1E" />,
    description: "Concevoir des systèmes intelligents capables de simuler des processus humains, comme la reconnaissance vocale ou la vision par ordinateur.",
  },
];

const FuturePage = () => {
  // Styles futuristes
  const containerStyle = {
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "#111", // Fond sombre
    borderRadius: "15px",
    boxShadow: "0 6px 30px rgba(0, 0, 0, 0.2)",
    color: "#fff", // Texte blanc
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#00e5ff", // Bleu néon
    textAlign: "center",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "3px",
  };

  const descriptionStyle = {
    fontSize: "2.2rem",
    textAlign: "center",
    color: "#b0b0b0", // Gris clair
    marginBottom: "40px",
    fontStyle: "italic",
    letterSpacing: "1px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
    gap: "30px",
    padding: "0 20px",
  };

  const cardStyle = {
    backgroundColor: "#1e1e1e",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 15px 45px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    overflow: "hidden",
    textAlign: "center",
    height: "100%",
    cursor: "pointer",
    position: "relative",
  };

  const iconContainerStyle = {
    fontSize: "4.5rem",
    marginBottom: "20px",
    color: "#444",
    transition: "color 0.3s ease, transform 0.3s ease",
  };

  const cardTitleStyle = {
    fontSize: "1.6rem",
    margin: "15px 0",
    color: "#00e5ff", // Titre bleu néon
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const cardDescriptionStyle = {
    fontSize: "1.3rem",
    color: "#bbb", // Gris clair
    lineHeight: "1.5",
    transition: "color 0.3s ease",
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        style={titleStyle}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ce que j'aspire à devenir plus tard...
      </motion.h1>

      <motion.p
        style={descriptionStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
      </motion.p>

      <div style={gridStyle}>
        {careerGoals.map((career, index) => (
          <motion.div
            key={index}
            style={cardStyle}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 60px rgba(0, 0, 0, 0.2)",
              transform: "translateY(-10px)", 
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <div
              style={iconContainerStyle}
              whileHover={{ color: "#00e5ff", transform: "rotate(15deg)" }} 
            >
              {career.icon}
            </div>
            <h3 style={cardTitleStyle}>{career.title}</h3>
            <p style={cardDescriptionStyle}>{career.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FuturePage;
