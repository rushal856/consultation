"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
  business: string;
  url: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = { name: "", email: "", whatsapp: "", business: "", url: "", message: "" };

export function CTAForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  function updateField(field: keyof FormData, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!form.email.trim()) nextErrors.email = "Please enter your active email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (!form.whatsapp.trim()) nextErrors.whatsapp = "Please enter your WhatsApp number.";
    if (!form.business.trim()) nextErrors.business = "Please enter your business name.";
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setIsSubmitting(true);
    window.setTimeout(() => router.push("/thank-you"), 700);
  }

  return (
    <section className="form-section" id="consultation" aria-labelledby="booking-heading">
      <div className="container form-layout">
        <aside className="form-intro">
          <p className="eyebrow">BOOK THE CALL</p>
          <h2 id="booking-heading">A focused conversation about what comes next.</h2>
          <div className="booking-points">
            <div><span aria-hidden="true">✦</span><div><h3>One-to-One Consultation</h3><p>Get direct guidance based on your business, customers, and current marketing.</p></div></div>
            <div><span aria-hidden="true">✦</span><div><h3>Customized Strategy for Your Business</h3><p>Discover what you should focus on next and how AI can support your marketing.</p></div></div>
          </div>
        </aside>
        <form className="consultation-form" noValidate onSubmit={handleSubmit}>
          <div className="form-heading"><p>FREE CONSULTATION</p><h3>Get your free AI marketing roadmap.</h3></div>
          <FormField id="name" label="Full Name" required error={errors.name}><input id="name" name="name" autoComplete="name" value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Enter your full name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} /></FormField>
          <FormField id="email" label="Active Email" required error={errors.email}><input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="Enter your active email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} /></FormField>
          <FormField id="whatsapp" label="WhatsApp Number" required error={errors.whatsapp}><input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" value={form.whatsapp} onChange={(e) => updateField("whatsapp", e.target.value)} placeholder="Enter your WhatsApp number" aria-invalid={Boolean(errors.whatsapp)} aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined} /></FormField>
          <FormField id="business" label="Business Name" required error={errors.business}><input id="business" name="business" autoComplete="organization" value={form.business} onChange={(e) => updateField("business", e.target.value)} placeholder="Enter your business name" aria-invalid={Boolean(errors.business)} aria-describedby={errors.business ? "business-error" : undefined} /></FormField>
          <FormField id="url" label="Website or Facebook URL" error={errors.url}><input id="url" name="url" type="url" value={form.url} onChange={(e) => updateField("url", e.target.value)} placeholder="Paste your website or Facebook URL" /></FormField>
          <FormField id="message" label="Anything You Want to Say" error={errors.message}><textarea id="message" name="message" rows={4} value={form.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Tell us about your business or marketing challenge" /></FormField>
          <button className="button button--primary button--form" type="submit" disabled={isSubmitting}>{isSubmitting ? "Booking your consultation..." : "Get My Free AI Marketing Roadmap"} <span aria-hidden="true">→</span></button>
          <p className="privacy-line"><span aria-hidden="true">⌁</span> We respect your privacy. No spam.</p>
        </form>
      </div>
    </section>
  );
}

function FormField({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return <div className="field"><label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>{children}{error && <p className="field-error" id={`${id}-error`} role="alert">{error}</p>}</div>;
}
