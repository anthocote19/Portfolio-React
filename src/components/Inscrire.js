import React, { useState } from "react";
import "./InscrireStyles.css";  // Assure-toi que ton fichier CSS est bien importé

const Inscrire = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            // Gère l'inscription ici
            console.log("Inscription réussie");
        } else {
            console.log("Les mots de passe ne correspondent pas");
        }
    };

    return (
        <div className="inscrire-container">
            <div className="inscrire-box">
                <h2>Inscription</h2>
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
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Confirmer le mot de passe"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="inscrire-btn">S'inscrire</button>
                </form>
            </div>
        </div>
    );
};

export default Inscrire;
