export default function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Altraah",
  "url": "https://altraah.com",
  "logo": "https://altraah.com/images/logo/logo.png",
  "description": "Leading LED PCB manufacturer specializing in Metal Core PCBs (MCPCB), automotive LED boards, and custom circuit design. ISO 9001:2015 certified with 13+ years expertise.",
  "foundingDate": "2010",
  "numberOfEmployees": "50+",
  "areaServed": "Worldwide",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Global"
  },
  "sameAs": [
    // Add social media URLs when available
  ]
}

export const manufacturerSchema = {
  "@context": "https://schema.org",
  "@type": "Manufacturer",
  "name": "Altraah",
  "url": "https://altraah.com",
  "description": "Professional LED PCB manufacturer specializing in Metal Core PCBs and thermal management solutions",
  "foundingDate": "2010",
  "numberOfEmployees": "50+",
  "areaServed": "Worldwide",
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": "LED PCB Manufacturing Services",
      "description": "Custom LED PCB design and manufacturing including Metal Core PCBs, automotive LED boards, and thermal management solutions"
    }
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Altraah LED PCB",
  "url": "https://altraah.com",
  "description": "Leading LED PCB manufacturer with 13+ years expertise in Metal Core PCBs and thermal-efficient solutions",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://altraah.com/products?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://altraah.com${item.url}`
  }))
})

export const productSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "category": product.category,
  "manufacturer": {
    "@type": "Organization",
    "name": "Altraah"
  },
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Altraah"
    }
  },
  "additionalProperty": product.specifications?.map(spec => ({
    "@type": "PropertyValue",
    "name": "Specification",
    "value": spec
  }))
})