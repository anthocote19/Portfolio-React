import "./FormStyles.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Form = () => {
  const [formData, setFormData] = useState({
    access_key: "f3895bcf-eed9-4f45-b0ff-d2d0664cd662",
    nom: "",
    email: "",
    telephone: "",
    objet: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.nom || !formData.email || !formData.message) {
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Email invalide.");
      return false;
    }
    if (formData.telephone && !/^\d{10}$/.test(formData.telephone)) {
      setErrorMessage("Le numéro de téléphone doit contenir uniquement 10 chiffres.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("Message envoyé avec succès !");
        setFormData({
          access_key: "f3895bcf-eed9-4f45-b0ff-d2d0664cd662",
          nom: "",
          email: "",
          telephone: "",
          objet: "",
          message: "",
        });
      } else {
        setErrorMessage("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      setErrorMessage("Problème de connexion.");
      console.error("Erreur:", error);
    }

    setLoading(false);
  };

  return (
    <motion.div
      className="form-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="form-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Contactez-moi !
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="form-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        {["nom", "email", "telephone", "objet", "message"].map((field, index) => (
          <motion.div
            key={field}
            className="form-group"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
          >
            <label htmlFor={field}>
              {field === "nom" && "Votre nom"}
              {field === "email" && "Votre adresse email"}
              {field === "telephone" && "Votre numéro de téléphone"}
              {field === "objet" && "Objet de votre message"}
              {field === "message" && "Votre message"}
            </label>
            {field === "message" ? (
              <motion.textarea
                name={field}
                id={field}
                rows="5"
                value={formData[field]}
                onChange={handleChange}
                whileFocus={{ scale: 1.02, boxShadow: "0px 0px 10px #00f2ff" }}
              />
            ) : field === "telephone" ? (
              <motion.input
                type="tel"
                name={field}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                pattern="[0-9]{10}"  // Modèle de numéro de téléphone à 10 chiffres
                inputMode="numeric"   // Affiche un clavier numérique sur les appareils mobiles
                placeholder="Exemple : 0123456789"
                whileFocus={{ scale: 1.02, boxShadow: "0px 0px 10px #00f2ff" }}
              />
            ) : (
              <motion.input
                type={field === "email" ? "email" : "text"}
                name={field}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                whileFocus={{ scale: 1.02, boxShadow: "0px 0px 10px #00f2ff" }}
              />
            )}
          </motion.div>
        ))}

        {successMessage && (
          <motion.p className="success-message" animate={{ opacity: 1 }}>
            {successMessage}
          </motion.p>
        )}

        {errorMessage && (
          <motion.p className="error-message" animate={{ opacity: 1 }}>
            {errorMessage}
          </motion.p>
        )}

        <motion.button
          type="submit"
          className="btn"
          whileHover={{ scale: 1.1, backgroundColor: "#00f2ff", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          disabled={loading}
        >
          {loading ? "Envoi..." : "Envoyer"}
        </motion.button>
      </motion.form>

      <motion.div
        className="social-links"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
      >
        <a href="mailto:antho.cote69@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} />
        </a>
        <a href="https://www.linkedin.com/in/anthony-cote-25390433a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/anthocote19" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.instagram.com/cte_antho/?next=%2F" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Form;
