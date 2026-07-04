import { Link } from "@tanstack/react-router";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/study-uk", label: "Study in the UK" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-soft">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span>
            Sunfo<span className="text-gradient-gold">Consult</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm text-foreground/75 transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:font-medium"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Button asChild className="btn-gold rounded-full px-5">
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="btn-gold mt-2 w-full rounded-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Book Consultation
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
