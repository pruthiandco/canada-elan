"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const NAV = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader({ onLogin }: { onLogin: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-semibold tracking-[0.2em] text-primary">
            CANADA
          </span>
          <span className="text-[0.65rem] font-light tracking-[0.55em] text-foreground">
            ÉLAN
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-light tracking-wide text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onLogin}
            className="rounded-sm border border-primary px-5 py-2.5 text-xs font-medium tracking-[0.15em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Professional Login
          </button>
        </nav>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-light tracking-wide text-foreground/80"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false)
                onLogin()
              }}
              className="mt-2 rounded-sm border border-primary px-5 py-3 text-xs font-medium tracking-[0.15em] text-primary uppercase"
            >
              Professional Login
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
