import React from 'react';
import './Features.css';
import { FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import logo from '../img/v.png';

const Features = () => {
    return (
        <section className="features features-shapes">
            <div className="container">
                <div className="header">
                    <h2>Mudah dalam Konsultasi hanya dengan 3 tahap</h2>
                </div>
                <div className="features-content">
                    <div className="feature">
                        <div className="feature-header">
                            <FaEnvelope className="icon" />
                            <p>Alamat Email</p>
                        </div>
                        <input type="email" placeholder="Masukkan Alamat Email" />
                    </div>
                    <div className="feature">
                        <div className="feature-header">
                            <FaPhone className="icon icon-phone" />
                            <p>Nomor Kontak</p>
                        </div>
                        <input type="tel" placeholder="Masukkan Nomor Kontak" />
                    </div>
                    <div className="feature">
                        <div className="feature-header">
                            <FaCalendarAlt className="icon" />
                            <p>Tanggal Konsultasi</p>
                        </div>
                        <div className="input-button-group">
                            <input type="date" placeholder="Masukkan Tanggal Konsultasi" />
                            <button className="consultate-button">
                            Konsultasi
                            <img src={logo} alt="Logo" className="button-logo" />
                    </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
