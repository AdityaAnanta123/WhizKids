import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import './DoctorSection.css';
import doctor1 from '../img/doctor sarah.png'; // Sesuaikan dengan path gambar Anda
import doctor2 from '../img/doctor lee.png'; // Sesuaikan dengan path gambar Anda

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Kandungan',
    description: 'Dokter kandungan Dr. Wong memiliki kecintaan yang mendalam terhadap kesehatan ibu dan anak. Pendekatannya yang menggabungkan teknologi canggih dengan perawatan yang penuh kasih membuatnya menjadi mitra yang terpercaya bagi pasiennya dalam perjalanan menuju kesejahteraan.',
    imageUrl: doctor1, // Replace with actual image URL
    consultationLink: '#'
  },
  {
    name: 'Dr. Mark Lee',
    specialty: 'THT',
    description: 'Dr. Lee adalah seorang pemimpin dalam bidang THT, dengan fokus pada pendekatan holistik yang lembut. Dedikasinya terhadap keunggulan klinis dan pendidikan pasien menjadikannya ahli terkemuka dalam perawatan THT, dengan komitmen terhadap perawatan yang berpusat pada pasien.',
    imageUrl: doctor2, // Replace with actual image URL
    consultationLink: '#'
  }
];

function DoctorSection() {
  return (
    <section className="doctor-profiles-section">
      <h2 className="section-title">Spesialist Dokter:</h2>
      <h3 className="section-subtitle">Memperkenalkan Tim Dokter Kami</h3>
      <p className="section-description">
        Tim spesialis kami berada di garis depan inovasi medis. Setiap ahli membawa kombinasi unik dari keahlian, empati, dan pengalaman untuk memastikan bahwa kesehatan ibu dan anak Anda berada di tangan yang terbaik.
      </p>
      <div className="doctor-profiles-container">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-profile">
            <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image" />
            <div className="doctor-info">
              <h4>{doctor.name} ({doctor.specialty})</h4>
              <p>{doctor.description}</p>
              <a href={doctor.consultationLink} className="consultation-button">
                Konsultasi Sekarang <FaPhoneAlt className="phone-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DoctorSection;
