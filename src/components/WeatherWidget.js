import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaThermometerHalf, FaCloud, FaSearch, FaRedo } from "react-icons/fa";
import { motion } from "framer-motion";  // Importation de Framer Motion
import "./WeatherWidgetStyles.css";

console.log("API Key:", process.env.REACT_APP_WEATHER_API_KEY);

const WeatherWidget = () => {
  const [city, setCity] = useState(""); 
  const [searchCity, setSearchCity] = useState(null); 
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [announcement, setAnnouncement] = useState(false); 
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    if (!searchCity) return; 

    const controller = new AbortController();

    const fetchWeather = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(searchCity)}&units=metric&appid=${API_KEY}&lang=fr`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Mauvaise saisie de la ville, veuillez saisir un nouveau nom de ville.");
          } else {
            throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
          }
        }
        

        const data = await response.json();
        if (!data.main || !data.weather) {
          throw new Error("Données météo incomplètes reçues.");
        }

        setWeather(data);
        setAnnouncement(true);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();

    return () => controller.abort();
  }, [searchCity, API_KEY]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() === "") return; 
    setSearchCity(city);
    setCity("");
    setWeather(null); 
    setAnnouncement(false); 
  };

  const handleReset = () => {
    setSearchCity(null); 
    setWeather(null); 
    setCity(""); 
    setAnnouncement(false); 
  };

  return (
    <motion.div 
      className="weather-container"
      initial={{ opacity: 0 }}    
      animate={{ opacity: 1 }}    
      transition={{ duration: 2 }} 
    >
      <div className="weather-widget">
        <h2>Cherchez une ville pour la météo...</h2>
        <br />
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Entrez une ville..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            <FaSearch className="search-icon" />
          </button>
        </form>

        {isLoading ? (
          <p>⏳ Chargement des informations...</p>
        ) : error ? (
          <p className="error-text">⚠️ {error}</p>
        ) : (
          weather && (
            <div className="weather-info">
              <p>
                <FaMapMarkerAlt className="weather-icon-small" />  
                Ville : <span className="neon-text">{weather.name}</span>
              </p>
              <p>
                <FaThermometerHalf className="weather-icon-small" />  
                Température : <span className="neon-text">{weather.main.temp}°C</span>
              </p>
              <p>
                <FaCloud className="weather-icon-small" />  
                Condition : <span className="neon-text">{weather.weather[0].description}</span>
              </p>
              
              <img 
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                alt={weather.weather[0].description} 
                className="weather-icon"
              />
            </div>
          )
        )}

        {announcement && (
          <p className="announcement-text">
            STOP ! Si tu as le temps de chercher la météo de ta ville, tu as le temps de consulter l'entièreté de mon site :) !
          </p>
        )}

        {weather && (
          <button className="reset-button" onClick={handleReset}>
            <FaRedo className="reset-icon" /> Réinitialiser
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default WeatherWidget;
