import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid footer-grid-rich">
        <div>
          <Link className="brand footer-brand" href="/">
            <img src="/assets/photon-echo-logo.png" alt="Photon Echo logo" />
          </Link>
          <p className="footer-copy">
            Synthetic data, simulation, and testing support for robotics, autonomy, and inspection
            work.
          </p>
        </div>
        <nav className="footer-links" aria-label="Pages">
          <span className="footer-label">Pages</span>
          <Link href="/platform">Platform</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <nav className="footer-links" aria-label="Focus areas">
          <span className="footer-label">Focus</span>
          <Link href="/platform">Simulation Infrastructure</Link>
          <Link href="/solutions">Synthetic Data</Link>
          <Link href="/solutions">Scenario Libraries</Link>
          <Link href="/solutions">Digital Twin</Link>
          <Link href="/industries">Government &amp; Defense</Link>
        </nav>
        <nav className="footer-links" aria-label="Legal and contact">
          <span className="footer-label">Legal</span>
          <Link href="/contact">Contact</Link>
          <a href="mailto:info@photonecho.dev">info@photonecho.dev</a>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
        <nav className="footer-links" aria-label="Connect">
          <span className="footer-label">Connect</span>
          <a href="https://www.linkedin.com/company/photonecho/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com/EchoPhoton" target="_blank" rel="noreferrer">
            X (Twitter)
          </a>
        </nav>
      </div>
    </footer>
  );
}
