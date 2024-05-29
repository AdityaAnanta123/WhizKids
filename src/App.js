// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features'
import Service from './components/Service'
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import DoctorSection from './components/DoctorSection';
import ContactUsSection from './components/ContactUsSection';


function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Features />
            <Service />
            <AboutSection />
            <Testimonials />
            <DoctorSection />
            <ContactUsSection />
            <Footer />
        </div>
    );
}

export default App;
