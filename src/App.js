import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Project from "./routes/Project.js";
import Contact from "./routes/Contact.js";
import Login from "./components/Login.js";
import Inscrire from "./components/Inscrire.js";  
import PrivateRoute from "./components/PrivateRoute.js";
import { AuthProvider } from "./context/authContext.js";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inscription" element={<Inscrire />} /> 
        <Route path="/project" element={<PrivateRoute />}>
          <Route path="" element={<Project />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
