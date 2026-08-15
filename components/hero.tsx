export function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Model with glossy, healthy, professionally styled hair"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pt-20 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.35em] text-primary uppercase">
            <span className="h-px w-10 bg-primary" />
            Professional Hair Care
          </p>
          <h1 className="font-serif text-5xl font-medium leading-[1.05] text-balance text-foreground sm:text-6xl lg:text-7xl">
            Prepare, Repair, Nourish,{" "}
            <span className="italic text-primary">and Transform.</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-muted-foreground text-pretty">
            Supporting salon professionals with products they can trust —
            engineered systems for every stage of the service.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-xs font-medium tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Explore the Systems
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm border border-foreground/20 px-8 py-4 text-xs font-medium tracking-[0.2em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
            >
              Salon Enquiries
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
