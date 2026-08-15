"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ProductShowcase } from "@/components/product-showcase"
import { SiteFooter } from "@/components/site-footer"
import { AdminPanel } from "@/components/admin/admin-panel"
import { initialProducts, type Product } from "@/lib/products"

export default function Page() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [adminOpen, setAdminOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader onLogin={() => setAdminOpen(true)} />
      <Hero />
      <ProductShowcase products={products} />
      <SiteFooter onAdmin={() => setAdminOpen(true)} />
      <AdminPanel
        open={adminOpen}
        onClose={() => setAdminOpen(false)}
        products={products}
        onUpdate={setProducts}
      />
    </main>
  )
}
