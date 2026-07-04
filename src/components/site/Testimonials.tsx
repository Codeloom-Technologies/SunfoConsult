import { Star, Quote } from "lucide-react";
import s1 from "@/assets/student-1.jpg";
import s2 from "@/assets/student-2.jpg";
import s3 from "@/assets/student-3.jpg";

const testimonials = [
  {
    name: "Adaeze O.",
    course: "MSc Data Science, University of Manchester",
    img: s1,
    quote:
      "SunfoConsult made the whole process feel effortless. My advisor handled everything from my SOP to my CAS — I just focused on preparing for my move.",
  },
  {
    name: "Rahul S.",
    course: "MBA, Warwick Business School",
    img: s2,
    quote:
      "I received offers from three of my top-choice schools. The scholarship guidance alone saved me over £8,000 in my first year.",
  },
  {
    name: "Mei L.",
    course: "BSc Architecture, UCL",
    img: s3,
    quote:
      "From portfolio reviews to visa prep, the team was there at every stage. I'm now living in London and loving my course.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-primary py-24 text-primary-foreground">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Success stories
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Students who now call the UK home.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-gold/50 hover:bg-white/10"
            >
              <Quote className="h-8 w-8 text-gold" />
              <blockquote className="mt-4 text-sm leading-relaxed text-primary-foreground/90">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-gold/60"
                />
                <figcaption>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-primary-foreground/70">{t.course}</div>
                </figcaption>
              </div>
              <div className="mt-4 flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
