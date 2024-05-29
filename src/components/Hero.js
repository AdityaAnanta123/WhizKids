import React from 'react';
import './Hero.css';
import heroImage from '../img/Group 28.png'; // Path yang benar ke gambar hero
import logo from '../img/Intersect.png'; // Path yang benar ke logo

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>
                        Panduan <span style={{ color: '#00BFFE' }}>Parenting Modern</span> untuk Ibu dalam Menjalani <span style={{ color: '#00BFFE' }}>Peran Baru</span>
                    </h1>
                    <p>Temukan kepercayaan dan kenyamanan dalam perjalanan kehamilan dan perawatan anak dengan aplikasi kami. Dapatkan informasi jadwal prenatal, <span style={{ color: '#00BFFE' }}>tips kesehatan</span>, dan dukungan komunitas dalam genggaman Anda. Apakah anda siap? <span style={{ color: '#00BFFE' }}>Konsultasikan sekarang</span>.</p>
                    <button className="consultation-button">
                        Konsultasikan Sekarang
                        <img src={logo} alt="Logo" className="button-logo" />
                    </button>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="Dokter" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
