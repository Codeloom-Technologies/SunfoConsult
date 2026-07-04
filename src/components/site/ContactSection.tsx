import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(5, "Enter a valid phone").max(30),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

const WHATSAPP = "447700900123";

export function ContactSection() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);

  const upd = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((e2) => ({ ...e2, [k]: "" }));
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      for (const i of parsed.error.issues) fe[i.path[0] as string] = i.message;
      setErrors(fe);
      return;
    }
    setBusy(true);
    await new Promise((r) => setTimeout(r, 500));
    setBusy(false);
    toast.success("Message sent. We'll be in touch shortly.");
    setValues({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <section id="contact" className="py-24">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Get in touch</p>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Talk to a UK admission advisor.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Send a message, call, or chat on WhatsApp. Free 20-minute consultations available every
            weekday.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a href="mailto:hello@sunfoconsult.com" className="flex items-center gap-3 text-foreground hover:text-primary">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <Mail className="h-4 w-4" />
              </span>
              hello@sunfoconsult.com
            </a>
            <a href="tel:+442045250199" className="flex items-center gap-3 text-foreground hover:text-primary">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <Phone className="h-4 w-4" />
              </span>
              +44 20 4525 0199
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20 text-gold">
                <MessageCircle className="h-4 w-4" />
              </span>
              Chat on WhatsApp
            </a>
            <div className="flex items-start gap-3 text-muted-foreground">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              <span>12 Bloomsbury Square<br />London WC1A 2LP, United Kingdom</span>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="SunfoConsult office location"
              src="https://www.google.com/maps?q=Bloomsbury+Square+London&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          onSubmit={submit}
          noValidate
          className="card-elegant space-y-5 p-8"
        >
          <div className="space-y-1.5">
            <Label htmlFor="c-name">Full name</Label>
            <Input id="c-name" value={values.name} onChange={upd("name")} />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="c-email">Email</Label>
              <Input id="c-email" type="email" value={values.email} onChange={upd("email")} />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="c-phone">Phone</Label>
              <Input id="c-phone" value={values.phone} onChange={upd("phone")} />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="c-msg">How can we help?</Label>
            <Textarea id="c-msg" rows={5} value={values.message} onChange={upd("message")} />
            {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
          </div>
          <Button type="submit" disabled={busy} className="btn-gold w-full rounded-full text-base">
            {busy ? "Sending..." : "Send message"}
          </Button>
          <p className="text-xs text-muted-foreground">
            By submitting, you agree to our{" "}
            <a href="#" className="underline underline-offset-2">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </section>
  );
}
