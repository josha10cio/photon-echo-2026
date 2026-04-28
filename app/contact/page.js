export const metadata = {
  title: "Contact",
  description:
    "Contact Photon Echo to discuss simulation, synthetic data, digital twins, or testing needs.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Bring us the environment, system, or testing problem you need to solve.</h1>
            <p className="page-intro">
              Photon Echo can help with synthetic data generation, scenario design, testing plans,
              digital twin work, or a broader simulation effort.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:info@photonecho.dev">
                info@photonecho.dev
              </a>
            </div>
          </div>
          <aside className="hero-panel contact-panel">
            <div className="panel-header">
              <span className="status-dot"></span>
              <span>First Conversation</span>
            </div>
            <div className="summary-grid">
              <article className="summary-card">
                <h2>What are you working on?</h2>
                <p>
                  Share the environment, system, or operational setting you need help modeling or
                  testing.
                </p>
              </article>
              <article className="summary-card">
                <h2>What needs better coverage?</h2>
                <p>
                  Call out the scenarios, conditions, or failure cases that are difficult to
                  collect or repeat in the field.
                </p>
              </article>
              <article className="summary-card">
                <h2>Where do you need help first?</h2>
                <p>
                  Data generation, testing, environment modeling, or a larger simulation effort
                  all work as starting points.
                </p>
              </article>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
