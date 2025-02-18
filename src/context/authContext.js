import { createContext, useState, useEffect, useContext } from "react";
import { loginUser, registerUser } from "../api/authApi.js";

// Crée le contexte d'authentification
export const AuthContext = createContext();

// Fournisseur du contexte d'authentification
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser)); // Récupère l'utilisateur stocké dans le localStorage
    }, []);

    // Fonction de connexion
    const login = async (userData) => {
        const data = await loginUser(userData);
        if (data.token) {
            localStorage.setItem("user", JSON.stringify(data)); // Stocke l'utilisateur dans le localStorage
            setUser(data);
        }
    };

    // Fonction d'inscription
    const register = async (userData) => {
        return await registerUser(userData);
    };

    // Fonction de déconnexion
    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personnalisé pour accéder au contexte d'authentification
export const useAuth = () => {
    return useContext(AuthContext);
};
