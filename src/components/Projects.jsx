import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Job Request System',
    description:
      'A web application for submitting and managing job requests within the organization.',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://ustpjrs.onrender.com/',
    codeUrl: '',
  },
  {
    title: 'Document Management System',
    description:
      'A system for managing and organizing documents with features for uploading, categorizing, and searching.',
    tags: ['Javascript', 'Reactjs', 'Supabase'],
    liveUrl: 'https://ltfrbr10-dms.vercel.app/',
    codeUrl: '',
  },
  {
    title: 'RMC Inventory System',
    description:
      'An inventory management system for tracking and managing stock levels, orders, and suppliers.',
    tags: ['JavaScript', 'HTML', 'Supabase'],
    liveUrl: 'https://rmc-wine.vercel.app/',
    codeUrl: '',
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="projects-header">
        <span className="eyebrow">Selected work</span>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <ul className="project-tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            <div className="project-links">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink size={16} />
                Live
              </a>
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View source code for ${project.title}`}
                >
                  <Code2 size={16} />
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="projects-more">
        <a
          href="https://github.com/denzelali"
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary"
        >
          See all projects
        </a>
      </div>
    </section>
  );
}

export default Projects;