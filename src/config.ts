/**
 * UD LLC Formations (United Discount Marketing LLC) - Central Configuration
 * Primary domain: udmarketing.online
 */

export const CONFIG = {
  // WhatsApp Lead Routing Number (Single configuration constant as requested)
  WHATSAPP_PHONE: "923000000000",
  
  // Agency Identity
  BRAND_NAME: "UD LLC Formations",
  LEGAL_NAME: "United Discount Marketing LLC",
  DOMAIN: "udmarketing.online",
  SUPPORT_EMAIL: "support@udmarketing.online",
  OFFICE_HOURS: "24/7 Priority International Support (US, UAE, AU, PK)",
  VERIFIED_FORMATIONS_COUNT: "50+",
  
  // Direct Social / Outreach Links
  WHATSAPP_DISPLAY: "+92 300 0000000",
} as const;

export interface WhatsAppInquiryParams {
  state?: string;
  industry?: string;
  entityName?: string;
  packageTier?: string;
  countryCorridor?: string;
  customNote?: string;
}

/**
 * Builds a dynamic WhatsApp consultation link pre-filled with the founder's selections.
 */
export function buildWhatsAppLink(params?: WhatsAppInquiryParams): string {
  const phone = CONFIG.WHATSAPP_PHONE;
  
  if (!params) {
    const defaultMsg = encodeURIComponent(
      `Hello UD LLC Formations Team,\n\nI would like a free consultation regarding US LLC formation for my business.\n\nCould you please advise on process, timelines, and banking requirements?`
    );
    return `https://wa.me/${phone}?text=${defaultMsg}`;
  }

  const lines = [
    `Hello UD LLC Formations (udmarketing.online),\n`,
    `I would like a free consultation for forming my US LLC:`,
    params.entityName ? `• Proposed Entity Name: ${params.entityName}` : `• Proposed Entity Name: (Checking Name Availability)`,
    params.state ? `• Preferred State: ${params.state}` : `• Preferred State: Wyoming (Recommended)`,
    params.industry ? `• Industry Sector: ${params.industry}` : `• Industry: General E-Commerce / Remote Services`,
    params.countryCorridor ? `• Country Corridor: ${params.countryCorridor}` : `• Country Corridor: International Non-Resident`,
    params.packageTier ? `• Target Package: ${params.packageTier}` : `• Target Package: Growth Non-Resident Bestseller ($199)`,
  ];

  if (params.customNote) {
    lines.push(`• Notes: ${params.customNote}`);
  }

  lines.push(`\nPlease confirm the total state fees, processing time, and Mercury/Relay bank setup instructions.`);

  const fullText = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${phone}?text=${fullText}`;
}
