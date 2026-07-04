import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does the UK application process take?",
    a: "Most applications take 6–10 weeks from initial consultation to offer letter. We recommend starting 8–12 months before your intended intake.",
  },
  {
    q: "Do I need IELTS to study in the UK?",
    a: "Most universities require IELTS 6.0–7.0, but many offer waivers for English-medium instruction. We'll advise you based on your target course.",
  },
  {
    q: "How much does it cost to study in the UK?",
    a: "Undergraduate tuition typically ranges £11,000–£38,000/year. Living costs are £12,006/year outside London, £15,078 in London (UKVI 2025).",
  },
  {
    q: "Can I work while studying?",
    a: "Yes — Student Visa holders can work up to 20 hours/week during term time and full-time during holidays.",
  },
  {
    q: "What is the Graduate Route visa?",
    a: "A 2-year post-study work visa (3 years for PhDs) that lets you work in the UK after graduation without employer sponsorship.",
  },
  {
    q: "Do you charge for the initial consultation?",
    a: "No — your first 20-minute consultation is completely free. We only charge once we begin your application service.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — UK Study & Student Visa Questions Answered" },
      {
        name: "description",
        content:
          "Answers to common questions about UK university admission, tuition costs, IELTS, Student Visa and the Graduate Route.",
      },
      { property: "og:title", content: "SunfoConsult FAQ" },
      { property: "og:description", content: "UK study and visa questions answered." },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <>
      <section className="border-b border-border bg-ivory py-16">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">FAQ</p>
          <h1 className="mt-3 font-display text-5xl font-semibold">
            Answers to the questions students ask us most.
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
