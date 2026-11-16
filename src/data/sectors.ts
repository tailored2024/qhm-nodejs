export interface SectorMandate {
  category: string;
  headline: string;
  details: string;
}

export interface SectorItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  heroHeadline: string;
  intro: string;
  positioning: string;
  mandates: SectorMandate[];
  metaDescription: string;
}

export const sectorsData: SectorItem[] = [
  {
    id: "energy-and-infrastructure",
    slug: "energy-and-infrastructure",
    number: "01",
    title: "Energy & Infrastructure",
    eyebrow: "Sector-Specific Advisory",
    heroHeadline: "Energy & Infrastructure",
    intro:
      "Our practice areas are structured around the needs of multinational corporations operating in or entering Saudi Arabia. We focus on high-value corporate mandates requiring regulatory precision and strategic execution.",
    positioning:
      "QHM advises multinational corporations, financial institutions, government-related entities, and leading international law firms on complex regulatory, transactional, and tax matters in Saudi Arabia, delivering seamless local execution aligned with global standards.",
    mandates: [
      {
        category: "GOVERNMENT & STRATEGIC ADVISORY",
        headline:
          "Advised a government-related entity on regulatory and commercial structuring.",
        details:
          "Supported strategic initiatives involving procurement, regulatory compliance, and large-scale project structuring.",
      },
      {
        category: "JOINT VENTURES & FOREIGN INVESTMENT",
        headline:
          "Structured a cross-border joint venture between a multinational investor and a Saudi partner.",
        details:
          "Advised on governance frameworks, shareholder arrangements, and regulatory compliance, enabling market entry into a highly regulated sector.",
      },
      {
        category: "CROSS-BORDER TRANSACTIONS",
        headline:
          "Acted as Saudi counsel to international law firms on cross-border transactions.",
        details:
          "Advised on Saudi law aspects of multi-jurisdictional deals, ensuring seamless coordination and local regulatory compliance.",
      },
    ],
    metaDescription:
      "Energy & Infrastructure - Sector-Specific Advisory | QHM Law Firm",
  },
  {
    id: "healthcare-and-pharmaceuticals",
    slug: "healthcare-and-pharmaceuticals",
    number: "02",
    title: "Healthcare & Pharmaceuticals",
    eyebrow: "Sector-Specific Advisory",
    heroHeadline: "Healthcare & Pharmaceuticals",
    intro:
      "Our practice areas are structured around the needs of multinational corporations operating in or entering Saudi Arabia. We focus on high-value corporate mandates requiring regulatory precision and strategic execution.",
    positioning:
      "QHM advises multinational corporations, financial institutions, government-related entities, and leading international law firms on complex regulatory, transactional, and tax matters in Saudi Arabia, delivering seamless local execution aligned with global standards.",
    mandates: [
      {
        category: "CORPORATE M&A (FLAGSHIP)",
        headline:
          "Advised on the acquisition of a Saudi education platform by an international professional services firm.",
        details:
          "Acted as local counsel on a landmark transaction involving sector-specific regulatory approvals, legal due diligence, and transaction structuring within the Kingdom.",
      },
      {
        category: "CROSS-BORDER TRANSACTIONS",
        headline:
          "Acted as Saudi counsel to international law firms on cross-border transactions.",
        details:
          "Advised on Saudi law aspects of multi-jurisdictional deals, ensuring seamless coordination and local regulatory compliance.",
      },
      {
        category: "EMPLOYMENT & SAUDISATION",
        headline:
          "Advised a multinational employer on workforce restructuring and Saudisation compliance.",
        details:
          "Provided strategic counsel on employment regulations, localisation requirements, and risk mitigation.",
      },
    ],
    metaDescription:
      "Healthcare & Pharmaceuticals - Sector-Specific Advisory | QHM Law Firm",
  },
  {
    id: "aviation-and-maritime",
    slug: "aviation-and-maritime",
    number: "03",
    title: "Aviation & Maritime",
    eyebrow: "Sector-Specific Advisory",
    heroHeadline: "Aviation & Maritime",
    intro:
      "Our practice areas are structured around the needs of multinational corporations operating in or entering Saudi Arabia. We focus on high-value corporate mandates requiring regulatory precision and strategic execution.",
    positioning:
      "QHM advises multinational corporations, financial institutions, government-related entities, and leading international law firms on complex regulatory, transactional, and tax matters in Saudi Arabia, delivering seamless local execution aligned with global standards.",
    mandates: [
      {
        category: "CROSS-BORDER TRANSACTIONS",
        headline:
          "Acted as Saudi counsel to international law firms on cross-border transactions.",
        details:
          "Advised on Saudi law aspects of multi-jurisdictional deals, ensuring seamless coordination and local regulatory compliance.",
      },
      {
        category: "HIGH-VALUE COMMERCIAL LITIGATION",
        headline:
          "Represented an international corporation in a complex commercial dispute before Saudi courts.",
        details:
          "Led litigation strategy, evidentiary development, and court proceedings in a multi-jurisdictional matter with significant financial exposure.",
      },
    ],
    metaDescription:
      "Aviation & Maritime - Sector-Specific Advisory | QHM Law Firm",
  },
  {
    id: "real-estate-and-development",
    slug: "real-estate-and-development",
    number: "04",
    title: "Real Estate & Development",
    eyebrow: "Sector-Specific Advisory",
    heroHeadline: "Real Estate & Development",
    intro:
      "Our practice areas are structured around the needs of multinational corporations operating in or entering Saudi Arabia. We focus on high-value corporate mandates requiring regulatory precision and strategic execution.",
    positioning:
      "QHM advises multinational corporations, financial institutions, government-related entities, and leading international law firms on complex regulatory, transactional, and tax matters in Saudi Arabia, delivering seamless local execution aligned with global standards.",
    mandates: [
      {
        category: "REAL ESTATE & FOREIGN OWNERSHIP",
        headline:
          "Advised international investors on real estate structuring and ownership in Saudi Arabia.",
        details:
          "Provided legal guidance under evolving foreign ownership regulations, including structuring, compliance, and risk mitigation.",
      },
      {
        category: "JOINT VENTURES & FOREIGN INVESTMENT",
        headline:
          "Structured a cross-border joint venture between a multinational investor and a Saudi partner.",
        details:
          "Advised on governance frameworks, shareholder arrangements, and regulatory compliance, enabling market entry into a highly regulated sector.",
      },
      {
        category: "HIGH-VALUE COMMERCIAL LITIGATION",
        headline:
          "Represented an international corporation in a complex commercial dispute before Saudi courts.",
        details:
          "Led litigation strategy, evidentiary development, and court proceedings in a multi-jurisdictional matter with significant financial exposure.",
      },
    ],
    metaDescription:
      "Real Estate & Development - Sector-Specific Advisory | QHM Law Firm",
  },
  {
    id: "it-and-telecom",
    slug: "it-and-telecom",
    number: "05",
    title: "IT & Telecom",
    eyebrow: "Sector-Specific Advisory",
    heroHeadline: "IT & Telecom",
    intro:
      "Our practice areas are structured around the needs of multinational corporations operating in or entering Saudi Arabia. We focus on high-value corporate mandates requiring regulatory precision and strategic execution.",
    positioning:
      "QHM advises multinational corporations, financial institutions, government-related entities, and leading international law firms on complex regulatory, transactional, and tax matters in Saudi Arabia, delivering seamless local execution aligned with global standards.",
    mandates: [
      {
        category: "MARKET ENTRY & FINTECH REGULATORY",
        headline:
          "Advised a global European fintech provider on its Saudi market entry.",
        details:
          "Structured licensing strategy and regulatory engagement with the Saudi Central Bank (SAMA), ensuring full compliance with financial services frameworks and operational readiness in the Kingdom.",
      },
      {
        category: "INTELLECTUAL PROPERTY DISPUTES",
        headline:
          "Represented a global corporation in a high-profile intellectual property dispute in Saudi Arabia.",
        details:
          "Handled complex technical evidence and cross-border legal issues, achieving a successful outcome in a sensitive and high-value matter.",
      },
      {
        category: "FINANCIAL SERVICES REGULATORY",
        headline:
          "Advised an international financial institution on Saudi regulatory compliance and structuring.",
        details:
          "Provided strategic guidance on licensing, operational structuring, and ongoing compliance within SAMA regulatory frameworks.",
      },
    ],
    metaDescription: "IT & Telecom - Sector-Specific Advisory | QHM Law Firm",
  },
];
