import { UserCheck, Trophy, HeartHandshake, Users, Route } from "lucide-react";

const items = [
  { icon: UserCheck, title: "Experienced Advisors", desc: "Ex-university officers and licensed migration consultants." },
  { icon: Trophy, title: "High Admission Success", desc: "9 in 10 of our shortlisted applicants receive an offer." },
  { icon: HeartHandshake, title: "Personalised Support", desc: "One dedicated advisor from day one to arrival." },
  { icon: Users, title: "Trusted by Hundreds", desc: "500+ students placed across 60+ UK universities." },
  { icon: Route, title: "End-to-End Assistance", desc: "Course, application, funding, visa, housing — all handled." },
];

export function WhyChoose() {
  return (
    <section className="bg-ivory py-24">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Why SunfoConsult
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            The advantage students feel from week one.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We combine deep UK admissions expertise with a personal, high-touch service — so your
            application stands out and your journey feels supported.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <li key={it.title} className="card-elegant flex gap-4 p-6">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <it.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
