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
    tagline: "Bond Protection System",
    description:
      "A complete 2-step professional protocol that multiplies and seals bonds, protecting hair through chemical services for stronger, healthier-looking results.",
    detail: "Sceller Treatment + Sceller Parfaire",
    image: "/products/elan-plex.png",
    steps: "2-Step Protocol",
  },
  {
    id: "pacifique",
    name: "Pacifique",
    tagline: "Cortex System — 3-Step Smoothing Protocol",
    description:
      "A professional cortex-restructuring treatment powered by a plant protein complex of quinoa and rice that prepares, restructures, and seals the hair fibre.",
    detail: "Cortex Restructuring Technology",
    image: "/products/pacifique.png",
    steps: "3-Step Protocol",
  },
  {
    id: "le-fond",
    name: "Le Fond",
    tagline: "Deep Smoothening System",
    description:
      "An intensive professional treatment with keratin and a multi-protein complex that transforms frizzy, unruly hair into a smoother, stronger finish with long-lasting control.",
    detail: "Keratin + Multi-Protein Complex",
    image: "/products/le-fond.png",
    steps: "1000 ml",
  },
  {
    id: "perpetue",
    name: "Perpétue",
    tagline: "Maintenance System",
    description:
      "Shampoo and masque developed to extend the life of smoothening services while maintaining softness, shine, and manageability between treatments.",
    detail: "Pro-Vitamin B5 + Adaptive Protein Complex",
    image: "/products/perpetue.png",
    steps: "Shampoo & Masque",
  },
  {
    id: "calme",
    name: "Calme",
    tagline: "Prep & Nourish System",
    description:
      "A professional cleansing and nourishing duo that removes impurities while maintaining hydration, leaving hair soft, smooth, and manageable.",
    detail: "Oat Protein + Panthenol",
    image: "/products/calme.png",
    steps: "Shampoo & Masque",
  },
  {
    id: "la-buee",
    name: "La Buée",
    tagline: "Daily Nourishing Care",
    description:
      "Gentle everyday shampoo and masque that cleanse without stripping moisture, maintaining softness and natural balance for professional and home use.",
    detail: "Oat Protein + Betaine",
    image: "/products/la-buee.png",
    steps: "Shampoo & Masque",
  },
]
