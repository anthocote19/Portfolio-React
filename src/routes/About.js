import React from 'react'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import HeroImg2 from '../components/HeroImg2.js';
import AboutContent from '../components/AboutContent.js';
import CV from "../components/CV.js";
import NewsWidget from '../components/NewsWidget.js';
import Chat from '../components/Chat.js';
 const About = () => {
     return <div>
        <Navbar />
        <HeroImg2 heading="A Propos de moi !" text="Actuellement étudiant à SUPINFO Lyon en première année de bachelor d'informatique." />
        <AboutContent />
        <NewsWidget />
        <br></br>
        <br></br>
        <CV />
        <br></br>
        <Chat />
        <Footer />
     </div>
     
 }
 
 export default About;