import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./InfosAPIStyles.css";

const InfosAPI = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        const data = await response.json();
        setArticles(data.articles.slice(3, 6));
      } catch (error) {
        console.error("Erreur lors de la récupération des actualités :", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="infos-api-container">
      <motion.h2
        className="title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Voici en direct les dernières actualités !
      </motion.h2>
      <div className="articles">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="article"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={article.urlToImage} alt={article.title} />
            <div className="content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Lire plus
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfosAPI;
