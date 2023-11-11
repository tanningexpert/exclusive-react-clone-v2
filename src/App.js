import React from "react";
//IMPORT CSS
import "./App.css";
import "./styles/PageStyles.css";
//IMPORT COMPONENTS
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
//IMPORT MAIN PAGES
import Home from "./pages/Home";
import Gynecology from "./pages/Gynecology";
import VaginalRejuvenation from "./pages/VaginalRejuvenation";
import Aesthetics from "./pages/Aesthetics";
import PatientResources from "./pages/PatientResources";
import ContactUs from "./pages/ContactUs";
//IMPORT SUB PAGES
import AppointmentRequest from "./pages/AppointmentRequest";
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
        <Route path="/aesthetics/" element={<Aesthetics />} />
        <Route path="/patient-resources/" element={<PatientResources />} />
        <Route path="/contact-us/" element={<ContactUs />} />
        <Route path="/appointment-request/" element={<AppointmentRequest />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
