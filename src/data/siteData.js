// ============================================================================
// SITE DATA — Edit properties, flat-fee pricing, services, or company info here!
// Any changes here automatically update across all pages on the site.
// ============================================================================

export const siteInfo = {
  brand: 'BuyOrSaleHouse',
  groupName: 'Easy Realty Real Estate Services',
  shortGroup: 'Easy Realty',
  region: 'Tampa Bay & Surrounding Florida Markets',
  tagline: 'Full-Service Flat-Fee Home Selling, Direct Acquisitions & Commercial Real Estate — Easy Realty',
  phone: '(727) 643-6173',
  email: 'russellsunshinerealty@gmail.com',
  office: 'Tampa Bay Area • Easy Realty Real Estate Services',
  hours: 'Mon – Sat: 8:00 AM – 7:00 PM',
  portrait: '/images/realtor-portrait.png',
};

export const flatFeeTiers = [
  {
    range: 'Under $150k',
    fee: '$2,900',
    sublabel: 'Total Fee',
    highlight: false,
  },
  {
    range: '$150k – $250k',
    fee: '$2,900 – $4,500',
    sublabel: 'Total Fee',
    highlight: false,
  },
  {
    range: '$250k – $350k',
    fee: '$4,500 – $5,900',
    sublabel: 'Total Fee',
    highlight: false,
  },
  {
    range: '$350k – $500k',
    fee: '$5,900 – $6,900',
    sublabel: 'Total Fee',
    highlight: true,
  },
  {
    range: '$500k – $750k',
    fee: '$6,900 – $9,800',
    sublabel: 'Total Fee',
    highlight: true,
  },
  {
    range: '$750k – $1M',
    fee: '$9,800 – $13,900',
    sublabel: 'Total Fee',
    highlight: false,
  },
  {
    range: '$1M+ Luxury & Commercial',
    fee: 'At Request',
    sublabel: 'Custom Flat-Fee Quote',
    highlight: false,
  },
];

export const flatFeeBreakdown = [
  {
    amount: '$1,500',
    title: 'Upfront Marketing Retainer',
    detail: 'Paid at signing to launch full-scale marketing and listing preparation.',
  },
  {
    amount: '$225',
    title: 'Professional Media Fee',
    detail: 'Covers high-end architectural photography, listing media, and visual assets.',
  },
  {
    amount: 'Balance',
    title: 'Success Fee at Closing',
    detail: 'Remaining balance of your flat fee is paid only when the home successfully closes.',
  },
];

export const fullServicePillars = [
  {
    title: 'Professional Media',
    description:
      'High-end photography, videos, and listing media designed to make your home stand out from the competition.',
  },
  {
    title: 'Massive Exposure',
    description:
      'Full MLS listing plus automatic syndication to Zillow, Realtor.com, and all major real estate platforms.',
  },
  {
    title: 'Total Representation',
    description:
      'Expert price negotiation, contract paperwork, buyer coordination, and closing support from start to finish.',
  },
  {
    title: 'Zero Hidden Fees',
    description:
      'No junk admin fees, no technology surcharges, and no hidden brokerage add-ons at the closing table.',
  },
];

export const properties = [
  {
    id: 'residential-listing-coming-soon',
    title: 'Tampa Bay Residential Listing — Coming Soon',
    category: 'Residential',
    status: 'Coming Soon',
    featured: true,
    location: 'Tampa Bay Area • Residential Portfolio',
    price: 'Coming Soon',
    specs: {
      beds: 'Single-Family',
      baths: 'Turnkey',
      sqft: 'Launching Soon',
    },
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    summary: 'Upcoming single-family residential homes represented by Easy Realty are being prepared for market. Contact us for early access or off-market availability.',
  },
  {
    id: 'commercial-asset-coming-soon',
    title: 'Commercial & Multi-Family Asset — Coming Soon',
    category: 'Commercial',
    status: 'Coming Soon',
    featured: true,
    location: 'Tampa Bay Commercial Corridor',
    price: 'Coming Soon',
    specs: {
      beds: 'Commercial',
      baths: 'Investment',
      sqft: 'Inquire Direct',
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    summary: 'Commercial and value-add investment opportunities through Easy Realty Real Estate Services will be posted here soon. Call or email to join our investor list.',
  },
  {
    id: 'land-development-coming-soon',
    title: 'Land & Development Parcel — Coming Soon',
    category: 'Land & Development',
    status: 'Coming Soon',
    featured: true,
    location: 'Florida Growth & Development Track',
    price: 'Coming Soon',
    specs: {
      beds: 'Land / Lot',
      baths: 'Development',
      sqft: 'Details Soon',
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    summary: 'New residential homes and development parcels are being onboarded. Have a property to sell or looking for a specific neighborhood? Reach out directly.',
  },
];

export const coreCapabilities = [
  {
    number: '01',
    title: 'Flat-Fee Full-Service Home Selling',
    audience: 'People Over Percentages',
    description:
      'Traditional percentage commissions rise when home values rise. Our transparent flat-fee model helps Tampa Bay sellers keep thousands more in equity while receiving 100% full-service representation from listing to closing.',
    linkText: 'See Flat-Fee Pricing Tiers',
    linkHref: '/sell',
    highlights: [
      'Flat fees starting at $2,900 — save $10,000+ in equity',
      'Full MLS, Zillow & Realtor.com exposure + pro media',
      '6-Month Confidence Guarantee ($750 retainer refund)',
    ],
  },
  {
    number: '02',
    title: 'Direct Cash Sales & Fast Closings',
    audience: 'For As-Is Property Owners',
    description:
      'Need to sell immediately without listing on the MLS or making repairs? We also structure direct cash offers and rapid closings tailored to your timeline.',
    linkText: 'Request an Offer or Valuation',
    linkHref: '/sell#seller-intake',
    highlights: [
      'Sell 100% as-is with zero repairs or staging',
      'Compare a flat-fee MLS listing vs. an instant cash offer',
      'No hidden brokerage surcharges or surprise fees',
    ],
  },
  {
    number: '03',
    title: 'Residential Buying, Commercial & Land',
    audience: 'For Buyers & Investors',
    description:
      'Whether your family is searching for a move-in-ready Tampa Bay home or you are an investor acquiring multi-family and development land, Easy Realty delivers end-to-end execution.',
    linkText: 'Explore Properties & Services',
    linkHref: '/services',
    highlights: [
      'Dedicated buyer representation & off-market access',
      'Value-add commercial & multi-family acquisitions',
      'Land assembly & joint-venture development partnerships',
    ],
  },
];
