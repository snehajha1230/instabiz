"use client";

import EditorialSubheading from "@/components/EditorialSubheading";
import { SectionHeader } from "@/components/SectionShell";
import { COMPANY } from "@/lib/data";
import { Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: COMPANY.address.join(", "),
  },
  {
    icon: Phone,
    label: "Call",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: Globe,
    label: "Web",
    value: COMPANY.website,
    href: `https://${COMPANY.website}`,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-medium text-white outline-none transition-all placeholder:text-white/30 focus:border-accent/50 focus:bg-white/10 focus:ring-2 focus:ring-accent/15";

  return (
    <section
      id="connect"
      data-section="5"
      className="grain relative overflow-hidden bg-navy py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-12" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]"
        >
          <div className="border-b border-white/8 px-8 py-8 sm:px-10 sm:py-10">
            <SectionHeader
              label="Connect"
              title="Let's Engineer Your Next Machine"
              light
              accentLabel
              align="left"
              compact
            />
            <EditorialSubheading className="!mt-4 sm:!mt-5">
              Reach out for{" "}
              <span className="text-accent">consultations</span>,{" "}
              <span className="text-accent">custom requirements</span>, or{" "}
              <span className="text-accent">after-sales support</span>. We
              respond{" "}
              <span className="italic text-white">within one business day</span>.
            </EditorialSubheading>
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="space-y-6 border-b border-white/8 px-8 py-8 sm:px-10 sm:py-10 lg:border-r lg:border-b-0">
              <p className="text-[0.65rem] font-bold tracking-[0.2em] text-accent uppercase">
                Reach Us
              </p>

              <div className="space-y-5">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <p className="text-[0.6rem] font-bold tracking-[0.2em] text-white/35 uppercase">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="block text-sm font-medium leading-[1.7] text-slate-300 transition-colors hover:text-white"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium leading-[1.7] text-slate-300">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="px-8 py-8 sm:px-10 sm:py-10">
              {submitted ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center gap-5 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent"
                  >
                    <Send className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-semibold text-white">Message Sent</h3>
                  <p className="max-w-xs text-sm leading-[1.8] text-slate-400">
                    Our engineering team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-[0.65rem] font-bold tracking-[0.2em] text-accent uppercase">
                      Project Inquiry
                    </p>
                    <p className="text-sm text-slate-400">
                      Tell us about your production requirements.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-[0.65rem] font-bold tracking-[0.15em] text-white/45 uppercase"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-[0.65rem] font-bold tracking-[0.15em] text-white/45 uppercase"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-[0.65rem] font-bold tracking-[0.15em] text-white/45 uppercase"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={inputClass}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="block text-[0.65rem] font-bold tracking-[0.15em] text-white/45 uppercase"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className={inputClass}
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-[0.65rem] font-bold tracking-[0.15em] text-white/45 uppercase"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="Describe your requirements..."
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    Send Inquiry
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
