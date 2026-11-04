// ============================================================================
// SITE DATA — Edit properties, services, or company info right here!
// Any changes here automatically update across all pages on the site.
// ============================================================================

export const siteInfo = {
  brand: 'BuyOrSaleHouse',
  groupName: 'Easy Realty Real Estate Group',
  shortGroup: 'Easy Realty',
  tagline: 'Residential, Direct Cash Acquisitions & Commercial Real Estate — Easy Realty Real Estate Group',
  phone: 'Coming Soon',
  email: 'inquiries@buyorsalehouse.com',
  office: 'Easy Realty Real Estate Group',
  hours: 'Mon – Sat: 8:00 AM – 7:00 PM',
};

export const properties = [
  {
    id: 'residential-listing-coming-soon',
    title: 'Featured Residential Home — Coming Soon',
    category: 'Residential',
    status: 'Coming Soon',
    featured: true,
    location: 'New Listing Preparing for Market',
    price: 'Coming Soon',
    specs: {
      beds: 'Residential',
      baths: 'Turnkey',
      sqft: 'Details Soon',
    },
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    summary: 'Our upcoming single-family residential listings are currently being finalized. Contact us directly for early access or off-market availability.',
  },
  {
    id: 'commercial-asset-coming-soon',
    title: 'Commercial & Investment Opportunity — Coming Soon',
    category: 'Commercial',
    status: 'Coming Soon',
    featured: true,
    location: 'Commercial & Multi-Family Portfolio',
    price: 'Coming Soon',
    specs: {
      beds: 'Commercial',
      baths: 'Investment',
      sqft: 'Inquire Direct',
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    summary: 'Commercial and value-add investment opportunities through Easy Realty Real Estate Group will be posted here soon. Reach out to join our investor list.',
  },
  {
    id: 'land-development-coming-soon',
    title: 'Land & Development Parcel — Coming Soon',
    category: 'Land & Development',
    status: 'Coming Soon',
    featured: true,
    location: 'Development & Joint-Venture Track',
    price: 'Coming Soon',
    specs: {
      beds: 'Land / Lot',
      baths: 'Development',
      sqft: 'Details Soon',
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    summary: 'New residential homes and development parcels are being onboarded. Have a property to sell or looking for a specific neighborhood? Let us know below.',
  },
];

export const coreCapabilities = [
  {
    number: '01',
    title: 'Direct Cash Acquisitions & Fast Sales',
    audience: 'For Homeowners & Landowners',
    description:
      'Need to sell a house as-is without repairs, showings, or months of waiting? We buy residential homes and land directly with flexible closing timelines.',
    linkText: 'Get a Direct Offer',
    linkHref: '/sell',
    highlights: [
      'No repairs, cleaning, or staging required',
      'Zero hidden fees — straightforward numbers',
      'Close on a fast timeline or on your schedule',
    ],
  },
  {
    number: '02',
    title: 'Curated Residential Sales & Brokerage',
    audience: 'For Home Buyers & Families',
    description:
      'Backed by Easy Realty Real Estate Group, we help families buy and sell quality residential homes with clear guidance from start to finish.',
    linkText: 'View Upcoming Homes',
    linkHref: '/properties',
    highlights: [
      'Move-in ready & thoroughly vetted properties',
      'Backed by Easy Realty Real Estate Group',
      'Early access to upcoming & off-market listings',
    ],
  },
  {
    number: '03',
    title: 'Commercial & Joint-Venture Development',
    audience: 'For Investors & Partners',
    description:
      'From multi-family acquisitions and land assembly to development partnerships, we structure high-conviction real estate deals.',
    linkText: 'Explore Investor Services',
    linkHref: '/services',
    highlights: [
      'Value-add multi-family & mixed-use commercial',
      'Land entitlement & joint-venture partnerships',
      'Disciplined underwriting & deal execution',
    ],
  },
];
