import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-uk.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="International students walking through a historic UK university campus at golden hour"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="container-page relative flex min-h-[92vh] flex-col justify-center py-20 text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-gold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Trusted by 500+ students accepted into UK universities
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
            Study in the UK{" "}
            <span className="text-gradient-gold">with confidence.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85 sm:text-xl">
            SunfoConsult helps students gain admission into top UK universities with expert
            guidance — from application to visa approval.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="btn-gold rounded-full px-7 text-base">
              <Link to="/contact">
                Apply Now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-white/5 px-7 text-base text-primary-foreground backdrop-blur hover:bg-white/15 hover:text-primary-foreground"
            >
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-1.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold" />
              ))}
              <span className="ml-1 text-primary-foreground/90">4.9 / 5 student rating</span>
            </div>
            <div className="hidden h-4 w-px bg-white/25 sm:block" />
            <p>End-to-end support · 95% visa success · Personal advisor</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
