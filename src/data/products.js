export const allProducts = [
  {
    id: 1,
    slug: "automotive-led-pcb",
    name: "Automotive LED PCB",
    category: "Automotive",
    price: "$45 - $120",
    image: "https://via.placeholder.com/400x300/1e293b/ffffff?text=Automotive+LED+PCB",
    description: "Designed for automotive LED lighting systems with superior heat management and reliability.",
    specifications: [
      "Aluminum Core Substrate",
      "High Thermal Conductivity", 
      "Automotive Grade Materials",
      "Operating Temp: -40°C to +125°C"
    ],
    applications: ["Headlights", "Tail Lights", "Interior Lighting"],
    powerRating: "Up to 15W per LED",
    layers: "Single/Double Layer",
    minOrder: "100 pcs"
  },
  {
    id: 2,
    slug: "high-power-led-board",
    name: "High-Power LED Board",
    category: "Industrial",
    price: "$80 - $200",
    image: "https://via.placeholder.com/400x300/475569/ffffff?text=High-Power+LED+Board",
    description: "Specialized for high-power LED applications requiring maximum heat dissipation and performance.",
    specifications: [
      "Copper Core Technology",
      "20W+ LED Support",
      "Advanced Heat Sinking",
      "Thermal Resistance: <1°C/W"
    ],
    applications: ["Street Lighting", "Industrial Fixtures", "High Bay Lights"],
    powerRating: "Up to 25W per LED",
    layers: "Single/Double Layer",
    minOrder: "50 pcs"
  },
  {
    id: 3,
    slug: "multi-layer-led-pcb",
    name: "Multi-Layer LED PCB",
    category: "Commercial",
    price: "$60 - $150",
    image: "https://via.placeholder.com/400x300/64748b/ffffff?text=Multi-Layer+LED+PCB",
    description: "Complex multi-layer designs for advanced LED configurations and intelligent control systems.",
    specifications: [
      "8-Layer Design Capability",
      "Precision Component Layout",
      "IPC Class 2 & 3 Standards",
      "Fine Pitch: 0.1mm minimum"
    ],
    applications: ["Smart Lighting", "Display Panels", "Architectural Lighting"],
    powerRating: "Up to 10W per LED",
    layers: "4-8 Layers",
    minOrder: "100 pcs"
  },
  {
    id: 4,
    slug: "flexible-led-pcb",
    name: "Flexible LED PCB",
    category: "Commercial",
    price: "$50 - $130",
    image: "https://via.placeholder.com/400x300/1e293b/ffffff?text=Flexible+LED+PCB",
    description: "Flexible circuit boards for curved and irregular LED installations with excellent durability.",
    specifications: [
      "Polyimide Base Material",
      "Bendable Design",
      "High Flexibility",
      "Operating Temp: -40°C to +105°C"
    ],
    applications: ["Curved Displays", "Wearable Lights", "Decorative Lighting"],
    powerRating: "Up to 8W per LED",
    layers: "Single/Double Layer",
    minOrder: "200 pcs"
  },
  {
    id: 5,
    slug: "rgb-led-pcb",
    name: "RGB LED PCB",
    category: "Consumer Electronics",
    price: "$35 - $90",
    image: "https://via.placeholder.com/400x300/475569/ffffff?text=RGB+LED+PCB",
    description: "Specialized PCBs for RGB LED applications with precise color control and uniform lighting.",
    specifications: [
      "RGB Controller Compatible",
      "Aluminum Core Base",
      "Color Mixing Optimization",
      "PWM Dimming Support"
    ],
    applications: ["Gaming Peripherals", "Mood Lighting", "Entertainment Systems"],
    powerRating: "Up to 12W per LED",
    layers: "Single/Double Layer",
    minOrder: "500 pcs"
  },
  {
    id: 6,
    slug: "cob-led-pcb",
    name: "COB LED PCB",
    category: "Industrial",
    price: "$70 - $180",
    image: "https://via.placeholder.com/400x300/64748b/ffffff?text=COB+LED+PCB",
    description: "Chip-on-Board LED PCBs for high-density lighting with superior thermal management.",
    specifications: [
      "COB Technology",
      "High Density Layout",
      "Excellent Heat Dissipation",
      "Thermal Resistance: <0.8°C/W"
    ],
    applications: ["Spotlights", "Downlights", "Track Lighting"],
    powerRating: "Up to 30W per COB",
    layers: "Single Layer",
    minOrder: "100 pcs"
  }
]

export const featuredProducts = allProducts.slice(0, 3)

export const productCategories = [
  "All",
  "Automotive",
  "Industrial", 
  "Commercial",
  "Consumer Electronics"
]