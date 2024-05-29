// src/components/Footer.js
import React from 'react';
import './Footer.css';
import logo1 from '../img/logoatasbawah.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo1} alt="WhizKids Logo" />
          <p>Temukan Kebahagiaan Sejati dalam Kehidupan Berkeluarga</p>
          <div className="footer-social-media">
            <a href="https://www.facebook.com" aria-label="Facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-sections">
            <div className="footer-section">
              <h4>Konsultasi</h4>
              <ul>
                <li><a href="/jadwal-dokter">Jadwal Dokter</a></li>
                <li><a href="/konsultasi-online">Konsultasi Online</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Komunitas</h4>
              <ul>
                <li><a href="/komentar">Komentar</a></li>
                <li><a href="/postingan">Postingan</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Artikel & Jurnal</h4>
              <ul>
                <li><a href="/artikel">Artikel</a></li>
                <li><a href="/jurnal">Jurnal</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>WhizKids 2024 © All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
