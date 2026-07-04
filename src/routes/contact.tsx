import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SunfoConsult — Free UK Admission Consultation" },
      {
        name: "description",
        content:
          "Contact SunfoConsult by email, phone or WhatsApp. Book a free 20-minute consultation with a UK admission advisor.",
      },
      { property: "og:title", content: "Contact SunfoConsult" },
      {
        property: "og:description",
        content: "Book a free UK admission consultation with our advisors.",
      },
    ],
  }),
  component: () => (
    <>
      <section className="border-b border-border bg-ivory py-16">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</p>
          <h1 className="mt-3 font-display text-5xl font-semibold">Let's plan your UK journey.</h1>
        </div>
      </section>
      <ContactSection />
    </>
  ),
});
