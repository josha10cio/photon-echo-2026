export const metadata = {
  title: "Industries",
  description:
    "Industries served by Photon Echo, from robotics and autonomy to inspection, government, and safety work.",
};

export default function IndustriesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Industries</p>
            <h1>
              Photon Echo fits teams working in places where field testing is costly, limited, or
              hard to repeat.
            </h1>
            <p className="page-intro">
              The common thread is simple: teams need better data and better testing in
              environments where direct collection is incomplete, expensive, or hard to repeat.
            </p>
          </div>
          <div className="image-panel tall">
            <img
              src="/assets/real-world-data-in-co02mplex-environments.png"
              alt="Operational environment for synthetic data and validation"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container industry-page-grid">
          <article className="industry-panel">
            <h2>Robotics</h2>
            <p>
              Support robotics teams that need synthetic data, edge-case coverage, and repeatable
              testing before rollout.
            </p>
          </article>
          <article className="industry-panel">
            <h2>Industrial Automation</h2>
            <p>
              Model facility environments, logistics operations, and inspection workflows where
              field capture is hard to scale.
            </p>
          </article>
          <article className="industry-panel">
            <h2>Inspection &amp; Field Systems</h2>
            <p>
              Generate scenarios for outdoor inspection, remote monitoring, infrastructure review,
              and high-variability environments.
            </p>
          </article>
          <article className="industry-panel">
            <h2>Autonomy Programs</h2>
            <p>
              Provide scenario-driven training and testing for autonomous systems operating across
              changing conditions and missions.
            </p>
          </article>
          <article className="industry-panel">
            <h2>Government &amp; Defense</h2>
            <p>
              Support sensitive programs that need controlled testing and scenario coverage without
              depending only on raw field collection.
            </p>
          </article>
          <article className="industry-panel">
            <h2>QA, Safety &amp; Validation Teams</h2>
            <p>
              Help organizations that need repeatable evidence and cleaner comparisons across
              system versions.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
