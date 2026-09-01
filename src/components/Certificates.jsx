const certificates = [
    {
        title: 'Certificate Title',
        issuer: 'Issuing Organization',
        date: '2026',
    },
    {
        title: 'Certificate Title',
        issuer: 'Issuing Organization',
        date: '2025',
    },
    {
        title: 'Certificate Title',
        issuer: 'Issuing Organization',
        date: '2025',
    },
];

function Certificates() {
    return (
        <section id="certificates">
            <div className="certficates-header">
                <span className="eyebrow">Credentials</span>
                <h2>Certificates</h2>
            </div>

            <div className="certificates-grid">
                {certificates.map((cert, i) => (
                    <div className="certificate-card" key={`${cert.title}-${i}`}>
                        <div className="certificate-image" aria-hidden="true" />

                        <div className="certificate-body">
                            <h3>{cert.title}</h3>
                            <p className="certificate-issuer">{cert.issuer}</p>
                            <p className="certificate-date">{cert.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certificates;