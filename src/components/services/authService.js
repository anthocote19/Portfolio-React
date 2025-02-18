import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Change avec ton backend

// Enregistrement d'un nouvel utilisateur
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

// Connexion d'un utilisateur
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

// Déconnexion d'un utilisateur
export const logout = () => {
  localStorage.removeItem("token");
};

// Récupérer l'utilisateur actuel
export const getCurrentUser = () => {
  return localStorage.getItem("token");
};
