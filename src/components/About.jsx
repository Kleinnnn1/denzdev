import {
  SiPhp,
  SiLaravel,
  SiJavascript,
  SiReact,
  SiSupabase,
  SiMysql,
  SiDjango,
  SiSqlite,
  SiPostgresql,
  SiTailwindcss,
} from 'react-icons/si';

const skills = [
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Django', icon: SiDjango, color: '#0C4B33' },
  { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
];

function About() {
  return (
    <section id="about">
      <div className="about-header">
        <span className="eyebrow">Get to know me</span>
        <h2>About Me</h2>
        <p>
          Hi, I'm Denzel, a Full-Stack Developer who enjoys building modern web applications that solve real-world problems and help organizations work more efficiently. I specialize in developing end-to-end solutions, combining intuitive user experiences with robust backend systems to create reliable and scalable applications. Passionate about innovation and continuous improvement, I take pride in writing clean code, learning new technologies, and delivering high-quality solutions that provide real value to users and organizations alike.
        </p>
      </div>

      <div className="skills-header">
        <h2>Skills</h2>
      </div>

      <div className="skills-marquee">
        <div className="skills-track">
          {[...skills, ...skills].map(({ name, icon: Icon, color }, i) => (
            <div className="skill-chip" key={`${name}-${i}`}>
              <Icon size={32} color={color} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;