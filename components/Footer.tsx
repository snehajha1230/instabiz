import Marquee from "@/components/effects/Marquee";
import { COMPANY, PRODUCTS } from "@/lib/data";
import { ExternalLink, Globe, Link2, Mail, MapPin, Phone, Share2 } from "lucide-react";
import Image from "next/image";

const SOCIAL = [
  { icon: Link2, label: "LinkedIn" },
  { icon: Share2, label: "Social" },
  { icon: Globe, label: "Web" },
  { icon: ExternalLink, label: "External" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6 bg-[#060f1c]">
      <div className="border-b border-white/6 py-8">
        <Marquee speed="slow">
          <div className="flex gap-20 px-10">
            {PRODUCTS.map((p) => (
              <span
                key={p.name}
                className="shrink-0 text-sm font-semibold tracking-[0.14em] text-white/18 uppercase"
              >
                {p.name}
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-8">
            <Image
              src={COMPANY.logo}
              alt={`${COMPANY.name} logo`}
              width={150}
              height={52}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="max-w-sm text-sm leading-[1.9] text-slate-500">
              Precision sheet metal machinery engineered for modern industrial
              manufacturing. Bangalore, India.
            </p>
            <div className="flex gap-4">
              {SOCIAL.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/4 text-slate-500 transition-all hover:border-accent/35 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-[0.65rem] font-bold tracking-[0.2em] text-white/28 uppercase">
              Machines
            </p>
            <ul className="space-y-4">
              {PRODUCTS.slice(0, 4).map((p) => (
                <li key={p.name}>
                  <span className="text-sm leading-relaxed text-slate-500">{p.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-[0.65rem] font-bold tracking-[0.2em] text-white/28 uppercase">
              Reach Us
            </p>
            <ul className="space-y-5">
              <li className="flex gap-4 text-sm leading-relaxed text-slate-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Bangalore – 560048
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="flex gap-4 text-sm text-slate-500 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex gap-4 text-sm text-slate-500 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-10 sm:flex-row">
          <p className="text-xs text-slate-600">© 2025 {COMPANY.name}. All Rights Reserved.</p>
          <p className="text-[0.6rem] font-bold tracking-[0.25em] text-slate-700 uppercase">
            Precision · Durability · Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
