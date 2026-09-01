import { GraduationCap, PenTool, Code2 } from 'lucide-react';

const experiences = [
  {
    role: 'Part-time Instructor',
    company: 'USTP Information Technology Department',
    date: 'Jan 2026 - Present',
    description:
      'Teaching Systems Integration and Architecture while guiding students in software design, APIs, databases, and deployment.',
    icon: GraduationCap,
  },
  {
    role: 'UI/UX Designer & Project Manager',
    company: 'Job Request System',
    date: '2025',
    description:
      'Led the design and development of a Job Request System, creating wireframes, managing project tasks, and coordinating stakeholders.',
    icon: PenTool,
  },
  {
    role: 'Web Developer',
    company: 'Document Management System',
    date: '2025',
    description:
      'Designed and developed a document management platform for organizing, tracking, and maintaining office records.',
    icon: Code2,
  },
];

function Experience() {
  return (
    <section id="experience">
      <div className="experience-header">
        <span className="eyebrow">Professional Journey</span>
        <h2>Experience</h2>
      </div>

      <div className="experience-list">
        {experiences.map((item, index) => {
          const Icon = item.icon;
          const isCurrent = item.date.toLowerCase().includes('present');

          return (
            <article
              className="experience-item"
              key={`${item.role}-${item.date}`}
            >
              <span className="experience-index">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="experience-top">
                <span className="experience-icon">
                  <Icon size={18} />
                </span>

                <div className="experience-date">
                  <span className="experience-year">{item.date}</span>

                  {isCurrent && (
                    <span className="experience-badge">
                      Current
                    </span>
                  )}
                </div>
              </div>

              <div className="experience-content">
                <h3>{item.role}</h3>

                <p className="experience-company">
                  {item.company}
                </p>

                <p className="experience-description">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;