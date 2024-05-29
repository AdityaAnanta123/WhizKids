// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';
import user1 from '../img/user 1.png'; // Sesuaikan dengan path gambar Anda
import user2 from '../img/user 2.png'; // Sesuaikan dengan path gambar Anda
import user3 from '../img/user 3.png'; // Sesuaikan dengan path gambar Anda
import user4 from '../img/user 4.png'; // Sesuaikan dengan path gambar Anda

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <h2 className="header-title"><span style={{ color: '#00BFFE' }}>Testimoni </span>  Pengguna</h2>
                <p className="header-description">
                    Inilah testimoni dari beberapa pengguna setelah menggunakan website WhizKid
                </p>
                <div className="testimonials-content">
                    <div className="testimonial-box">
                        <img src={user1} alt="User" className="testimonial-image" />
                        <div className="testimonial-text">
                            <p>"Setelah operasi saya, kemudahan konsultasi online benar-benar membuat pemulihan saya berjalan lancar."</p>
                            <h4>-Linda A.</h4>
                        </div>
                    </div>
                    <div className="testimonial-box">
                        <img src={user2} alt="User" className="testimonial-image" />
                        <div className="testimonial-text">
                            <p>"Mengelola kondisi kronis seperti diabetes kini lebih mudah dengan layanan online ini, yang telah signifikan meningkatkan kualitas hidup saya."</p>
                            <h4>-Henry B.</h4>
                        </div>
                    </div>
                </div>
                <div className="statistics">
                    <div className="stat">
                        <p className="stat-number">10,000+</p>
                        <p className="stat-description">Konsultasi Sukses</p>
                    </div>
                    <div className="stat">
                        <p className="stat-number">2,500+</p>
                        <p className="stat-description">Dokter Professional</p>
                    </div>
                    <div className="stat">
                        <p className="stat-number">98%</p>
                        <p className="stat-description">Rating Pengguna</p>
                    </div>
                    <div className="stat">
                        <p className="stat-number">200+</p>
                        <p className="stat-description">Spesialis Terbaik</p>
                    </div>
                </div>
                <div className="testimonials-content">
                    <div className="testimonial-box">
                        <img src={user3} alt="User" className="testimonial-image" />
                        <div className="testimonial-text">
                            <p>"Sistem isi ulang resep adalah pengubah permainan. Itu sangat efisien dan benar-benar menghemat waktu saya."</p>
                            <h4>-Joshua T.</h4>
                        </div>
                    </div>
                    <div className="testimonial-box">
                        <img src={user4} alt="User" className="testimonial-image" />
                        <div className="testimonial-text">
                            <p>"Menemukan dokter yang benar-benar memahami semua kebutuhan saya belum pernah lebih mudah. Layanan telehealth ini sangat membantu saya!"</p>
                            <h4>-Samantha K.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
