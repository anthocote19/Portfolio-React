import React from 'react'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js"; 
import HeroImg2 from '../components/HeroImg2.js';
import Form from "../components/Form.js";
import Chat from '../components/Chat.js';
const Contact = () => {
     return <div>
        <Navbar />
        <HeroImg2 heading ="Contactez moi !" text ="Envoyez moi un message via mon formulaire !" />
        <br></br>
        <br></br>
        <br></br> 
        <Form />
        <br></br>
        <br></br>
        <br></br>
        <Chat />
        <Footer /> 
     </div>
         
     
 }
 
 export default Contact;