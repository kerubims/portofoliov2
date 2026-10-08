import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" id="contact" data-nav="light">
      <div className="container">
        <p className="eyebrow">(04) Contact</p>
        <h2 className="footer__title">Let&apos;s make<br />something <span className="outline">great</span></h2>
        <a className="btn btn--dark btn--lg" href="mailto:kerubimwork@gmail.com">
          kerubimwork@gmail.com <span className="btn__arrow" aria-hidden="true"><svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
        </a>

        <div className="footer__grid">
          <div>
            <h3 className="footer__heading">Studio</h3>
            <p>Malang, Indonesia<br />Working worldwide</p>
          </div>
          <div>
            <h3 className="footer__heading">Social</h3>
            <ul className="footer__list">
              <li><a href="https://instagram.com/ubims_s" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://wa.me/62882009074648" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="https://www.linkedin.com/in/kerubim-serafim-mahanaim-393a2b24b" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/kerubims" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer__heading">Menu</h3>
            <ul className="footer__list">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#work">Work</Link></li>
              <li><Link href="#testimonials">Words</Link></li>
            </ul>
          </div>
          <div className="footer__top-wrap">
            <Link className="footer__top glass" href="#hero" aria-label="Back to top"><svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg></Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Kerubim SM</span>
          <span>Designed in Indonesia</span>
        </div>
      </div>

      <div className="footer__wordmark" aria-hidden="true">KERUBIM</div>
    </footer>
  );
}
