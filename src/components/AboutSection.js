import React from 'react';
import './AboutSection.css';
import doctorImage from '../img/doctor.png'; // Sesuaikan dengan path gambar Anda

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-section__container">
                <h2 className="about-section__header-title">
                    <span style={{ color: '#00BFFE' }}>Whiz Kids : </span>  Cerita Dibalik Semuanya
                </h2>
                <div className="about-section__content-container">
                    <div className="about-section__image-container">
                        <img src={doctorImage} alt="Doctor" />
                    </div>
                    <div className="about-section__content">
                        <p>
                            Whiz Kid adalah lebih dari sekadar layanan medis online. Ini adalah gerakan menuju perawatan kesehatan yang mudah diakses, efisien, dan penuh kasih untuk ibu dan anak. Dibangun oleh tim yang terdiri dari ahli kesehatan anak, teknologi, dan pengembang aplikasi, kami didorong oleh misi untuk memberikan perawatan medis yang luar biasa langsung kepada Anda, di mana pun Anda berada. Platform kami didasarkan pada kepercayaan, inovasi, dan kepedulian terhadap pasien, memastikan bahwa setiap interaksi dipersonalisasi dan setiap rencana perawatan disesuaikan dengan kebutuhan unik Anda dan anak-anak Anda.
                        </p>
                        <button className="about-section__button">Selengkapnya</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
