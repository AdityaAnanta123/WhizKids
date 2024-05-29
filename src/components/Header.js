// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../img/Group 27.png';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="WhizKids Logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#beranda" className="beranda">Beranda</a></li>
                        <li><a href="#konsultasi">Konsultasi</a></li>
                        <li><a href="#komunitas">Komunitas</a></li>
                        <li><a href="#artikel-jurnal">Artikel & Jurnal</a></li>
                        <li><a href="#hubungi-kami">Hubungi Kami</a></li>
                    </ul>
                </nav>
                <div className="login-button">
                    <button>Masuk</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
