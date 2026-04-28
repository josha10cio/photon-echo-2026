export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Photon Echo, synthetic data, simulation, and testing.",
};

export default function FaqPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h1>Common questions from teams looking at synthetic data and simulation.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container faq-stack">
          <article className="faq-card">
            <h2>What is Photon Echo?</h2>
            <p>
              Photon Echo works on simulation, synthetic data, and testing for robotics, autonomy,
              inspection, and related systems.
            </p>
          </article>
          <article className="faq-card">
            <h2>Who is Photon Echo for?</h2>
            <p>
              Photon Echo serves robotics companies, autonomy groups, industrial automation teams,
              inspection organizations, and teams responsible for testing or safety.
            </p>
          </article>
          <article className="faq-card">
            <h2>What problem does Photon Echo solve?</h2>
            <p>
              It helps teams rely less on expensive field collection, cover more edge cases, and
              test performance under repeatable conditions.
            </p>
          </article>
          <article className="faq-card">
            <h2>Does synthetic data replace real-world data?</h2>
            <p>
              No. It extends coverage and supports testing where field collection alone is slow,
              unsafe, or incomplete.
            </p>
          </article>
          <article className="faq-card">
            <h2>Can Photon Echo support custom use cases?</h2>
            <p>
              Yes. The work is strongest when the scenarios, data structure, and test approach are
              shaped around a specific customer environment.
            </p>
          </article>
          <article className="faq-card">
            <h2>Is Photon Echo a software platform or a service?</h2>
            <p>
              Both. Some customers need a scoped service engagement. Others care more about the
              underlying system and how it fits into existing work.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
