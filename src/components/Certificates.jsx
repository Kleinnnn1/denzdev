import { useState } from 'react';
import aiCertDict from "../assets/ai_certficate_dict.png";
import canvaEssentials from "../assets/canva_essentials.png";
import studentsEngageCanva from "../assets/students_engage_canva.png";

const certificates = [
    {
        title: 'AI Certification',
        issuer: 'DICT',
        date: '2026',
        image: aiCertDict,
    },
    {
        title: 'Canva Essentials',
        issuer: 'DICT',
        date: '2025',
        image: canvaEssentials,
    },
    {
        title: 'Student Engagement with Canva',
        issuer: 'DICT',
        date: '2025',
        image: studentsEngageCanva,
    },
];

function Certificates() {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="certificates">
            <div className="certficates-header">
                <span className="eyebrow">Credentials</span>
                <h2>Certificates</h2>
            </div>

            <div className="certificates-grid">
                {certificates.map((cert, i) => (
                    <div
                        className="certificate-card"
                        key={`${cert.title}-${i}`}
                        onClick={() => setSelectedCert(cert)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') setSelectedCert(cert);
                        }}
                    >
                        <img
                            className="certificate-image"
                            src={cert.image}
                            alt={cert.title}
                        />

                        <div className="certificate-body">
                            <h3>{cert.title}</h3>
                            <p className="certificate-issuer">{cert.issuer}</p>
                            <p className="certificate-date">{cert.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedCert && (
                <div
                    className="certificate-modal-overlay"
                    onClick={() => setSelectedCert(null)}
                >
                    <div
                        className="certificate-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="certificate-modal-close"
                            onClick={() => setSelectedCert(null)}
                            aria-label="Close"
                        >
                            ×
                        </button>
                        <img src={selectedCert.image} alt={selectedCert.title} />
                        <div className="certificate-modal-info">
                            <h3>{selectedCert.title}</h3>
                            <p>{selectedCert.issuer} · {selectedCert.date}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Certificates;