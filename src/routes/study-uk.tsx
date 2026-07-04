import { createFileRoute } from "@tanstack/react-router";
import { Destinations } from "@/components/site/Destinations";

export const Route = createFileRoute("/study-uk")({
  head: () => ({
    meta: [
      { title: "Study in the UK — Universities, Cities & Student Visa Guide" },
      {
        name: "description",
        content:
          "Everything international students need to study in the United Kingdom — top universities, cities, tuition, scholarships and the UK Student Visa route.",
      },
      { property: "og:title", content: "Study in the UK — SunfoConsult Guide" },
      {
        property: "og:description",
        content: "Universities, cities, tuition and visa route for international students.",
      },
    ],
  }),
  component: StudyUK,
});

function StudyUK() {
  return (
    <>
      <section className="border-b border-border bg-ivory py-20">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Study in the UK
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold sm:text-6xl">
            Why students choose the United Kingdom.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            World-class universities, 2-year post-study work visa, globally recognised degrees and a
            welcoming environment for international students.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {[
            { t: "Globally ranked", d: "4 of the world's top 10 universities are in the UK." },
            { t: "Post-Study Work", d: "2-year Graduate Route visa to work after your studies." },
            { t: "Shorter degrees", d: "Undergraduate in 3 years, Master's in just 1 year." },
            { t: "Scholarships", d: "Hundreds of scholarships available for international students." },
          ].map((x) => (
            <div key={x.t} className="card-elegant p-7">
              <h3 className="font-display text-xl font-semibold">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <Destinations />
    </>
  );
}
