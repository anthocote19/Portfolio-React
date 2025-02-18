import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext.js'; // Import du hook useAuth

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // Utilise useAuth pour obtenir l'utilisateur

  // Si l'utilisateur n'est pas connecté, redirige vers la page de login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Affiche les enfants si l'utilisateur est connecté
  return children;
};

export default PrivateRoute;
