export const metadata = {
  title: "Terms",
  description: "Terms for Photon Echo website usage.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Terms</p>
            <h1>Basic terms for using the Photon Echo website.</h1>
            <p className="page-intro">
              These terms cover general use of the website, site content, and contact channels.
              They do not replace project-specific commercial agreements.
            </p>
          </div>
          <aside className="hero-panel contact-panel">
            <div className="panel-header">
              <span className="status-dot"></span>
              <span>Terms Overview</span>
            </div>
            <div className="summary-grid">
              <article className="summary-card">
                <h2>General Use</h2>
                <p>The site is provided for information, communication, and business inquiry purposes.</p>
              </article>
              <article className="summary-card">
                <h2>Content</h2>
                <p>Site content remains the property of Photon Echo unless otherwise stated.</p>
              </article>
              <article className="summary-card">
                <h2>Commercial Work</h2>
                <p>
                  Actual project work, delivery terms, and customer obligations are governed by
                  separate agreements.
                </p>
              </article>
            </div>
          </aside>
        </div>
      </section>
      <section className="section">
        <div className="container faq-stack">
          <article className="faq-card">
            <h2>Website use</h2>
            <p>
              You may use this website to learn about Photon Echo and contact the company for
              legitimate business purposes.
            </p>
          </article>
          <article className="faq-card">
            <h2>Intellectual property</h2>
            <p>
              Unless otherwise noted, the content, branding, and presentation on this site belong
              to Photon Echo and may not be reused in a misleading or unauthorized way.
            </p>
          </article>
          <article className="faq-card">
            <h2>No commercial agreement</h2>
            <p>
              Use of this site does not create a customer relationship, project agreement, or
              service obligation. Separate written agreements govern commercial work.
            </p>
          </article>
          <article className="faq-card">
            <h2>Updates</h2>
            <p>
              Photon Echo may update site content, terms, or policies as the company and website
              evolve.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
