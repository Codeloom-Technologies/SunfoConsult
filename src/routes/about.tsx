import { createFileRoute } from "@tanstack/react-router";
import { WhyChoose } from "@/components/site/WhyChoose";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SunfoConsult — Expert UK Admission Advisors" },
      {
        name: "description",
        content:
          "Meet SunfoConsult — a specialist UK admissions team helping international students win offers from top British universities.",
      },
      { property: "og:title", content: "About SunfoConsult — Expert UK Admission Advisors" },
      {
        property: "og:description",
        content: "A specialist UK admissions team dedicated to international student success.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="border-b border-border bg-ivory py-20">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">About us</p>
          <h1 className="mt-3 font-display text-5xl font-semibold sm:text-6xl">
            Ambitious students. Elite UK universities. One trusted advisor.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            SunfoConsult was founded to remove the guesswork from studying abroad. We're former
            university admission officers, licensed migration consultants, and student mentors —
            united by one goal: help international students unlock the UK's world-class education.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-10 md:grid-cols-3">
          {[
            { k: "500+", v: "Students placed" },
            { k: "60+", v: "Partner UK universities" },
            { k: "95%", v: "Visa approval rate" },
          ].map((s) => (
            <div key={s.v} className="card-elegant p-8 text-center">
              <div className="font-display text-5xl font-semibold text-primary">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <WhyChoose />
    </>
  );
}
