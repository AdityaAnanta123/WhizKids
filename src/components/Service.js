// src/components/FeaturesSection.js
import React from 'react';
import './Service.css';
import { FaVideo, FaCalendarAlt, FaBook, FaUsers } from 'react-icons/fa';

const Service = () => {
  return (
    <section className="features-section">
      <h2>Pelayan <span className="highlight">Terbaik</span> Kami</h2>
      <p className="description">
        Di era yang serba cepat seperti sekarang ini, kesehatan ibu dan anak memang layak
        mendapat perhatian dan kemudahan yang terbaik. Itulah mengapa Whiz Kid hadir dengan
        rangkaian layanan terpadu yang dirancang khusus untuk memenuhi kebutuhan kesehatan ibu dan anak secara digital:
      </p>
      <div className="features-container">
        <div className="feature-box feature-box1">
          <div className="icon-wrapper">
            <FaVideo className="feature-icon" />
          </div>
          <h3>Konsultasi Online</h3>
          <p>Konsultasi dengan dokter-dokter terbaik melalui video atau chat dengan aman dan pribadi. Atur janji temu secara mudah atau lanjutkan dengan konsultasi online.</p>
        </div>
        <div className="feature-box feature-box2">
          <div className="icon-wrapper">
            <FaCalendarAlt className="feature-icon" />
          </div>
          <h3>Tanggal Konsultasi</h3>
          <p>Pilih waktu terbaik untuk kunjungan langsung dengan sistem penjadwalan mudah kami, atau langsung saja dengan konsultasi online.</p>
        </div>
        <div className="feature-box feature-box3">
          <div className="icon-wrapper">
            <FaBook className="feature-icon" />
          </div>
          <h3>Artikel & Jurnal</h3>
          <p>Mendukung tumbuh kembang anak melalui informasi terpercaya dari para ahli kesehatan hingga dokter.</p>
        </div>
        <div className="feature-box feature-box4">
          <div className="icon-wrapper">
            <FaUsers className="feature-icon" />
          </div>
          <h3>Komunitas</h3>
          <p>Komunitas dengan pengguna lainnya untuk mendapatkan ruang diskusi untuk bisa mendapatkan atau berbagi tips mengenai kesehatan ibu maupun anak.</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
