import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Students Placed at Top UK Universities" },
      {
        name: "description",
        content:
          "Read SunfoConsult student success stories — real applicants who won offers, scholarships and visas to study at leading UK universities.",
      },
      { property: "og:title", content: "SunfoConsult Success Stories" },
      { property: "og:description", content: "Real UK admission wins from our students." },
    ],
  }),
  component: () => (
    <>
      <section className="border-b border-border bg-ivory py-16">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Success stories
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold">
            Real students. Real UK offers.
          </h1>
        </div>
      </section>
      <Testimonials />
    </>
  ),
});
