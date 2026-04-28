import { Instrument_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: {
    default: "Photon Echo | Synthetic Data and Simulation",
    template: "%s | Photon Echo",
  },
  description:
    "Photon Echo helps robotics, autonomy, and inspection companies generate synthetic data, build scenario libraries, and test systems before rollout.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="site-frame">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
