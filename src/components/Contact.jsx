// import { Mail } from 'lucide-react';

// function GithubIcon({ size = 22, ...props }) {
//   return (
//     <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
//       <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.03 11.03 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
//     </svg>
//   );
// }

// function LinkedinIcon({ size = 22, ...props }) {
//   return (
//     <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
//       <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
//     </svg>
//   );
// }

// const contacts = [
//   {
//     label: 'Email',
//     href: 'mailto:aliwate.denzel@gmail.com',
//     icon: Mail,
//   },
//   {
//     label: 'GitHub',
//     href: 'https://github.com/denzelali',
//     icon: GithubIcon,
//   },
//   {
//     label: 'LinkedIn',
//     href: 'https://www.linkedin.com/in/denzelaliwate/',
//     icon: LinkedinIcon,
//   },
// ];

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div>
//           <h3>Denzel Aliwate</h3>
//           <p>Full-Stack Web Developer</p>
//         </div>

//         <div className="footer-links">
//           {contacts.map(({ label, href, icon: Icon }) => (
//             <a
//               key={label}
//               href={href}
//               aria-label={label}
//               target={href.startsWith('http') ? '_blank' : undefined}
//               rel={href.startsWith('http') ? 'noreferrer' : undefined}
//             >
//               <Icon size={22} />
//             </a>
//           ))}
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>
//           © {new Date().getFullYear()} Denzel Aliwate. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;