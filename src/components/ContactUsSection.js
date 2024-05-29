import React from 'react';
import './ContactUsSection.css'; // Import stylesheet for styling
import icon1 from '../img/ic_round-email.png'; // Sesuaikan dengan path gambar Anda
import icon2 from '../img/ic_round-mail.png'; // Sesuaikan dengan path gambar Anda
import icon3 from '../img/Vector right.png'; // Sesuaikan dengan path gambar Anda

const ContactUsSection = () => {
  return (
    <section className="contact-us-section">
      <h2 className="section-header">Hubungi Kami <span style={{ color: '#00BFFE' }}>untuk</span> Bantuan</h2>
      <p className="section-description">Pertanyaan? Butuh bantuan? Tim dukungan kami yang berdedikasi siap membantu Anda setiap langkahnya.</p>
      <div className="input-container">
        <div className="input-group">
          <div className="icon"><img src={icon1} alt="Email Icon" /></div>
          <input type="text" placeholder="Masukkan Nama Depan" className="input-field" />
        </div>
        <div className="input-group">
          <div className="icon"><img src={icon2} alt="Mail Icon" /></div>
          <input type="email" placeholder="Masukkan Alamat Email" className="input-field" />
        </div>
        <button className="contact-button">
          Hubungi Kami <span className="icon"><img src={icon3} alt="Vector Icon" /></span>
        </button>
      </div>
    </section>
  );
}

export default ContactUsSection;
