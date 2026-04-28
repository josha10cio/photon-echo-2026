export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Photon Echo.",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Privacy Policy</p>
            <h1>How Photon Echo handles site information.</h1>
            <p className="page-intro">
              This page explains what information may be collected through the site, how it is
              used, and how to contact Photon Echo with privacy-related questions.
            </p>
          </div>
          <aside className="hero-panel contact-panel">
            <div className="panel-header">
              <span className="status-dot"></span>
              <span>Privacy Overview</span>
            </div>
            <div className="summary-grid">
              <article className="summary-card">
                <h2>Site Activity</h2>
                <p>
                  Basic analytics, contact submissions, and technical site logs may be collected to
                  operate and improve the website.
                </p>
              </article>
              <article className="summary-card">
                <h2>Contact Information</h2>
                <p>
                  If you reach out through email or forms, Photon Echo may retain that information
                  for follow-up and business communication.
                </p>
              </article>
              <article className="summary-card">
                <h2>Questions</h2>
                <p>
                  For privacy questions, <a href="mailto:info@photonecho.dev">info@photonecho.dev</a>.
                </p>
              </article>
            </div>
          </aside>
        </div>
      </section>
      <section className="section">
        <div className="container faq-stack">
          <article className="faq-card">
            <h2>Information collected</h2>
            <p>
              Photon Echo may collect contact information you provide directly, along with limited
              website usage information such as browser data, pages visited, and general analytics
              events.
            </p>
          </article>
          <article className="faq-card">
            <h2>How information is used</h2>
            <p>
              Information may be used to respond to inquiries, improve site performance, understand
              general visitor behavior, and support business communication.
            </p>
          </article>
          <article className="faq-card">
            <h2>Third-party services</h2>
            <p>
              The website may rely on third-party services for hosting, analytics, and
              communication. Those services may process limited technical or contact data as part
              of operating the site.
            </p>
          </article>
          <article className="faq-card">
            <h2>Data retention</h2>
            <p>
              Information is retained only as long as reasonably needed for communication, site
              operations, legal obligations, or related business purposes.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
