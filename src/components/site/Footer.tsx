import { Link } from "@tanstack/react-router";
import { GraduationCap, Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-gold-foreground">
              <GraduationCap className="h-5 w-5" />
            </span>
            SunfoConsult
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Guiding ambitious students to top UK universities — application, scholarships, and visas
            handled end-to-end.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/study-uk" className="hover:text-gold">Study in the UK</Link></li>
            <li><Link to="/success-stories" className="hover:text-gold">Success Stories</Link></li>
            <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" /> hello@sunfoconsult.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" /> +44 20 4525 0199
            </li>
            <li className="text-primary-foreground/70">
              12 Bloomsbury Square, London WC1A 2LP, United Kingdom
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Follow</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-primary-foreground/70 md:flex-row">
          <p>© {new Date().getFullYear()} SunfoConsult. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
