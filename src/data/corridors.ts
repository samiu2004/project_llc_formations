export interface CountryCorridor {
  id: string;
  countryName: string;
  flagEmoji: string;
  heroHeadline: string;
  targetAudience: string;
  bankingPathway: string;
  taxConsiderations: string;
  keyChallengeSolved: string;
  statVerified: string;
  popularStates: string[];
  recommendedIndustry: string;
}

export const COUNTRY_CORRIDORS: CountryCorridor[] = [
  {
    id: 'pakistan',
    countryName: 'Pakistan',
    flagEmoji: '🇵🇰',
    heroHeadline: 'Direct US Bank & Stripe Gateway Access for Pakistani Founders',
    targetAudience: 'Cost Estimators, Remote IT Agencies, Amazon Wholesale Sellers, Upwork/Fiverr Top Rated Freelancers',
    bankingPathway: 'Mercury Bank, Relay Financial, Wise Business with US routing & account number',
    taxConsiderations: 'Single-member non-resident LLCs are treated as disregarded entities; Form 5472 & 1120 pro-forma compliance.',
    keyChallengeSolved: 'Eliminates reliance on risky third-party rented Stripe accounts. Get 100% legal, founder-owned Stripe and US bank accounts without visiting the USA.',
    statVerified: '22+ Verified LLCs Formed for Pakistani Founders',
    popularStates: ['Wyoming', 'New Mexico'],
    recommendedIndustry: 'Construction Cost Estimating & Amazon FBA'
  },
  {
    id: 'uae',
    countryName: 'United Arab Emirates',
    flagEmoji: '🇦🇪',
    heroHeadline: 'US Market Access & Tax Shield for UAE & GCC Founders',
    targetAudience: 'Dubai & Abu Dhabi E-Commerce Sellers, Global Trade Consultancies, Crypto/Fintech Ventures',
    bankingPathway: 'Mercury Bank, Brex, First National Merchant Accounts, USD clearing wires',
    taxConsiderations: 'Zero US federal tax on foreign-source income with no US Effectively Connected Income (ECI).',
    keyChallengeSolved: 'Enables Middle East merchants to sell directly to US consumers and corporate buyers with localized US checkout trust.',
    statVerified: '12+ Verified LLCs Formed for UAE Founders',
    popularStates: ['Wyoming', 'Delaware'],
    recommendedIndustry: 'Shopify E-Commerce & Global B2B'
  },
  {
    id: 'australia',
    countryName: 'Australia',
    flagEmoji: '🇦🇺',
    heroHeadline: 'North American Expansion for Aussie Tech & DTC Brands',
    targetAudience: 'Sydney & Melbourne SaaS Startups, Shopify DTC Exporters, Consulting Practices',
    bankingPathway: 'Relay Financial, Mercury, Airwallex US Dollar accounts',
    taxConsiderations: 'US-Australia Double Taxation Treaty protection; streamlined foreign tax credits with the ATO.',
    keyChallengeSolved: 'Sidestep high foreign exchange conversion penalties by billing US clients in native USD with US domestic ACH payments.',
    statVerified: '9+ Verified LLCs Formed for Australian Founders',
    popularStates: ['Delaware', 'Wyoming'],
    recommendedIndustry: 'SaaS Platforms & B2B Consulting'
  },
  {
    id: 'usa',
    countryName: 'United States',
    flagEmoji: '🇺🇸',
    heroHeadline: 'Affordable Registered Agent & Domestic LLC Protection',
    targetAudience: 'Subcontractors, Estimators, Freelance Developers, Local Small Business Owners',
    bankingPathway: 'Chase, Bank of America, Mercury, Relay, local credit unions',
    taxConsiderations: 'Standard pass-through taxation on Schedule C or partnership Form 1065.',
    keyChallengeSolved: 'Bypasses overpriced corporate formation legal mills ($800+ legal fees) with direct $99 transparent filing and compliant registered agent coverage.',
    statVerified: '11+ Verified LLCs Formed for US Residents',
    popularStates: ['Wyoming', 'Florida', 'Texas'],
    recommendedIndustry: 'Construction Subcontracting & Digital Agencies'
  }
];
