import { MapPin, Mail } from "lucide-react"

const CONTACTS = [
  {
    label: "Sales",
    email: "sales@canadaelan.com",
    note: "Product enquiries, bulk orders & salon pricing",
  },
  {
    label: "Support",
    email: "support@canadaelan.com",
    note: "Order issues, tracking & technical support",
  },
  {
    label: "Info",
    email: "info@canadaelan.com",
    note: "General information, partnerships & collaborations",
  },
]

export function SiteFooter({ onAdmin }: { onAdmin: () => void }) {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_2fr]">
          {/* Brand + address */}
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-3xl font-semibold tracking-[0.2em] text-background">
                CANADA
              </span>
              <span className="text-xs font-light tracking-[0.55em] text-background/70">
                ÉLAN
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-background/60 text-pretty">
              Salon-grade hair care systems crafted to prepare, repair,
              nourish, and transform.
            </p>
            <div className="mt-8 flex items-start gap-3 text-sm font-light text-background/70">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                [Insert Business Address Placeholder]
                <br />
                Canada
              </span>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <p className="mb-8 text-xs font-medium tracking-[0.35em] text-accent uppercase">
              Get in Touch
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {CONTACTS.map((c) => (
                <div key={c.label}>
                  <p className="text-xs font-medium tracking-[0.2em] text-background uppercase">
                    {c.label}
                  </p>
                  <a
                    href={`mailto:${c.email}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm text-background/85 transition-colors hover:text-accent"
                  >
                    <Mail className="size-3.5" />
                    {c.email}
                  </a>
                  <p className="mt-3 text-xs font-light leading-relaxed text-background/50 text-pretty">
                    {c.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-8 sm:flex-row">
          <p className="text-xs font-light tracking-wide text-background/50">
            © {new Date().getFullYear()} Canada Élan. All rights reserved.
          </p>
          <button
            onClick={onAdmin}
            className="text-xs font-light tracking-[0.2em] text-background/30 uppercase transition-colors hover:text-accent"
          >
            Admin Access
          </button>
        </div>
      </div>
    </footer>
  )
}
