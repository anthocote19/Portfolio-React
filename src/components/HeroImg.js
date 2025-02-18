import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../assets/image.png";
import { Link } from "react-router-dom";
const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" 
                src={IntroImg} alt ="IntroImg" />
            </div>
            <div className="content">
                <p>Bonjour, je suis Anthony Cote</p>
                <h1>Développeur web</h1>
                <div>
                    <br></br>
                    <Link to="/project" 
                    className="btn">Projets</Link>
                    <Link to="/contact" 
                    className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg;