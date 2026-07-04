import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — UK Admission, Visa & Scholarship Support" },
      {
        name: "description",
        content:
          "End-to-end UK study services: university admission, course selection, scholarships, visa assistance, document review, and accommodation support.",
      },
      { property: "og:title", content: "SunfoConsult Services — UK Admission, Visa, Scholarships" },
      {
        property: "og:description",
        content: "Six focused services to take you from enquiry to your first day of UK classes.",
      },
    ],
  }),
  component: () => (
    <>
      <section className="border-b border-border bg-ivory py-16">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Services</p>
          <h1 className="mt-3 font-display text-5xl font-semibold">
            Complete support for your UK study journey.
          </h1>
        </div>
      </section>
      <Services />
    </>
  ),
});
