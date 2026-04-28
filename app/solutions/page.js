export const metadata = {
  title: "Solutions",
  description:
    "Photon Echo solutions for synthetic data, scenario libraries, testing, digital twins, and streamed simulation.",
};

export default function SolutionsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Solutions</p>
          <h1>Start with the problem you need to solve.</h1>
          <p className="page-intro narrow-copy">
            Some customers come in because they need data. Others come in because they need better
            testing, a digital twin, or a simulation environment they can actually use.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container solution-stack">
          <article className="solution-band">
            <div>
              <p className="eyebrow">01</p>
              <h2>Synthetic Data</h2>
            </div>
            <p>
              Generate datasets shaped by the customer environment, the target objects, and the
              conditions that matter.
            </p>
          </article>
          <article className="solution-band">
            <div>
              <p className="eyebrow">02</p>
              <h2>Scenario Libraries</h2>
            </div>
            <p>
              Build reusable conditions, environment variation, and edge cases that matter for
              testing.
            </p>
          </article>
          <article className="solution-band">
            <div>
              <p className="eyebrow">03</p>
              <h2>Validation &amp; Benchmarking</h2>
            </div>
            <p>Run repeatable comparisons and performance reviews on fixed scenario sets.</p>
          </article>
          <article className="solution-band">
            <div>
              <p className="eyebrow">04</p>
              <h2>Digital Twin Development</h2>
            </div>
            <p>
              Convert facilities, assets, and customer environments into scenes for testing and
              planning.
            </p>
          </article>
          <article className="solution-band">
            <div>
              <p className="eyebrow">05</p>
              <h2>Cloud-Streamed Simulation</h2>
            </div>
            <p>
              Give teams direct access to environments without forcing them to manage heavy local
              infrastructure.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Examples</p>
            <h2>These examples show where the work usually starts.</h2>
          </div>
          <div className="use-case-grid">
            <article className="use-case-card dark">
              <img src="/assets/real-world-data-in-complex-environments.png" alt="Field and industrial environment" />
              <div>
                <h3>Industrial Inspection</h3>
                <p>
                  Generate conditions that are hard to collect repeatedly in active industrial or
                  outdoor environments.
                </p>
              </div>
            </article>
            <article className="use-case-card dark">
              <img src="/assets/banner-image-data-01.png" alt="Mission-style environment with simulated assets" />
              <div>
                <h3>Mission-Oriented Scenario Testing</h3>
                <p>
                  Model cluttered, constrained, or sensitive conditions and compare how systems
                  perform over time.
                </p>
              </div>
            </article>
            <article className="use-case-card dark">
              <img src="/assets/what-photon-echo-does.png" alt="Simulation and digital twin scene" />
              <div>
                <h3>Facility And Asset Twins</h3>
                <p>Build environments that support testing, review, and planning across programs.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
