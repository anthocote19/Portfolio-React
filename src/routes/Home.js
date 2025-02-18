import React from 'react'
import Navbar from "../components/Navbar.js";
import HeroImg from "../components/HeroImg.js";
import Footer from "../components/Footer.js";
import Work from "../components/Work.js";
import AboutMe from "../components/AboutMe.js";
import Lang from "../components/Lang.js";
import WeatherWidget from '../components/WeatherWidget.js';
import Chat from '../components/Chat.js';


const Home = () => {
    return <div>
        <Navbar/>
        <HeroImg />
        <br></br>
        <br></br>
        <WeatherWidget />
        <Work />
        <AboutMe />
        <br></br>
        <br></br>
        <br></br> 
        <br></br>
        <Lang />
        <br></br>
        <br></br>
        <Chat />
        <Footer />
    </div>
    
}

export default Home;