import london from "@/assets/city-london.jpg";
import manchester from "@/assets/city-manchester.jpg";
import birmingham from "@/assets/city-birmingham.jpg";
import leeds from "@/assets/city-leeds.jpg";
import glasgow from "@/assets/city-glasgow.jpg";
import liverpool from "@/assets/city-liverpool.jpg";

const cities = [
  { name: "London", img: london, tagline: "World-leading universities, unmatched career networks." },
  { name: "Manchester", img: manchester, tagline: "Vibrant student city with a global research reputation." },
  { name: "Birmingham", img: birmingham, tagline: "Affordable living and a huge international community." },
  { name: "Leeds", img: leeds, tagline: "Top Russell Group teaching in a lively city centre." },
  { name: "Glasgow", img: glasgow, tagline: "Historic Scottish universities with generous scholarships." },
  { name: "Liverpool", img: liverpool, tagline: "Welcoming waterfront city with strong industry links." },
];

export function Destinations() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Study destinations
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
              Top UK cities to build your future.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            From London's global campuses to Scotland's historic universities — we place students
            across every major UK study destination.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <article
              key={c.name}
              className="group relative overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={c.img}
                alt={`${c.name} skyline`}
                loading="lazy"
                width={800}
                height={1024}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <h3 className="font-display text-2xl font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm text-primary-foreground/85">{c.tagline}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
