import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

const STORAGE_KEY = "sunfo_lead_captured_v1";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;
const COMPANY_ID = import.meta.env.VITE_COMPANY_ID as string;

const leadSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60),
  lastName: z.string().trim().min(1, "Last name is required").max(60),
  email: z.string().trim().email("Enter a valid email address").max(200),
  phoneNumber: z
    .string()
    .trim()
    .min(6, "Enter a valid phone number")
    .max(30, "Enter a valid phone number")
    .regex(/^[+\d][\d\s()-]*$/, "Enter a valid phone number"),
});

type Errors = Partial<Record<keyof z.infer<typeof leadSchema>, string>>;

export function LeadModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({ firstName: "", lastName: "", email: "", phoneNumber: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY)) return;
    const delay = 5000 + Math.floor(Math.random() * 3000);
    const t = window.setTimeout(() => setOpen(true), delay);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open && !submitted) {
      const t = window.setTimeout(() => firstInputRef.current?.focus(), 120);
      return () => window.clearTimeout(t);
    }
  }, [open, submitted]);

  const update = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = leadSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/admissions/lead`, {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          "company-id": COMPANY_ID,
        },
        body: JSON.stringify({ ...parsed.data, preferences: {} }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...parsed.data, capturedAt: new Date().toISOString() }),
      );
      setSubmitted(true);
      toast.success("Thanks! An advisor will be in touch shortly.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // Prevent closing until the form has been submitted successfully.
  const handleOpenChange = (next: boolean) => {
    if (!next && !submitted) return;
    setOpen(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-w-md"
        showCloseButton={submitted}
        onEscapeKeyDown={(e) => {
          if (!submitted) e.preventDefault();
        }}
        onPointerDownOutside={(e) => {
          if (!submitted) e.preventDefault();
        }}
        onInteractOutside={(e) => {
          if (!submitted) e.preventDefault();
        }}
      >
        {submitted ? (
          <div className="py-4 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
            <h3 className="mt-4 font-display text-2xl font-semibold">You're all set</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Thanks, {values.firstName}. One of our UK admission advisors will reach out within
              one business day.
            </p>
            <Button className="btn-gold mt-6 w-full rounded-full" onClick={() => setOpen(false)}>
              Continue browsing
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">
                Start Your UK Study Journey
              </DialogTitle>
              <DialogDescription>
                Complete this short form and one of our admission advisors will contact you with
                personalized guidance on studying in the UK.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName">First name *</Label>
                  <Input
                    id="firstName"
                    ref={firstInputRef}
                    value={values.firstName}
                    onChange={update("firstName")}
                    aria-invalid={!!errors.firstName}
                    autoComplete="given-name"
                  />
                  {errors.firstName && (
                    <p className="text-xs text-destructive">{errors.firstName}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName">Last name *</Label>
                  <Input
                    id="lastName"
                    value={values.lastName}
                    onChange={update("lastName")}
                    aria-invalid={!!errors.lastName}
                    autoComplete="family-name"
                  />
                  {errors.lastName && <p className="text-xs text-destructive">{errors.lastName}</p>}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={update("email")}
                  aria-invalid={!!errors.email}
                  autoComplete="email"
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phoneNumber">Phone number *</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={values.phoneNumber}
                  onChange={update("phoneNumber")}
                  aria-invalid={!!errors.phoneNumber}
                  autoComplete="tel"
                  placeholder="+44 20 1234 5678"
                />
                {errors.phoneNumber && (
                  <p className="text-xs text-destructive">{errors.phoneNumber}</p>
                )}
              </div>

              <p className="flex items-start gap-2 rounded-md bg-muted/60 p-3 text-xs text-muted-foreground">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  We use your details only to contact you about UK study opportunities. Read our{" "}
                  <a href="#" className="underline underline-offset-2 hover:text-foreground">
                    Privacy Policy
                  </a>
                  . You can opt out anytime.
                </span>
              </p>

              <Button
                type="submit"
                disabled={submitting}
                className="btn-gold w-full rounded-full text-base"
              >
                {submitting ? "Submitting..." : "Continue"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
