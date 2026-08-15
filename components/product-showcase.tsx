import type { Product } from "@/lib/products"

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-4/5 overflow-hidden bg-muted">
        <img
          src={product.image || "/placeholder.svg"}
          alt={`${product.name} — ${product.tagline}`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-sm bg-background/85 px-3 py-1.5 text-[0.65rem] font-medium tracking-[0.15em] text-primary uppercase backdrop-blur-sm">
          {product.steps}
        </span>
        <span className="absolute right-4 top-4 font-serif text-sm text-foreground/40">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <h3 className="font-serif text-2xl font-medium text-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-medium tracking-wide text-primary">
          {product.tagline}
        </p>
        <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-muted-foreground text-pretty">
          {product.description}
        </p>
        <p className="mt-5 border-t border-border pt-4 text-xs font-medium tracking-[0.2em] text-foreground/70 uppercase">
          {product.detail}
        </p>
      </div>
    </article>
  )
}

export function ProductShowcase({ products }: { products: Product[] }) {
  return (
    <section id="products" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div id="systems" className="mb-16 max-w-2xl scroll-mt-24">
          <p className="mb-5 flex items-center gap-3 text-xs font-medium tracking-[0.35em] text-primary uppercase">
            <span className="h-px w-10 bg-primary" />
            The Collection
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-balance text-foreground lg:text-5xl">
            Professional systems for every stage of care
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground text-pretty">
            Each Canada Élan system is formulated to work in harmony — from
            preparation and repair through to nourishment and lasting
            transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
