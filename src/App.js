import React from "react";
//IMPORT CSS
import "./App.css";
import "./styles/PageStyles.css";
//IMPORT COMPONENTS
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
//IMPORT PAGES
import Home from "./pages/Home";
import Gynecology from "./pages/Gynecology";
import VaginalRejuvenation from "./pages/VaginalRejuvenation";
//IMPORT ROUTER
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gynecology/" element={<Gynecology />} />
        <Route
          path="/vaginal-rejuventation/"
          element={<VaginalRejuvenation />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
