export const seoConfig = {
  defaultTitle: 'Altraah - Professional LED PCB Manufacturer',
  titleTemplate: '%s | Altraah LED PCB',
  defaultDescription: 'Leading LED PCB manufacturer specializing in Metal Core PCBs (MCPCB), automotive LED boards, and custom circuit design. ISO 9001:2015 certified with 13+ years expertise.',
  siteUrl: 'https://altraah.com',
  siteName: 'Altraah LED PCB',
  defaultImage: '/images/logo/logo.png',
  twitterHandle: '@altraah',
  companyName: 'Altraah',
  foundingYear: 2010,
  location: 'Global LED PCB Manufacturing',
}

export const generatePageMetadata = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  noIndex = false,
  canonical,
}) => {
  const pageTitle = title ? `${title} | ${seoConfig.companyName}` : seoConfig.defaultTitle
  const pageDescription = description || seoConfig.defaultDescription
  const pageImage = image || seoConfig.defaultImage
  const pageUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl
  const pageCanonical = canonical ? `${seoConfig.siteUrl}${canonical}` : pageUrl

  const baseKeywords = [
    'LED PCB manufacturer',
    'Metal Core PCB',
    'MCPCB',
    'LED circuit board',
    'aluminum PCB',
    'copper core PCB',
    'automotive LED PCB',
    'industrial LED board',
    'LED PCB design',
    'thermal management PCB'
  ]

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [...baseKeywords, ...keywords].join(', '),
    openGraph: {
      type,
      locale: 'en_US',
      url: pageUrl,
      siteName: seoConfig.siteName,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: `${title || seoConfig.companyName} - LED PCB Solutions`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: pageCanonical,
    },
  }
}

export const productSEO = {
  automotive: {
    title: 'Automotive LED PCB Solutions',
    description: 'Professional automotive LED PCBs for headlights, tail lights, and interior lighting. High-temperature resistance, automotive-grade materials.',
    keywords: ['automotive LED PCB', 'car LED circuit board', 'automotive lighting PCB', 'headlight LED PCB', 'tail light PCB']
  },
  industrial: {
    title: 'Industrial LED PCB Manufacturing',
    description: 'Heavy-duty industrial LED PCBs for street lighting, high bay lights, and industrial fixtures. Superior heat dissipation and reliability.',
    keywords: ['industrial LED PCB', 'street light PCB', 'high bay LED board', 'industrial lighting PCB', 'heavy duty LED PCB']
  },
  commercial: {
    title: 'Commercial LED PCB Solutions',
    description: 'Commercial-grade LED PCBs for office lighting, retail displays, and architectural applications. Energy-efficient and long-lasting.',
    keywords: ['commercial LED PCB', 'office lighting PCB', 'retail LED board', 'architectural lighting PCB', 'commercial grade PCB']
  },
  consumer: {
    title: 'Consumer Electronics LED PCB',
    description: 'Consumer electronics LED PCBs for gaming peripherals, mood lighting, and entertainment systems. RGB and color-changing capabilities.',
    keywords: ['consumer LED PCB', 'gaming LED board', 'RGB LED PCB', 'mood lighting PCB', 'entertainment LED circuit']
  }
}

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seoConfig.companyName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}${seoConfig.defaultImage}`,
    description: seoConfig.defaultDescription,
    foundingDate: seoConfig.foundingYear,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'English'
    },
    sameAs: [
      // Add social media URLs when available
    ]
  },
  
  manufacturer: {
    '@context': 'https://schema.org',
    '@type': 'Manufacturer',
    name: seoConfig.companyName,
    url: seoConfig.siteUrl,
    description: 'Professional LED PCB manufacturer specializing in Metal Core PCBs and thermal management solutions',
    foundingDate: seoConfig.foundingYear,
    numberOfEmployees: '50+',
    areaServed: 'Worldwide'
  },

  breadcrumb: (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${seoConfig.siteUrl}${item.url}`
    }))
  }),

  product: (product) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    manufacturer: {
      '@type': 'Organization',
      name: seoConfig.companyName
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  })
}