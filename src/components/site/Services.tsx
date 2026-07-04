import {
  GraduationCap,
  BookOpen,
  Award,
  StampIcon,
  FileCheck2,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: GraduationCap,
    title: "University Admission",
    desc: "Personalised university matching and end-to-end application management for top UK institutions.",
  },
  {
    icon: BookOpen,
    title: "Course Selection",
    desc: "Choose the right undergraduate or postgraduate course aligned to your goals and background.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    desc: "Identify and apply for scholarships, bursaries, and funding you actually qualify for.",
  },
  {
    icon: StampIcon,
    title: "Visa Assistance",
    desc: "Prepare a compliant, high-approval Student Visa (Route 8) application with expert review.",
  },
  {
    icon: FileCheck2,
    title: "Document Review",
    desc: "Statement of purpose, references, transcripts — reviewed and polished by admission specialists.",
  },
  {
    icon: Home,
    title: "Accommodation Support",
    desc: "Vetted student housing options near your campus, plus arrival and settling-in guidance.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            What we do
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Everything you need to study in the UK
          </h2>
          <p className="mt-4 text-muted-foreground">
            One dedicated advisor. Six focused services. A clear path from your first enquiry to
            your first day of classes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-elegant p-7"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
