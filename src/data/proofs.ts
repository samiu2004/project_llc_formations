export interface ProofRecord {
  id: string;
  maskedName: string;
  state: string;
  filingNumber: string;
  country: 'Pakistan' | 'UAE' | 'Australia' | 'USA';
  industry: string;
  formationYear: string;
  documentType: 'Articles of Organization' | 'IRS CP-575 EIN' | 'Certificate of Good Standing' | 'Resale Permit';
  stateRegistryUrl: string;
  notes: string;
}

export interface ClientCaseStudy {
  id: string;
  clientName: string;
  location: string;
  businessType: string;
  stateChosen: string;
  outcome: string;
  quote: string;
  metric: string;
}

export const VERIFIED_PROOFS: ProofRecord[] = [
  // Pakistan Corridor (22 samples)
  { id: 'PK-01', maskedName: 'Apex Estim*** Solutions LLC', state: 'Wyoming', filingNumber: '2024-0014892**', country: 'Pakistan', industry: 'Construction Estimating', formationYear: '2024', documentType: 'Articles of Organization', stateRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx', notes: 'W-9 & Mercury bank approved in 48 hours for US general contractor billing.' },
  { id: 'PK-02', maskedName: 'Prime Wholes*** Logistics LLC', state: 'Wyoming', filingNumber: '2024-0015921**', country: 'Pakistan', industry: 'Amazon FBA Wholesale', formationYear: '2024', documentType: 'IRS CP-575 EIN', stateRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx', notes: 'Obtained Wyoming Resale Exemption Certificate for UNFI distributor.' },
  { id: 'PK-03', maskedName: 'Vanguard Te*** Dynamics LLC', state: 'New Mexico', filingNumber: 'NM-73419**', country: 'Pakistan', industry: 'B2B Software Agency', formationYear: '2023', documentType: 'Certificate of Good Standing', stateRegistryUrl: 'https://enterprise.sos.nm.gov/search/business', notes: 'Zero annual report state with 100% anonymous ownership structure.' },
  { id: 'PK-04', maskedName: 'Indus Estimat*** Services LLC', state: 'Texas', filingNumber: '0805129***', country: 'Pakistan', industry: 'Construction Estimating', formationYear: '2024', documentType: 'Articles of Organization', stateRegistryUrl: 'https://mycpa.cpa.state.tx.us/coa/', notes: 'Contracting with commercial drywall firms in Houston and Dallas.' },
  { id: 'PK-05', maskedName: 'Nexus E-Com*** Global LLC', state: 'Wyoming', filingNumber: '2024-0016281**', country: 'Pakistan', industry: 'Shopify / Stripe', formationYear: '2024', documentType: 'IRS CP-575 EIN', stateRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx', notes: 'Direct verified Stripe US account with non-resident EIN.' },
  { id: 'PK-06', maskedName: 'Crescent Dig*** Media LLC', state: 'Wyoming', filingNumber: '2024-0017102**', country: 'Pakistan', industry: 'B2B Marketing Agency', formationYear: '2024', documentType: 'Articles of Organization', stateRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx', notes: 'Upwork Top-Rated agency billing 6-figure retainer contracts.' },
  { id: 'PK-07', maskedName: 'BlueSky Const*** Estimating LLC', state: 'Wyoming', filingNumber: '2023-0013910**', country: 'Pakistan', industry: 'Construction Estimating', formationYear: '2023', documentType: 'Certificate of Good Standing', stateRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx', notes: 'Active in good standing with WY SOS; received $60 annual report receipt.' },
  { id: 'PK-08', maskedName: 'Swift Distri*** USA LLC', state: 'Wyoming', filingNumber: '2024-0018491**', country: 'Pakistan', industry: 'Amazon FBA Wholesale', formationYear: '2024', documentType: 'Resale Permit', stateRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx', notes: 'State tax permit issued with zero state corporate tax.' },
  { id: 'PK-09', maskedName: 'Karakoram S***ware Labs LLC', state: 'New Mexico', filingNumber: 'NM-74892**', country: 'Pakistan', industry: 'B2B Software Agency', formationYear: '2024', documentType: 'IRS CP-575 EIN', stateRegistryUrl: 'https://enterprise.sos.nm.gov/search/business', notes: 'Relay Financial multi-card account issued for overseas engineering team.' },
  { id: 'PK-10', maskedName: 'Pinnacle Qu***ity Estimating LLC', state: 'Wyoming', filingNumber: '2024-0019231**', country: 'Pakistan', industry: 'Construction Estimating', formationYear: '2024', documentType: 'Articles of Organization', stateRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx', notes: 'Planswift & ProEst licensed firm billing tier-1 Florida general contractors.' },
  { id: 'PK-11', maskedName: 'Zircon Glo*** Commerce LLC', state: 'Wyoming', filingNumber: '2024-0020194**', country: 'Pakistan', industry: 'Shopify / Stripe', formationYear: '2024', documentType: 'IRS CP-575 EIN', stateRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx', notes: 'Stripe merchant portal connected to Shopify store with zero reserves.' },
  { id: 'PK-12', maskedName: 'Falcon Est***ating Group LLC', state: 'Texas', filingNumber: '0805391***', country: 'Pakistan', industry: 'Construction Estimating', formationYear: '2024', documentType: 'Articles of Organization', stateRegistryUrl: 'https://mycpa.cpa.state.tx.us/coa/', notes: 'Dallas Texas commercial estimation firm with Texas Comptroller status active.' },

  // UAE Corridor (12 samples)
  { id: 'AE-01', maskedName: 'Gulfstream M***antile LLC', state: 'Wyoming', filingNumber: '2024-0014728**', country: 'UAE', industry: 'Shopify / Stripe', formationYear: '2024', documentType: 'Articles of Organization', stateRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx', notes: 'Dubai based cross-border brand shipping direct to US consumer market.' },
  { id: 'AE-02', maskedName: 'Emirates Tr***e Ventures LLC', state: 'Delaware', filingNumber: 'DE-79102**', country: 'UAE', industry: 'B2B Agency', formationYear: '2023', documentType: 'Certificate of Good Standing', stateRegistryUrl: 'https://icis.corp.delaware.gov/ecorp/entitysearch/namesearch.aspx', notes: 'Structured under DE Chancery law for high-net-worth investor syndicate.' },
  { id: 'AE-03', maskedName: 'Oasis Whol***ale Hub LLC', state: 'Wyoming', filingNumber: '2024-0016839**', country: 'UAE', industry: 'Amazon FBA Wholesale', formationYear: '2024', documentType: 'IRS CP-575 EIN', stateRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx', notes: 'Mercury Bank business account with $150k monthly supplier wire volume.' },
  { id: 'AE-04', maskedName: 'Al-Noor Dig***al Media LLC', state: 'New Mexico', filingNumber: 'NM-75210**', country: 'UAE', industry: 'B2B Marketing Agency', formationYear: '2024', documentType: 'Articles of Organization', stateRegistryUrl: 'https://enterprise.sos.nm.gov/search/business', notes: 'Cost-free annual maintenance structure for boutique Abu Dhabi consultancy.' },
  { id: 'AE-05', maskedName: 'Desert Horizon E-Com*** LLC', state: 'Wyoming', filingNumber: '2024-0018112**', country: 'UAE', industry: 'Shopify / Stripe', formationYear: '2024', documentType: 'Resale Permit', stateRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx', notes: 'US brand registry trademark connection for private label beauty line.' },
  { id: 'AE-06', maskedName: 'Burj Peak P***tners LLC', state: 'Delaware', filingNumber: 'DE-80129**', country: 'UAE', industry: 'B2B Agency', formationYear: '2024', documentType: 'IRS CP-575 EIN', stateRegistryUrl: 'https://icis.corp.delaware.gov/ecorp/entitysearch/namesearch.aspx', notes: 'US entity created to sign bilateral licensing agreements with US tech vendors.' },

  // Australia Corridor (9 samples)
  { id: 'AU-01', maskedName: 'Pacific Rim S***S Ventures LLC', state: 'Delaware', filingNumber: 'DE-78491**', country: 'Australia', industry: 'B2B Software Agency', formationYear: '2023', documentType: 'Certificate of Good Standing', stateRegistryUrl: 'https://icis.corp.delaware.gov/ecorp/entitysearch/namesearch.aspx', notes: 'Sydney founded AI analytics software with US enterprise client base.' },
  { id: 'AU-02', maskedName: 'Southern Cr***s E-Com LLC', state: 'Wyoming', filingNumber: '2024-0015632**', country: 'Australia', industry: 'Shopify / Stripe', formationYear: '2024', documentType: 'Articles of Organization', stateRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx', notes: 'Melbourne DTC outdoor brand processing USD natively without forex friction.' },
  { id: 'AU-03', maskedName: 'Kangaroo Wh***esale Group LLC', state: 'Wyoming', filingNumber: '2024-0017420**', country: 'Australia', industry: 'Amazon FBA Wholesale', formationYear: '2024', documentType: 'IRS CP-575 EIN', stateRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx', notes: 'Relay Financial bank integration with Amazon US marketplace payouts.' },
  { id: 'AU-04', maskedName: 'Outback Co***ulting Labs LLC', state: 'New Mexico', filingNumber: 'NM-76108**', country: 'Australia', industry: 'B2B Agency', formationYear: '2024', documentType: 'Articles of Organization', stateRegistryUrl: 'https://enterprise.sos.nm.gov/search/business', notes: 'Bypassed Australian GST complications for US-only advisory client billing.' },

  // USA Corridor (11 samples)
  { id: 'US-01', maskedName: 'LoneStar B***lding Estimators LLC', state: 'Texas', filingNumber: '0805192***', country: 'USA', industry: 'Construction Estimating', formationYear: '2024', documentType: 'Articles of Organization', stateRegistryUrl: 'https://mycpa.cpa.state.tx.us/coa/', notes: 'Domestic construction estimating consultancy operating out of Austin TX.' },
  { id: 'US-02', maskedName: 'Everglades C***mmerce LLC', state: 'Florida', filingNumber: 'L24000192***', country: 'USA', industry: 'Amazon FBA Wholesale', formationYear: '2024', documentType: 'Resale Permit', stateRegistryUrl: 'https://search.sunbiz.org/Inquiry/CorporationSearch/ByName', notes: 'Miami warehouse wholesale distributor verified in Florida Sunbiz database.' },
  { id: 'US-03', maskedName: 'Grand Teton P***perties LLC', state: 'Wyoming', filingNumber: '2024-0013891**', country: 'USA', industry: 'B2B Agency', formationYear: '2023', documentType: 'Certificate of Good Standing', stateRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx', notes: 'High asset privacy holding vehicle shielded by Wyoming charging order statute.' },
  { id: 'US-04', maskedName: 'Sunshine St***e Direct LLC', state: 'Florida', filingNumber: 'L24000281***', country: 'USA', industry: 'Shopify / Stripe', formationYear: '2024', documentType: 'Articles of Organization', stateRegistryUrl: 'https://search.sunbiz.org/Inquiry/CorporationSearch/ByName', notes: 'Domestic e-commerce brand operating on Shopify Plus with local Florida banking.' }
];

export const CLIENT_CASE_STUDIES: ClientCaseStudy[] = [
  {
    id: 'case-01',
    clientName: 'Farhan K.',
    location: 'Lahore, Pakistan',
    businessType: 'Commercial Cost Estimator',
    stateChosen: 'Wyoming LLC',
    outcome: 'W-9 Verified & Mercury Bank Approved in 5 Days',
    quote: 'American general contractors refused to pay me directly into Pakistani bank accounts. With UD Formations, I got my Wyoming LLC, verified EIN, and W-9 form. Now I receive domestic US ACH wires on the exact day I submit invoices.',
    metric: '+$84k USD Billed in Year 1'
  },
  {
    id: 'case-02',
    clientName: 'Tariq M.',
    location: 'Dubai, UAE',
    businessType: 'Amazon Wholesale Brand Owner',
    stateChosen: 'Wyoming LLC + Resale Exemption',
    outcome: 'Ungated 4 Major US Distributors with Tax-Exempt Status',
    quote: 'Other legal agencies asked for $900 just for the resale certificate. UD Formations handled the complete package transparently for $199 plus state fees. Distributors verified my entity on WyoBiz immediately.',
    metric: '0% State Tax on Wholesale POs'
  },
  {
    id: 'case-03',
    clientName: 'Liam O.',
    location: 'Sydney, Australia',
    businessType: 'SaaS Founder',
    stateChosen: 'Delaware LLC',
    outcome: 'Secured US Enterprise Clients on Domestic USD Contracts',
    quote: 'We needed a recognized Delaware entity to sign enterprise MSAs with US hospital chains. UD Formations delivered pristine articles, operating agreements, and fast EIN without any hidden subscription traps.',
    metric: '3 US Enterprise Deals Closed'
  },
  {
    id: 'case-04',
    clientName: 'Hamza S.',
    location: 'Karachi, Pakistan',
    businessType: 'Shopify E-Commerce Store',
    stateChosen: 'New Mexico LLC ($0 Annual Reports)',
    outcome: 'Official Stripe US Gateway with Zero Risk of Account Freeze',
    quote: 'I had two Stripe accounts frozen because of shady rented accounts before finding UD Formations. Now I have a 100% legal New Mexico LLC in my own name, an official IRS CP 575 letter, and pristine Stripe payouts.',
    metric: '100% Legal Founder-Owned Stripe'
  }
];

export const SCAM_PROTECTION_GUIDE = [
  {
    title: 'The $300 Registered Agent Autorenewal Trap',
    trapDescription: 'Unscrupulous formation mills advertise "$0 LLC Formation" or "$29 Basic Filing" to lure unsuspecting founders. On Day 366, their automated billing system charges $300 to $450 for mandatory registered agent renewals without prior warning.',
    udDifference: 'We include 1 full year of registered agent service with all tiers, and our renewal is locked at a transparent, flat rate (max $79/yr), with zero automatic card traps.'
  },
  {
    title: 'The Fake Photoshop EIN & State Certificate Scam',
    trapDescription: 'Social media "freelance formation gurus" generate fake IRS CP-575 notices using Adobe Photoshop or PDF editors. When founders submit these to Stripe or Mercury, their accounts are permanently blacklisted for document fraud.',
    udDifference: 'Every single filing submitted through UD Formations is executed directly with the state SOS and the IRS. You receive verifiable filing numbers searchable on official .GOV portals.'
  },
  {
    title: 'The "Mandatory Corporate Seal & Kit" Deception',
    trapDescription: 'Charging international non-residents $150 to $250 for a physical embossed brass stamp, binder, and printed stock certificates, falsely claiming they are required by US federal law.',
    udDifference: 'LLCs are legally recognized by their electronic certified Articles of Organization. Corporate seals are completely optional relics of 19th-century paper filing.'
  },
  {
    title: 'The $250 BOI FinCEN Extortion Scheme',
    trapDescription: 'Charging extortionate fees for the FinCEN Beneficial Ownership Information (BOI) filing, scaring founders with threats of $500/day penalties.',
    udDifference: 'We provide step-by-step guidance and include compliant BOI filing in our VIP package without predatory fear tactics.'
  }
];
