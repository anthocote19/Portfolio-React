import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext.js";
import { useNavigate } from "react-router-dom";  // Import de useNavigate
import "./LoginStyles.css";  // Assure-toi que ce fichier CSS est bien importé

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();  // Déclaration de useNavigate pour la redirection

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login({ email, password });
    };

    const handleRedirect = () => {
        navigate("/inscrire");  // Redirige vers la page d'inscription
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Connexion</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">Connexion</button>
                </form>
                <p className="toggle-text">
                    Pas encore de compte ? <span onClick={handleRedirect}>Inscrivez-vous</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
