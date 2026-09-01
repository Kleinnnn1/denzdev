function Footer() {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          background: #0a0a0a;
          color: #f5f5f5;
          padding: 4rem 1.5rem 1.5rem;
          font-family: "Helvetica Neue", Arial, sans-serif;
        }

        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 0.8fr;
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(245, 245, 245, 0.1);
        }

        .footer-lead-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #d6ff3e;
          margin: 0 0 0.75rem;
        }

        .footer-lead-heading {
          font-family: "Arial Black", "Helvetica Neue", sans-serif;
          font-weight: 900;
          text-transform: uppercase;
          font-size: clamp(1.6rem, 3vw, 2.25rem);
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin: 0 0 1.5rem;
        }

        .footer-email {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #d6ff3e;
          color: #0a0a0a;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          padding: 0.65rem 1.25rem;
          border-radius: 999px;
          border: 1px solid #d6ff3e;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .footer-email:hover {
          background: transparent;
          color: #d6ff3e;
        }

        .footer-col-title {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(245, 245, 245, 0.45);
          margin: 0 0 1.1rem;
        }

        .footer-col-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .footer-col-list a {
          color: rgba(245, 245, 245, 0.8);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .footer-col-list a:hover {
          color: #d6ff3e;
        }

        .footer-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .footer-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d6ff3e;
          box-shadow: 0 0 0 0 rgba(214, 255, 62, 0.6);
          animation: pulse 2.2s ease-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(214, 255, 62, 0.5); }
          70% { box-shadow: 0 0 0 7px rgba(214, 255, 62, 0); }
          100% { box-shadow: 0 0 0 0 rgba(214, 255, 62, 0); }
        }

        .footer-status-text {
          font-size: 0.85rem;
          color: rgba(245, 245, 245, 0.85);
        }

        .footer-location {
          font-size: 0.85rem;
          color: rgba(245, 245, 245, 0.5);
          margin: 0;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 1.5rem;
        }

        .footer-copy {
          font-size: 0.72rem;
          color: rgba(245, 245, 245, 0.4);
          margin: 0;
        }

        .footer-socials {
          display: flex;
          gap: 0.75rem;
        }

        .footer-socials a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(245, 245, 245, 0.25);
          color: #f5f5f5;
          text-decoration: none;
          font-size: 0.6rem;
          font-weight: 700;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }

        .footer-socials a:hover {
          border-color: #d6ff3e;
          color: #d6ff3e;
          transform: translateY(-2px);
        }

        @media (max-width: 720px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column-reverse;
            text-align: center;
          }
        }
      `}</style>

      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <p className="footer-lead-eyebrow">Get in touch</p>
            <h3 className="footer-lead-heading">
              Let's build something great.
            </h3>
            <a href="mailto:aliwate.denzel@gmail.com" className="footer-email">
              aliwate.denzel@gmail.com
            </a>
          </div>

          <div>
            <p className="footer-col-title">Navigate</p>
            <ul className="footer-col-list">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#hire-me">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Status</p>
            <div className="footer-status">
              <span className="footer-status-dot" aria-hidden="true"></span>
              <span className="footer-status-text">Open to new projects</span>
            </div>
            <p className="footer-location">Based in Cagayan de Oro, PH</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Denzel Aliwate. All rights reserved.
          </p>
        <div className="footer-links">
  <a href="https://github.com/denzelali" target="_blank" rel="noreferrer" aria-label="GitHub">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.13-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.17 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>
    </svg>
  </a>
  <a href="https://www.linkedin.com/in/denzelaliwate/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
    </svg>
  </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;