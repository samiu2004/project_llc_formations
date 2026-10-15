export interface StateData {
  id: string;
  name: string;
  code: string;
  stateFilingFee: number;
  annualRecurringFee: number;
  annualFeeNote: string;
  processingDays: string;
  privacyRating: 'High' | 'Maximum' | 'Standard';
  officialRegistryUrl: string;
  registryName: string;
  popularFor: string;
  isRecommended?: boolean;
  bestFitBadges: string[];
  keyPerks: string[];
  potentialDrawbacks: string;
}

export const STATES_DATA: StateData[] = [
  {
    id: 'wyoming',
    name: 'Wyoming',
    code: 'WY',
    stateFilingFee: 100,
    annualRecurringFee: 60,
    annualFeeNote: '$60/yr annual report (based on asset value under $300k)',
    processingDays: '1 - 2 Business Days',
    privacyRating: 'High',
    officialRegistryUrl: 'https://wyobiz.wyo.gov/business/filingsearch.aspx',
    registryName: 'Wyoming WyoBiz SOS Registry',
    popularFor: 'Non-resident founders, Amazon FBA, digital agencies, and remote consultants',
    isRecommended: true,
    bestFitBadges: ['#1 Recommendation', 'Zero State Tax', 'High Member Privacy'],
    keyPerks: [
      'No state personal or corporate income tax',
      'Minimal $60/year annual maintenance fee',
      'Strong charging order protection shielding owners',
      'Owners are not listed in public state database when using our registered agent'
    ],
    potentialDrawbacks: 'Annual report required each year on the anniversary month.'
  },
  {
    id: 'new-mexico',
    name: 'New Mexico',
    code: 'NM',
    stateFilingFee: 50,
    annualRecurringFee: 0,
    annualFeeNote: '$0/yr - No annual reports or franchise tax required',
    processingDays: '2 - 3 Business Days',
    privacyRating: 'Maximum',
    officialRegistryUrl: 'https://enterprise.sos.nm.gov/search/business',
    registryName: 'New Mexico SOS Business Portal',
    popularFor: 'Cost-sensitive founders, zero maintenance burden, completely anonymous LLCs',
    bestFitBadges: ['Lowest State Fee ($50)', '$0 Annual Report Forever', '100% Anonymous'],
    keyPerks: [
      'Lowest official filing fee in the US ($50)',
      'Zero annual report filing requirement forever ($0/year)',
      'State does not collect or display member/manager names on public record',
      'No minimum franchise tax'
    ],
    potentialDrawbacks: 'Less brand prestige than Wyoming or Delaware for VC fundraising.'
  },
  {
    id: 'delaware',
    name: 'Delaware',
    code: 'DE',
    stateFilingFee: 110,
    annualRecurringFee: 300,
    annualFeeNote: '$300/yr flat franchise tax due June 1st',
    processingDays: '2 - 4 Business Days',
    privacyRating: 'Standard',
    officialRegistryUrl: 'https://icis.corp.delaware.gov/ecorp/entitysearch/namesearch.aspx',
    registryName: 'Delaware ICIS Division of Corporations',
    popularFor: 'Startups seeking US angel or venture capital, IP holding companies',
    bestFitBadges: ['VC Gold Standard', 'Court of Chancery', 'Global Investor Prestige'],
    keyPerks: [
      'World-renowned Court of Chancery specializing exclusively in business disputes',
      'Standard corporate structure required by US institutional investors',
      'Zero corporate tax on income earned outside Delaware',
      'High flexibility in member agreements'
    ],
    potentialDrawbacks: 'Higher annual franchise tax ($300/yr flat fee mandatory).'
  },
  {
    id: 'florida',
    name: 'Florida',
    code: 'FL',
    stateFilingFee: 125,
    annualRecurringFee: 138.75,
    annualFeeNote: '$138.75/yr due May 1st (strict penalty for late filing)',
    processingDays: '3 - 5 Business Days',
    privacyRating: 'Standard',
    officialRegistryUrl: 'https://search.sunbiz.org/Inquiry/CorporationSearch/ByName',
    registryName: 'Florida Sunbiz Division of Corporations',
    popularFor: 'Import/export, physical warehouses, Latin America commerce, tourism ventures',
    bestFitBadges: ['Physical Trade Hub', 'Latin America Gateway', 'High Commercial Volume'],
    keyPerks: [
      'Zero state personal income tax',
      'Strategic Atlantic & Caribbean shipping logistical gateway',
      'High banking acceptance and physical branch presence',
      'Immediate Sunbiz electronic verification document availability'
    ],
    potentialDrawbacks: 'Public database lists managers; $400 penalty for filing annual report after May 1.'
  },
  {
    id: 'texas',
    name: 'Texas',
    code: 'TX',
    stateFilingFee: 300,
    annualRecurringFee: 0,
    annualFeeNote: '$0 franchise tax if gross receipts are under $2.47 Million',
    processingDays: '3 - 5 Business Days',
    privacyRating: 'Standard',
    officialRegistryUrl: 'https://mycpa.cpa.state.tx.us/coa/',
    registryName: 'Texas Comptroller & SOS Portal',
    popularFor: 'Construction, estimating, engineering firms, and enterprise B2B',
    bestFitBadges: ['Construction & Trade Leader', 'Zero Personal Tax', 'No Tax Under $2.47M'],
    keyPerks: [
      'No state personal or corporate income tax',
      'No franchise tax owed for businesses grossing under $2.47M annually',
      'Ideal for construction estimating firms contracting directly with Texas builders',
      'Massive domestic market with booming infrastructure investments'
    ],
    potentialDrawbacks: 'Higher initial state filing fee ($300 paid directly to Texas SOS).'
  }
];
