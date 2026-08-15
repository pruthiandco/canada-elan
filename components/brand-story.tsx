const PILLARS = [
  {
    title: "Discipline",
    body: "Formulas developed to Canadian standards of reliability, delivering predictable, repeatable results with every service.",
  },
  {
    title: "Performance",
    body: "Carefully selected ingredients that work together to prepare, nourish, repair, and maintain healthy, beautiful hair.",
  },
  {
    title: "Consistency",
    body: "Professional systems you can trust — proven performance over exaggerated claims, service after service.",
  },
]

export function BrandStory() {
  return (
    <section id="about" className="bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative order-last lg:order-first">
            <div className="overflow-hidden rounded-sm bg-background">
              <img
                src="/group-shot.png"
                alt="The full Canada Élan professional hair care collection"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-sm bg-primary px-8 py-6 text-primary-foreground sm:block lg:-right-6">
              <p className="font-serif text-3xl font-medium leading-none">2026</p>
              <p className="mt-2 text-[0.65rem] font-medium tracking-[0.25em] uppercase">
                The Canadian Standard
              </p>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.35em] text-primary uppercase">
              <span className="h-px w-10 bg-primary" />
              Built on Consistency
            </p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-balance text-foreground lg:text-5xl">
              Welcome to the Canadian standard in professional hair care
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground text-pretty">
              Canada Élan was created for salons that refuse to choose between
              quality and affordability. Inspired by Canadian standards of
              discipline and reliability, every formula is developed to deliver
              predictable, repeatable results — whether you are beginning a
              professional smoothening service or maintaining results at home.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {PILLARS.map((p) => (
                <div key={p.title}>
                  <h3 className="font-serif text-xl font-medium text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground text-pretty">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
