export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="blob blob--pink" aria-hidden="true"></div>
      <div className="blob blob--blue" aria-hidden="true"></div>

      <div className="testimonials__inner container">
        <p className="eyebrow">(03) Kind Words</p>
        <h2 className="testimonials__title">What clients say</h2>

        <div className="quotes">
          <figure className="quote glass">
            <blockquote>
              “The POS and order management system built by Kerubim is blazing fast and
              rock-solid. Peak-hour checkout runs smoothly, and automated daily sales reports save our team hours every day.”
            </blockquote>
            <figcaption className="quote__author">
              <span className="quote__avatar" aria-hidden="true">RP</span>
              <span>
                <span className="quote__name">Raka Pratama</span>
                <span className="quote__role">Founder, SebatasKopi</span>
              </span>
            </figcaption>
          </figure>

          <figure className="quote glass">
            <blockquote>
              “SIM-KERMA completely transformed how we manage partnerships. Tracking approval
              hierarchies, versioning MoU drafts, and multi-party e-signatures now happen in days instead of weeks.”
            </blockquote>
            <figcaption className="quote__author">
              <span className="quote__avatar" aria-hidden="true">AW</span>
              <span>
                <span className="quote__name">Aris Wicaksono</span>
                <span className="quote__role">Project Lead, SIM-KERMA</span>
              </span>
            </figcaption>
          </figure>

          <figure className="quote glass">
            <blockquote>
              “Our institutional portal has significantly elevated Politeknik Sendawar&apos;s digital presence.
              From BAN-PT accreditation to SPMI quality assurance, everything is fast, accessible, and crystal clear.”
            </blockquote>
            <figcaption className="quote__author">
              <span className="quote__avatar" aria-hidden="true">YB</span>
              <span>
                <span className="quote__name">Dr. Yohanes Berchmans</span>
                <span className="quote__role">Head of IT, Poltek Sendawar</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
