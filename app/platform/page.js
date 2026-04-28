export const metadata = {
  title: "Platform",
  description:
    "See how Photon Echo handles simulation, synthetic data, scenario libraries, and testing.",
};

export default function PlatformPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Platform</p>
            <h1>One system for simulation, synthetic data, and repeatable testing.</h1>
            <p className="page-intro">
              Photon Echo brings environment creation, data generation, scenario authoring,
              benchmarking, and review access into one workflow.
            </p>
          </div>
          <div className="image-panel tall">
            <img
              src="/assets/what-photon-echo-does.png"
              alt="Digital twin and simulation environment"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">Platform</p>
            <h2>
              The platform ties together environment buildout, data generation, testing, and
              review.
            </h2>
          </div>
          <div className="module-grid">
            <article className="module-card">
              <h3>Simulation Infrastructure</h3>
              <p>
                Build and run environments used for data generation, test scenarios, and system
                evaluation.
              </p>
            </article>
            <article className="module-card">
              <h3>Synthetic Data Programs</h3>
              <p>
                Produce training and test datasets for customer-specific environments, assets, and
                tasks.
              </p>
            </article>
            <article className="module-card">
              <h3>Scenario Libraries</h3>
              <p>
                Define reusable conditions, edge cases, and environment variation for repeatable
                testing.
              </p>
            </article>
            <article className="module-card">
              <h3>Validation &amp; Benchmarking</h3>
              <p>
                Run repeatable comparisons and performance checks against fixed scenario sets over
                time.
              </p>
            </article>
            <article className="module-card">
              <h3>Digital Twin Extensions</h3>
              <p>
                Build customer environments that can be used for testing, monitoring, and planning.
              </p>
            </article>
            <article className="module-card">
              <h3>Interactive Access</h3>
              <p>
                Give teams browser access when they need to review or interact with the environment
                directly.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split-grid">
          <div className="split-panel split-copy">
            <p className="eyebrow">Why It Helps</p>
            <h2>Teams get a more controlled way to generate data and test systems.</h2>
            <p>
              Instead of depending only on field collection to surface important conditions, teams
              can define scenarios, generate datasets, and track model behavior more consistently
              across releases.
            </p>
          </div>
          <div className="split-panel">
            <ul className="checklist">
              <li>More repeatable evaluation conditions</li>
              <li>Better coverage for uncommon events</li>
              <li>Cleaner dataset governance and lineage</li>
              <li>More confidence when customer systems change</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
