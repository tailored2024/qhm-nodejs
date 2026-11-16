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
  summary: string;
  description: string;
  keyFocusAreas: string[];
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
    summary:
      "Power, renewables, conventional energy, and large-scale public-private infrastructure projects across Saudi Arabia.",
    description:
      "QHM advises multinational companies, regional developers, and government-related entities across power, renewables, conventional energy, and large-scale infrastructure projects. We provide strategic advisory on market entry, foreign investment structuring, regulatory compliance, public-private partnerships, and high-value project execution under Saudi Arabia's evolving regulatory framework.",
    keyFocusAreas: [
      "Power, renewables, and conventional energy projects",
      "Public-Private Partnerships (PPP) and concession frameworks",
      "Procurement, regulatory compliance, and project structuring",
      "Cross-border joint ventures and foreign investment structuring",
      "Government-related entity strategic and commercial advisory",
    ],
    mandates: [
      {
        category: "Government & Strategic Advisory",
        headline: "Advised a government-related entity on regulatory and commercial structuring.",
        details:
          "Supported strategic initiatives involving procurement, regulatory compliance, and large-scale project structuring.",
      },
      {
        category: "Joint Ventures & Foreign Investment",
        headline: "Structured a cross-border joint venture between a multinational investor and a Saudi partner.",
        details:
          "Advised on governance frameworks, shareholder arrangements, and regulatory compliance, enabling market entry into a highly regulated sector.",
      },
      {
        category: "Cross-Border Transactions",
        headline: "Acted as Saudi counsel to international law firms on cross-border transactions.",
        details:
          "Advised on Saudi law aspects of multi-jurisdictional deals, ensuring seamless coordination and local regulatory compliance.",
      },
    ],
    metaDescription:
      "QHM legal advisory for Energy & Infrastructure: power, renewables, PPP concessions, and large-scale infrastructure projects in Saudi Arabia.",
  },
  {
    id: "healthcare-and-pharmaceuticals",
    slug: "healthcare-and-pharmaceuticals",
    number: "02",
    title: "Healthcare & Pharmaceuticals",
    eyebrow: "Sector-Specific Advisory",
    heroHeadline: "Healthcare & Pharmaceuticals",
    summary:
      "Regulatory compliance for healthcare providers, pharmaceutical licensing, health tech, and medical practice regulations.",
    description:
      "QHM advises multinational healthcare organizations, pharmaceutical manufacturers, and regional health investors navigating Saudi Arabia's stringent regulatory and licensing environment. We provide counsel on foreign investment structuring, Ministry of Health and SFDA compliance, acquisitions, cross-border distribution arrangements, and sector-specific commercial matters.",
    keyFocusAreas: [
      "Regulatory compliance for healthcare providers and clinical facilities",
      "Pharmaceutical licensing, SFDA compliance, and market authorization",
      "Healthcare M&A, joint ventures, and strategic foreign investment",
      "Health tech and digital medical regulatory compliance",
      "Cross-border commercial distribution and supply agreements",
    ],
    mandates: [
      {
        category: "Corporate M&A",
        headline: "Advised on the acquisition of a Saudi education platform by an international professional services firm.",
        details:
          "Acted as local counsel on a landmark transaction involving sector-specific regulatory approvals, legal due diligence, and transaction structuring within the Kingdom.",
      },
      {
        category: "Cross-Border Transactions",
        headline: "Acted as Saudi counsel to international law firms on cross-border transactions.",
        details:
          "Advised on Saudi law aspects of multi-jurisdictional deals, ensuring seamless coordination and local regulatory compliance.",
      },
      {
        category: "Employment & Executive Matters",
        headline: "Advised a multinational employer on workforce restructuring and Saudisation compliance.",
        details:
          "Provided strategic counsel on employment regulations, localisation requirements, and risk mitigation.",
      },
    ],
    metaDescription:
      "QHM legal advisory for Healthcare & Pharmaceuticals: regulatory compliance, pharmaceutical licensing, health tech, and healthcare transactions in Saudi Arabia.",
  },
  {
    id: "aviation-and-maritime",
    slug: "aviation-and-maritime",
    number: "03",
    title: "Aviation & Maritime",
    eyebrow: "Sector-Specific Advisory",
    heroHeadline: "Aviation & Maritime",
    summary:
      "GACA regulatory compliance, commercial aircraft leasing, maritime logistics, transport concessions, and port operations.",
    description:
      "QHM possesses deep, specialized experience in Saudi Arabia's aviation and maritime sectors. Our team has advised on landmark aviation licensing before the General Authority of Civil Aviation (GACA), drafted and negotiated aircraft lease, purchase, and management agreements, and supported international transport, maritime logistics, and concession operators.",
    keyFocusAreas: [
      "General Authority of Civil Aviation (GACA) regulatory compliance and licensing",
      "Aircraft sale, purchase, leasing, and management agreements",
      "Maritime logistics, transport concessions, and port operations",
      "Cross-border commercial contracts and equipment leasing",
      "High-value dispute representation and regulatory engagement",
    ],
    mandates: [
      {
        category: "Aviation Regulatory & Licensing",
        headline: "Advised on regulatory matters and represented clients before the General Authority of Civil Aviation (GACA).",
        details:
          "Drafted and negotiated aircraft sale and purchase agreements, aircraft lease agreements, and aircraft management agreements, and secured GACA licences for commercial flight operations.",
      },
      {
        category: "Cross-Border Transactions",
        headline: "Acted as Saudi counsel to international law firms on cross-border transactions.",
        details:
          "Advised on Saudi law aspects of multi-jurisdictional deals, ensuring seamless coordination and local regulatory compliance.",
      },
      {
        category: "High-Value Commercial Litigation",
        headline: "Represented an international corporation in a complex commercial dispute before Saudi courts.",
        details:
          "Led litigation strategy, evidentiary development, and court proceedings in a multi-jurisdictional matter with significant financial exposure.",
      },
    ],
    metaDescription:
      "QHM legal advisory for Aviation & Maritime: GACA regulatory licensing, aircraft leasing, maritime logistics, and transport operations in Saudi Arabia.",
  },
  {
    id: "real-estate-and-development",
    slug: "real-estate-and-development",
    number: "04",
    title: "Real Estate & Development",
    eyebrow: "Sector-Specific Advisory",
    heroHeadline: "Real Estate & Development",
    summary:
      "Mega-project advisory, off-plan sales licensing (Wafi), zoning, FIDIC construction contracts, and property disputes.",
    description:
      "QHM advises international investors, institutional developers, and contractors on real estate structuring and property ownership in Saudi Arabia under evolving foreign ownership regulations. Our practice covers mega-project legal advisory, zoning, construction contracts, off-plan sales licensing, and high-value real estate dispute resolution.",
    keyFocusAreas: [
      "Foreign ownership regulations and real estate investment structuring",
      "Mega-project development and master developer advisory",
      "Off-plan sales licensing (Wafi) and regulatory compliance",
      "FIDIC and standard construction, engineering, and procurement contracts",
      "Real estate dispute avoidance, litigation strategy, and arbitration",
    ],
    mandates: [
      {
        category: "Real Estate & Foreign Ownership",
        headline: "Advised international investors on real estate structuring and ownership in Saudi Arabia.",
        details:
          "Provided legal guidance under evolving foreign ownership regulations, including structuring, compliance, and risk mitigation.",
      },
      {
        category: "High-Value Commercial Litigation",
        headline: "Represented an international corporation in a complex commercial dispute before Saudi courts.",
        details:
          "Led litigation strategy, evidentiary development, and court proceedings in a multi-jurisdictional matter with significant financial exposure.",
      },
      {
        category: "Joint Ventures & Foreign Investment",
        headline: "Structured a cross-border joint venture between a multinational investor and a Saudi partner.",
        details:
          "Advised on governance frameworks, shareholder arrangements, and regulatory compliance, enabling market entry into a highly regulated sector.",
      },
    ],
    metaDescription:
      "QHM legal advisory for Real Estate & Development: foreign ownership structuring, mega-projects, Wafi licensing, and construction law in Saudi Arabia.",
  },
  {
    id: "it-and-telecom",
    slug: "it-and-telecom",
    number: "05",
    title: "IT & Telecom",
    eyebrow: "Sector-Specific Advisory",
    heroHeadline: "IT & Telecom",
    summary:
      "CST regulatory compliance, cloud computing frameworks, telecommunications licensing, cyber governance, and digital regulatory compliance.",
    description:
      "QHM advises global technology companies, fintech providers, telecommunications operators, and digital platforms expanding into Saudi Arabia. We provide comprehensive legal support covering Communications, Space & Technology Commission (CST) and SAMA compliance, licensing, cloud computing frameworks, technology transactions, data protection, and intellectual property disputes.",
    keyFocusAreas: [
      "Communications, Space & Technology Commission (CST) compliance and licensing",
      "Fintech licensing and regulatory engagement with the Saudi Central Bank (SAMA)",
      "Cloud computing frameworks, data protection, and cyber governance",
      "Technology transactions, software licensing, and digital regulatory compliance",
      "Intellectual property protection and high-profile technology disputes",
    ],
    mandates: [
      {
        category: "Market Entry & Fintech Regulatory",
        headline: "Advised a global European fintech provider on its Saudi market entry.",
        details:
          "Structured licensing strategy and regulatory engagement with the Saudi Central Bank (SAMA), ensuring full compliance with financial services frameworks and operational readiness in the Kingdom.",
      },
      {
        category: "Intellectual Property Disputes",
        headline: "Represented a global corporation in a high-profile intellectual property dispute in Saudi Arabia.",
        details:
          "Handled complex technical evidence and cross-border legal issues, achieving a successful outcome in a sensitive and high-value matter.",
      },
      {
        category: "Financial Services Regulatory",
        headline: "Advised an international financial institution on Saudi regulatory compliance and structuring.",
        details:
          "Provided strategic guidance on licensing, operational structuring, and ongoing compliance within SAMA regulatory frameworks.",
      },
    ],
    metaDescription:
      "QHM legal advisory for IT & Telecom: CST compliance, fintech licensing, cloud frameworks, technology transactions, and IP disputes in Saudi Arabia.",
  },
];
