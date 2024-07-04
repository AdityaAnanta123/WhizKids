import React, { useState } from 'react';
import './Header.css';
import logo from '../img/Group 27.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="WhizKids Logo" />
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    &#9776;
                </div>
                <nav className={isMenuOpen ? 'open' : ''}>
                    <ul>
                        <li><a href="#beranda" className="beranda">Beranda</a></li>
                        <li><a href="#konsultasi">Konsultasi</a></li>
                        <li><a href="#komunitas">Komunitas</a></li>
                        <li><a href="#artikel-jurnal">Artikel & Jurnal</a></li>
                        <li><a href="#hubungi-kami">Hubungi Kami</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
