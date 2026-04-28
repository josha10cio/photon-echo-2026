import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero hero-home">
        <div className="hero-background">
          <img
            src="/assets/banner-image-data-01.png"
            alt="Simulation environment and autonomous systems visualization"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="container hero-grid hero-grid-wide">
          <div className="hero-copy">
            <p className="eyebrow">Synthetic Data And Simulation</p>
            <h1>Synthetic data and simulation for robotics, autonomy, and inspection.</h1>
            <p className="hero-text">
              Photon Echo helps teams build training data, test edge cases, and check system
              behavior before updates reach the field.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">
                Talk To Photon Echo
              </Link>
              <Link className="button button-ghost" href="/solutions">
                Explore Solutions
              </Link>
            </div>
          </div>
          <aside className="hero-panel">
            <div className="panel-header">
              <span className="status-dot"></span>
              <span>What We Do</span>
            </div>
            <div className="summary-grid">
              <article className="summary-card">
                <h2>Synthetic Data</h2>
                <p>
                  Build training and test datasets around the places, sensors, and conditions a
                  customer actually deals with.
                </p>
              </article>
              <article className="summary-card">
                <h2>Scenario Libraries</h2>
                <p>
                  Build repeatable scenario sets for edge cases, weather, lighting, traffic,
                  clutter, or other hard-to-capture conditions.
                </p>
              </article>
              <article className="summary-card">
                <h2>Validation</h2>
                <p>
                  Compare model changes before they reach production equipment, vehicles, or active
                  operations.
                </p>
              </article>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What We Do</p>
            <h2>Photon Echo helps teams generate data, test systems, and model environments.</h2>
          </div>
          <div className="capability-grid">
            <article className="feature-card">
              <span className="icon-badge" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6a2 2 0 0 1 2 -2h4"></path>
                  <path d="M14 4h4a2 2 0 0 1 2 2v4"></path>
                  <path d="M20 14v4a2 2 0 0 1 -2 2h-4"></path>
                  <path d="M10 20h-4a2 2 0 0 1 -2 -2v-4"></path>
                  <path d="M9 9h6v6h-6z"></path>
                </svg>
              </span>
              <h3>Synthetic Dataset Generation</h3>
              <p>
                Create training and test datasets for robotics, inspection, logistics, and
                autonomous systems.
              </p>
            </article>
            <article className="feature-card">
              <span className="icon-badge" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 4h12"></path>
                  <path d="M6 10h12"></path>
                  <path d="M6 16h8"></path>
                  <path d="M17 14l3 3l-3 3"></path>
                </svg>
              </span>
              <h3>Scenario Libraries</h3>
              <p>
                Build repeatable scenario sets for failure cases, difficult conditions, and
                environment variation.
              </p>
            </article>
            <article className="feature-card">
              <span className="icon-badge" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19l5 -5l4 4l7 -8"></path>
                  <path d="M14 10h6v6"></path>
                </svg>
              </span>
              <h3>Validation &amp; Benchmarking</h3>
              <p>
                Run repeatable comparisons across model versions and keep the test conditions
                consistent.
              </p>
            </article>
            <article className="feature-card">
              <span className="icon-badge" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 7v5l3 3"></path>
                  <path d="M7 4l-2.75 2"></path>
                  <path d="M17 4l2.75 2"></path>
                </svg>
              </span>
              <h3>Data Realism</h3>
              <p>
                Improve visual realism while keeping labels, metadata, and dataset structure
                intact.
              </p>
            </article>
            <article className="feature-card">
              <span className="icon-badge" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4l7 4v8l-7 4l-7 -4v-8z"></path>
                  <path d="M12 12l7 -4"></path>
                  <path d="M12 12v8"></path>
                  <path d="M12 12l-7 -4"></path>
                </svg>
              </span>
              <h3>Digital Twin Development</h3>
              <p>
                Turn facilities, assets, and customer environments into scenes that can be used
                for testing and planning.
              </p>
            </article>
            <article className="feature-card">
              <span className="icon-badge" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.8 0 0 1 9.7 -1.2a4 3.9 0 0 1 .3 7.8"></path>
                  <path d="M12 13l0 8"></path>
                  <path d="M9 18l3 3l3 -3"></path>
                </svg>
              </span>
              <h3>Streamed Access</h3>
              <p>
                Let teams review or interact with simulation environments in the browser instead
                of managing heavy local setups.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="split-panel split-copy">
            <p className="eyebrow">Why It Matters</p>
            <h2>Field collection is expensive, slow, and weak at edge-case coverage.</h2>
            <p>
              Photon Echo gives teams a better way to generate data, test scenarios, and check
              system behavior before making changes in expensive or sensitive environments.
            </p>
            <ul className="checklist">
              <li>Reduce dependence on repeated real-world collection</li>
              <li>Cover uncommon but high-impact conditions</li>
              <li>Run more consistent regression testing</li>
              <li>Package results in a way teams can operationalize</li>
            </ul>
          </div>
          <div className="image-panel">
            <img
              src="/assets/what-photon-echo-does.png"
              alt="Simulation workspace with robotics and digital twin overlays"
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">Examples</p>
            <h2>
              Common starting points include inspection, rollout testing, and hard-to-capture
              environments.
            </h2>
          </div>
          <div className="use-case-grid">
            <article className="use-case-card">
              <img
                src="/assets/real-world-data-in-complex-environments.png"
                alt="Industrial and physical AI system in real-world setting"
              />
              <div>
                <h3>Inspection &amp; Monitoring</h3>
                <p>
                  Test weather, terrain, visibility, and hard-to-access inspection conditions
                  without waiting on risky field events.
                </p>
              </div>
            </article>
            <article className="use-case-card">
              <img
                src="/assets/real-world-data-in-co02mplex-environments.png"
                alt="Operational environment showing data collection in difficult conditions"
              />
              <div>
                <h3>Validation Before Deployment</h3>
                <p>
                  Test systems against repeatable scenarios before updates reach production
                  equipment or active operations.
                </p>
              </div>
            </article>
            <article className="use-case-card">
              <img
                src="/assets/banner-image-data-01.png"
                alt="Autonomy and defense-oriented synthetic environment"
              />
              <div>
                <h3>Program-Specific Data Generation</h3>
                <p>
                  Build datasets and scenario libraries for environments where direct collection is
                  limited, unsafe, or expensive.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">Who It Helps</p>
            <h2>Photon Echo fits teams that need better testing before rollout.</h2>
          </div>
          <div className="industry-grid">
            <article className="industry-card">
              <h3>Robotics</h3>
              <p>
                Training data, repeatable testing, and scenario coverage for robots moving toward
                production use.
              </p>
            </article>
            <article className="industry-card">
              <h3>Industrial Automation</h3>
              <p>
                Support for inspection, logistics, and facility operations where test conditions
                need to stay repeatable.
              </p>
            </article>
            <article className="industry-card">
              <h3>Autonomy Programs</h3>
              <p>
                Scenario-driven testing for autonomous vehicles, unmanned systems, and field
                operations.
              </p>
            </article>
            <article className="industry-card">
              <h3>Government &amp; Defense</h3>
              <p>
                Controlled testing for constrained, regulated, or difficult-to-access environments.
              </p>
            </article>
          </div>
          <div className="section-actions">
            <Link className="button button-primary" href="/industries">
              View Industries
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack-grid">
          <div className="stack-copy">
            <p className="eyebrow">How It Is Built</p>
            <h2>
              The technical side should show how the work gets done, not just what tools are
              involved.
            </h2>
            <p>
              Photon Echo can build environments, generate data, run tests, and deliver outputs
              that teams can actually use in training and evaluation.
            </p>
          </div>
          <div className="stack-card">
            <div className="stack-item">
              <span>Simulation</span>
              <strong>Physics-based environment and sensor simulation</strong>
            </div>
            <div className="stack-item">
              <span>Synthetic Data</span>
              <strong>Structured dataset generation for training and validation</strong>
            </div>
            <div className="stack-item">
              <span>Scenario Design</span>
              <strong>Reusable scenario libraries, variation systems, and edge-case coverage</strong>
            </div>
            <div className="stack-item">
              <span>Validation</span>
              <strong>Regression benchmarking, reporting, and performance analysis</strong>
            </div>
            <div className="stack-item">
              <span>Delivery</span>
              <strong>Cloud orchestration and streamed simulation access</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Bring us the environment, system, or testing problem you need to solve.</h2>
          </div>
          <div className="cta-copy">
            <p>
              If the immediate need is data generation, testing coverage, or environment modeling,
              Photon Echo can start there and expand as needed.
            </p>
            <Link className="button button-primary" href="/contact">
              Contact Photon Echo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
