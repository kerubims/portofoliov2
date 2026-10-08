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
              “Kerubim turned a tiny coffee cart into a brand people line up for. Every
              touchpoint, from cups to signage, suddenly felt like us.”
            </blockquote>
            <figcaption className="quote__author">
              <span className="quote__avatar" aria-hidden="true">AS</span>
              <span>
                <span className="quote__name">Ayu Setiawan</span>
                <span className="quote__role">Founder, Kopi Senja</span>
              </span>
            </figcaption>
          </figure>

          <figure className="quote glass">
            <blockquote>
              “Rare mix of craft and clarity. Our app went from confusing to calm, and
              the design system Kerubim left behind still saves us weeks.”
            </blockquote>
            <figcaption className="quote__author">
              <span className="quote__avatar" aria-hidden="true">DL</span>
              <span>
                <span className="quote__name">Daniel Lim</span>
                <span className="quote__role">Head of Product, Lumen</span>
              </span>
            </figcaption>
          </figure>

          <figure className="quote glass">
            <blockquote>
              “The web application gave our launch a performance boost we couldn&apos;t have achieved on our
              own. Fast, scalable and delivered ahead of schedule.”
            </blockquote>
            <figcaption className="quote__author">
              <span className="quote__avatar" aria-hidden="true">MR</span>
              <span>
                <span className="quote__name">Maya Rahman</span>
                <span className="quote__role">Creative Lead, Orbit</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
