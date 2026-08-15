export type Product = {
  id: string
  name: string
  tagline: string
  description: string
  detail: string
  image: string
  steps: string
}

export const initialProducts: Product[] = [
  {
    id: "elan-plex",
    name: "Élan Plex",
    tagline: "Bond Sealing & Perfecting System",
    description:
      "A 2-step professional protocol that reconnects broken bonds and seals the cuticle for lasting strength and shine.",
    detail: "Featuring Sceller Parfaire",
    image: "/products/elan-plex.png",
    steps: "2-Step Protocol",
  },
  {
    id: "perpetue",
    name: "Perpétue",
    tagline: "Smoothness & Control",
    description:
      "Shampoo and masque enriched with Pro-Vitamin B5 to tame frizz, restore softness, and deliver enduring smoothness.",
    detail: "With Pro-Vitamin B5",
    image: "/products/perpetue.png",
    steps: "Shampoo & Masque",
  },
  {
    id: "origine",
    name: "Origine",
    tagline: "Preparation & Refinement System",
    description:
      "A refining shampoo that gently purifies and prepares the hair, creating the perfect canvas for advanced treatments.",
    detail: "Refining Shampoo",
    image: "/products/origine.png",
    steps: "Shampoo",
  },
  {
    id: "calme",
    name: "Calme",
    tagline: "Prep & Nourish System",
    description:
      "Shampoo and masque that calm, prepare, and deeply nourish stressed hair before and after professional services.",
    detail: "Prep & Nourish",
    image: "/products/calme.png",
    steps: "Shampoo & Masque",
  },
  {
    id: "le-fond",
    name: "Le Fond",
    tagline: "Deep Smoothening System",
    description:
      "An intensive treatment that penetrates deep into the fiber for a lasting, salon-perfect smooth finish.",
    detail: "Intensive Treatment",
    image: "/products/le-fond.png",
    steps: "Treatment",
  },
  {
    id: "la-buee",
    name: "La Buée",
    tagline: "Daily Nourishing Care",
    description:
      "Everyday shampoo and masque designed to maintain hydration, softness, and vitality between salon visits.",
    detail: "Daily Care",
    image: "/products/la-buee.png",
    steps: "Shampoo & Masque",
  },
  {
    id: "pacifique",
    name: "Pacifique",
    tagline: "Cortex System — 3-Step Smoothing Protocol",
    description:
      "A professional 3-step cortex treatment that restructures and smooths from within for transformative results.",
    detail: "3-Step Protocol",
    image: "/products/pacifique.png",
    steps: "Treatment",
  },
]
