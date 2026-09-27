"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { buildMailto } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = [
  "Apartment",
  "Townhouse",
  "Private Residence",
  "Vacation Home",
  "Hospitality",
  "Commercial",
  "Other",
] as const;

const BUDGETS = [
  "$100k–$250k",
  "$250k–$500k",
  "$500k–$1M",
  "$1M+",
  "Not sure yet",
] as const;

const TIMELINES = [
  "Immediately",
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "Flexible",
] as const;

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  projectType: string;
  budget: string;
  timeline: string;
  details: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  projectType: "",
  budget: "",
  timeline: "",
  details: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [opened, setOpened] = useState(false);

  const mailto = useMemo(
    () =>
      buildMailto({
        to: siteConfig.email,
        subject: `Project enquiry — ${form.firstName || "New"} ${form.lastName || "client"}`.trim(),
        fields: [
          { label: "Name", value: `${form.firstName} ${form.lastName}`.trim() },
          { label: "Email", value: form.email },
          { label: "Phone", value: form.phone },
          { label: "Project location", value: form.location },
          { label: "Project type", value: form.projectType },
          { label: "Approximate budget", value: form.budget },
          { label: "Desired timeline", value: form.timeline },
          { label: "Project details", value: form.details },
        ],
      }),
    [form]
  );

  const valid = form.firstName.trim() !== "" && form.email.trim() !== "";

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (valid) setOpened(true);
      }}
      className="space-y-14"
    >
      <fieldset className="grid gap-x-10 gap-y-12 md:grid-cols-2">
        <legend className="sr-only">Your details</legend>

        <TextField id="first-name" label="First Name *" value={form.firstName} onChange={set("firstName")} autoComplete="given-name" required />
        <TextField id="last-name" label="Last Name" value={form.lastName} onChange={set("lastName")} autoComplete="family-name" />
        <TextField id="email" label="Email *" type="email" value={form.email} onChange={set("email")} autoComplete="email" required />
        <TextField id="phone" label="Phone Number" type="tel" value={form.phone} onChange={set("phone")} autoComplete="tel" />
        <TextField id="location" label="Project Location" value={form.location} onChange={set("location")} placeholder="e.g. West Village, New York" />

        <SelectField
          id="project-type"
          label="Project Type"
          value={form.projectType}
          onChange={set("projectType")}
          options={PROJECT_TYPES}
          placeholder="Select…"
        />
        <SelectField
          id="budget"
          label="Approximate Budget"
          value={form.budget}
          onChange={set("budget")}
          options={BUDGETS}
          placeholder="Select…"
        />
        <SelectField
          id="timeline"
          label="Desired Timeline"
          value={form.timeline}
          onChange={set("timeline")}
          options={TIMELINES}
          placeholder="Select…"
        />
      </fieldset>

      <div>
        <label htmlFor="details" className="field-label">
          Project Details
        </label>
        <textarea
          id="details"
          rows={4}
          value={form.details}
          onChange={set("details")}
          placeholder="Tell us about the property, the scope, and what you're imagining."
          className="field-input resize-none"
        />
      </div>

      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <button type="submit" className="btn-outline min-w-[220px]">
          Send Enquiry
          <ArrowRight className="ml-3 h-3.5 w-3.5" aria-hidden />
        </button>
        <p className="max-w-xs text-[12px] leading-relaxed text-stone-500">
          Submitting opens your email client with the enquiry pre-addressed to the studio — nothing
          is stored on this site.
        </p>
      </div>

      {/* Submission confirm sheet */}
      {opened && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-sent-title"
          className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/40 p-4 backdrop-blur-sm md:items-center"
          onClick={() => setOpened(false)}
        >
          <div
            className="w-full max-w-md bg-ivory p-10 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/20">
              <Check className="h-5 w-5 text-ink" aria-hidden />
            </span>
            <h3 id="enquiry-sent-title" className="serif-display mt-6 text-h3 text-ink">
              Your email client is opening.
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-warm-gray">
              Your enquiry is pre-addressed to {siteConfig.email}. If it didn&apos;t open, email us
              directly — we reply within two business days.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a href={mailto} className="btn-outline w-full">
                Open Email
              </a>
              <button
                type="button"
                onClick={() => setOpened(false)}
                className="text-[12px] font-medium uppercase tracking-wide2 text-stone-500 transition-colors hover:text-ink"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}

/* ------------------------------------------------------------------ */

function TextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        className="field-input"
      />
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: readonly string[];
  placeholder: string;
}) {
  return (
    <div className="relative">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={cn("field-input appearance-none pr-8", value === "" && "text-stone-500/70")}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-4 right-1 h-px w-2 rotate-45 bg-stone-500"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-4 right-3 h-px w-2 -rotate-45 bg-stone-500"
      />
    </div>
  );
}
