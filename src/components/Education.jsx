import { useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import ustpLogo from '../assets/ustp.png';
import phinmaLogo from '../assets/coc.jpeg';

const education = [
  {
    degree: 'Master in Information Technology',
    school: 'University of Science and Technology of Southern Philippines - CDO',
    year: '2026 - Present',
    achievement: null,
    logo: ustpLogo,
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'University of Science and Technology of Southern Philippines - CDO',
    year: '2021 - 2025',
    achievement: 'Cum Laude',
    logo: ustpLogo,
  },
  {
    degree: 'Science, Technology, Engineering and Mathematics',
    school: 'PHINMA - Cagayan de Oro College',
    year: '2019 - 2021',
    achievement: 'With Honors',
    logo: phinmaLogo,
  },
];

// Falls back to the plain graduation-cap icon if a logo is missing, still
// loading, or fails to load — never shows a broken image.
function SchoolLogo({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <span className="education-icon">
        <GraduationCap size={16} />
      </span>
    );
  }

  return (
    <span className="education-icon education-icon--logo">
      <img src={src} alt={alt} onError={() => setFailed(true)} />
    </span>
  );
}

function Education() {
  return (
    <section id="education">
      <div className="education-header">
        <span className="eyebrow">Academic Background</span>
        <h2>Education</h2>
      </div>

      <div className="education-list">
        {education.map((item) => (
          <div className="education-item" key={item.degree}>
            <span className="education-year">{item.year}</span>

            <div className="education-body">
              <SchoolLogo src={item.logo} alt={`${item.school} logo`} />

              <div className="education-content">
                <h3>{item.degree}</h3>
                <p>{item.school}</p>

                {item.achievement && (
                  <span className="education-badge">
                    <Award size={13} />
                    {item.achievement}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;