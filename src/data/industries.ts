export interface IndustryPlaybook {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  iconName: string;
  primaryBenefit: string;
  w9AndTaxRole: string;
  bankingNeeds: string;
  checklist: string[];
  recommendedState: string;
  recommendedStateReason: string;
  expertTip: string;
}

export const INDUSTRIES_DATA: IndustryPlaybook[] = [
  {
    id: 'construction-cost-estimating',
    title: 'Construction & Cost Estimation LLCs',
    subtitle: 'W-9 & Domestic ACH Payment Readiness for Remote Estimators',
    tagline: 'Win high-ticket US general contractor contracts with a verified US entity and bank-ready W-9.',
    iconName: 'Hammer',
    primaryBenefit: 'General contractors and commercial builders in the US will not wire funds overseas or risk 30% IRS backup withholding. A verified US LLC with an EIN allows you to furnish an official Form W-9 and receive domestic same-day ACH wire transfers.',
    w9AndTaxRole: 'Furnish clean W-9 with official US employer identification number (EIN) and US registered address.',
    bankingNeeds: 'US Business Checking (Mercury/Relay) with routing number for domestic direct deposit and ACH payments.',
    checklist: [
      'Official Articles of Organization certified by the Secretary of State',
      'IRS CP 575 Confirmation Notice with verified EIN',
      'Bank Resolution document authorizing remote account opening',
      'Form W-9 pre-filled for US General Contractor vendor onboarding',
      'Pre-formatted subcontractor contract agreements'
    ],
    recommendedState: 'Wyoming or Texas',
    recommendedStateReason: 'Wyoming offers strict privacy and low annual costs ($60/yr); Texas is unbeatable if contracting heavily with Texas infrastructure builders.',
    expertTip: 'Always provide your US W-9 accompanied by your Certificate of Good Standing to immediately eliminate general contractor compliance doubts.'
  },
  {
    id: 'amazon-fba-wholesale',
    title: 'Amazon FBA Wholesale',
    subtitle: 'State Reseller Certificates & Authorized Distributor Invoicing',
    tagline: 'Ungate tier-1 brands and purchase wholesale inventory exempt from state sales tax.',
    iconName: 'ShoppingBag',
    primaryBenefit: 'US wholesale distributors (e.g. UNFI, Petra, D&H) require a verified US Business Entity and a State Resale Exemption Certificate (Sales Tax Permit). Without this, wholesale suppliers refuse to open accounts or charge retail sales tax on every inventory purchase.',
    w9AndTaxRole: 'State Resale Certificate registration allowing tax-exempt wholesale purchasing for inventory resale on Amazon.',
    bankingNeeds: 'Business checking with high debit limit for supplier POs + Amazon Seller Central disbursement link.',
    checklist: [
      'US LLC Formation with expedited filing',
      'IRS EIN letter for Amazon Seller Central US marketplace verification',
      'State Resale Exemption Certificate (Sales Tax License)',
      'US Commercial Business Address with mail scanning for supplier credit checks',
      'DUNS Number assistance for brand ungating and distributor credit terms'
    ],
    recommendedState: 'Wyoming',
    recommendedStateReason: 'Wyoming has no corporate tax, low annual fees ($60), and very clean, fast resale permit issuance for e-commerce wholesale.',
    expertTip: 'When applying to US brand distributors, use a custom domain business email matching your LLC name on your resale certificate for instant approval.'
  },
  {
    id: 'shopify-stripe-ecommerce',
    title: 'Shopify & Stripe Non-Resident Setups',
    subtitle: 'Unrestricted US Payment Processing & Instant Gateway Trust',
    tagline: 'Stop suffering from PayPal account freezes and unverified payment gateways.',
    iconName: 'CreditCard',
    primaryBenefit: 'Non-resident e-commerce operators who use VPNs or rent illicit Stripe accounts face sudden balance holds and permanent merchant bans. With our legal US LLC formation, you register a genuine, verified Stripe US and Shopify Payments account backed by an official IRS CP 575 EIN.',
    w9AndTaxRole: 'Direct legal ownership of merchant gateway without intermediaries; Form 1099-K compliance.',
    bankingNeeds: 'Mercury or Relay bank integrated with Stripe for automated daily payouts in USD.',
    checklist: [
      'Registered US LLC with verified state filing number',
      'Official IRS CP 575 / 147C EIN Confirmation Notice',
      'Operating Agreement designating non-resident single-member ownership',
      'US Business Address and phone utility verification documentation',
      'Direct Stripe and Shopify Payments step-by-step onboarding protocol'
    ],
    recommendedState: 'Wyoming or New Mexico',
    recommendedStateReason: 'Zero state corporate tax on non-resident e-commerce sales, low initial outlay, and maximum privacy.',
    expertTip: 'Always wait until your official IRS CP 575 EIN letter is verified in the IRS databases (usually 7–10 days from issuance) before submitting to Stripe to avoid automated mismatch flags.'
  },
  {
    id: 'b2b-agencies',
    title: 'B2B Marketing & Software Agencies',
    subtitle: 'USD Retainer Invoicing, Contractor Shields & Client Trust',
    tagline: 'Sign enterprise US clients who demand US contracts, US invoicing, and liability protection.',
    iconName: 'Briefcase',
    primaryBenefit: 'Enterprise American clients rarely sign high-value retainers ($5k-$20k/month) with foreign entities due to cross-border jurisdiction fears. A US LLC lets you sign domestic Master Services Agreements (MSAs), bill via US ACH, and safeguard personal assets behind the corporate veil.',
    w9AndTaxRole: 'Furnish Form W-9 to avoid 30% IRS foreign backup withholding on professional agency fees.',
    bankingNeeds: 'Multi-currency USD/EUR accounts with virtual cards for software subscriptions (GSuite, AWS, HubSpot).',
    checklist: [
      'Comprehensive Multi-Member or Single-Member Operating Agreement',
      'US Registered Agent and prestigious business mailing address',
      'IRS EIN CP 575 for client vendor management systems (Coupa, Bill.com)',
      'Customized Non-Disclosure Agreement (NDA) and MSA contract templates',
      'Banking integration with Quickbooks / Xero for clean reconciliation'
    ],
    recommendedState: 'Wyoming',
    recommendedStateReason: 'Exceptional charging order asset protection shields you from frivolous client liability while keeping recurring overhead to only $60/yr.',
    expertTip: 'Add "A US Limited Liability Company" on your agency proposal footers alongside your US address to boost contract close rates by over 40%.'
  }
];
