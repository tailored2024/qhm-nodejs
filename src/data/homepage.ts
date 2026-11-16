export const navItems = [
  {
    label: "Home",
    href: "/",
  },
  { label: "Expertise", href: "/expertise" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const headerCta = {
  label: "Contact Us",
  href: "/contact",
};

export const heroCtas = [
  {
    label: "Request a Consultation",
    href: "/contact",
    variant: "primary",
  },
  {
    label: "View Our Expertise",
    href: "/expertise",
    variant: "secondary",
  },
];

export const managingPartnerCta = {
  label: "Meet Dr. Qaisar",
  href: "/team",
};

export const coreCompetencies = [
  {
    number: "01.",
    title: "Regulatory Certainty",
    description:
      "We guide corporates through Saudi Arabia's evolving legal framework with clarity and strategic foresight, ensuring compliance while protecting commercial interests.",
  },
  {
    number: "02.",
    title: "Transactional Risk Management",
    description:
      "From structuring investments to negotiating cross-border agreements, we mitigate legal exposure and protect enterprise value at every stage.",
  },
  {
    number: "03.",
    title: "Government & Regulatory Engagement",
    description:
      "We advise and represent clients before key Saudi authorities, including ZATCA and dispute resolution committees, leveraging deep institutional knowledge.",
  },
  {
    number: "04.",
    title: "Dispute Avoidance & Resolution",
    description:
      "We provide litigation strategy, tax dispute representation, and arbitration support for complex corporate disputes.",
  },
];

export const practiceAreas = [
  {
    title: "Corporate & Commercial",
    description:
      "Corporate structuring, joint ventures, shareholder agreements, governance frameworks, and cross-border commercial transactions.",
    href: "/expertise/corporate-and-commercial",
    image: "/assets/PracticeAreasSection/corporate-commercial-qhm.webp",
  },
  {
    title: "Foreign Direct Investment (FDI)",
    description:
      "Advising foreign investors on Saudi market entry, licensing, MISA approvals, regional headquarters setup, and restructuring.",
    href: "/expertise/foreign-direct-investment",
    image: "/assets/PracticeAreasSection/joint-ventures-fdi-qhm.webp",
  },
  {
    title: "Tax, Zakat & Transfer Pricing",
    description:
      "We are among the few Saudi firms with institutional experience in committee proceedings since inception.",
    points: [
      "ZATCA advisory",
      "Objection procedures",
      "Representation before Committees for Resolution of Tax Violations and Disputes",
      "Settlement negotiations",
      "Transfer pricing advisory",
    ],
    href: "/expertise/tax-zakat-and-transfer-pricing",
    image: "/assets/PracticeAreasSection/tax-zakat-qhm.webp",
  },
  {
    title: "Dispute Resolution & Litigation",
    description:
      "Strategic representation in commercial disputes, tax litigation, regulatory investigations, and arbitration matters.",
    href: "/expertise/dispute-resolution-and-litigation",
    image: "/assets/PracticeAreasSection/dispute-resolution-qhm.webp",
  },
  {
    title: "Employment & Executive Matters",
    description:
      "Advising corporates on executive contracts, Saudization compliance, workforce restructuring, and dispute mitigation.",
    href: "/expertise/employment-and-executive-matters",
    image: "/assets/PracticeAreasSection/employment-labor-qhm.webp",
  },
  {
    title: "Intellectual Property & Technology",
    description:
      "IP protection, licensing agreements, technology transactions, and digital regulatory compliance.",
    href: "/expertise/intellectual-property-and-technology",
    image: "/assets/PracticeAreasSection/ip-technology-qhm.webp",
  },
  {
    title: "Government & Regulatory Engagement",
    description:
      "We advise and represent clients before key Saudi authorities, including ZATCA and dispute resolution committees, leveraging deep institutional knowledge.",
    href: "/expertise/government-and-regulatory-engagement",
    image: "/assets/PracticeAreasSection/regulatory-advisory-qhm.webp",
  },
  {
    title: "Sector-Specific Advisory",
    description:
      "Energy & Infrastructure, Healthcare & Pharmaceuticals, Aviation & Maritime, Real Estate & Development, and IT & Telecom.",
    points: [
      "Energy & Infrastructure",
      "Healthcare & Pharmaceuticals",
      "Aviation & Maritime",
      "Real Estate & Development",
      "IT & Telecom",
    ],
    href: "/expertise/sector-specific-advisory",
    image: "/assets/PracticeAreasSection/sector-advisory-qhm.webp",
  },
];

export const industryFocus = [
  {
    number: "01.",
    title: "Energy & Infrastructure",
    icon: "zap",
    href: "/sectors/energy-and-infrastructure",
  },
  {
    number: "02.",
    title: "Healthcare & Pharmaceuticals",
    icon: "health",
    href: "/sectors/healthcare-and-pharmaceuticals",
  },
  {
    number: "03.",
    title: "Aviation & Maritime",
    icon: "plane",
    href: "/sectors/aviation-and-maritime",
  },
  {
    number: "04.",
    title: "Real Estate & Development",
    icon: "building",
    href: "/sectors/real-estate-and-development",
  },
  {
    number: "05.",
    title: "IT & Telecom",
    icon: "chip",
    href: "/sectors/it-and-telecom",
  },
];

export const representativeMandates = [
  {
    category: "MARKET ENTRY & FINTECH REGULATORY",
    title: "Advised a global European fintech provider on its Saudi market entry.",
    description:
      "Structured licensing strategy and regulatory engagement with the Saudi Central Bank (SAMA), ensuring full compliance with financial services frameworks and operational readiness in the Kingdom.",
  },
  {
    category: "CORPORATE M&A (FLAGSHIP)",
    title:
      "Advised on the acquisition of a Saudi education platform by an international professional services firm.",
    description:
      "Acted as local counsel on a landmark transaction involving sector-specific regulatory approvals, legal due diligence, and transaction structuring within the Kingdom.",
  },
  {
    category: "DISPUTE RESOLUTION (ZATCA – CORE STRENGTH)",
    title:
      "Successfully represented a leading regional enterprise in a multi-million Riyal tax dispute.",
    description:
      "Acted before the Zakat, Tax and Customs Authority (ZATCA), managing objections and dispute proceedings and securing a favorable resolution.",
  },
  {
    category: "CORPORATE RESTRUCTURING & GOVERNANCE",
    title:
      "Advised a regional group on corporate restructuring under the Saudi Companies Law.",
    description:
      "Delivered end-to-end legal support on governance optimisation, restructuring strategy, and regulatory compliance transition.",
  },
];

export const corporateEnquiryFields = [
  {
    name: "companyName",
    label: "Company Name",
    type: "text",
    placeholder: "e.g. Acme Corp",
    required: true,
  },
  {
    name: "industrySector",
    label: "Industry Sector",
    type: "select",
    placeholder: "Choose Sector...",
    required: true,
    options: [
      "Energy & Infrastructure",
      "Healthcare & Pharmaceuticals",
      "Aviation & Maritime",
      "Real Estate & Development",
      "IT & Telecom",
      "Financial Services",
      "Manufacturing",
      "Other",
    ],
  },
  {
    name: "contactName",
    label: "Contact Name",
    type: "text",
    placeholder: "Full Name",
    required: true,
  },
  {
    name: "role",
    label: "Role / Job Title",
    type: "text",
    placeholder: "e.g. General Counsel",
    required: false,
  },
  {
    name: "email",
    label: "Corporate Email",
    type: "email",
    placeholder: "name@company.com",
    required: true,
  },
  {
    name: "phone",
    label: "Direct Line / Mobile",
    type: "tel",
    placeholder: "+966 5X XXX XXXX",
    required: false,
  },
  {
    name: "matterType",
    label: "Matter Type",
    type: "select",
    placeholder: "Corporate / Commercial Mandate",
    required: true,
    options: [
      "Corporate / Commercial Mandate",
      "Market Entry / Licensing",
      "Joint Venture / FDI",
      "Regulatory Advisory",
      "Dispute Resolution",
      "Tax & Zakat",
      "Employment & Labor",
      "IP & Technology",
      "Other",
    ],
  },
];

export const newsletter = {
  eyebrow: "Newsletter",
  heading: "Strategic Insights for\nGlobal Counsel.",
  description:
    "Regulatory updates and market-entry analysis delivered by our partner-led team in Riyadh.",
  placeholder: "corporate@email.com",
  submitLabel: "Subscribe",
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/qhmlawfirm",
  },
];

export const jeddahOffice = {
  label: "Jeddah Headquarters",
  address: [
    "The Headquarter Business Park",
    "Al-Shati, Corniche, 17th Floor Unit 1705",
    "P.O Box 9420, Jeddah 21413",
    "Kingdom of Saudi Arabia",
  ],
  mapLabel: "View on Map",
  mapHref: "#",
};

export const riyadhOffice = {
  label: "Riyadh Office",
  address: [
    "Verdun Tower",
    "King Fahad Rd, Al Olaya District",
    "Unit 604, Riyadh 12212",
    "Saudi Arabia",
  ],
  mapLabel: "View on Map",
  mapHref: "#",
};

export const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "The Team", href: "/team" },
  { label: "Contact", href: "/contact" },
  { label: "Insights", href: "/insights" },
];

export const homepageContent = {
  navItems,
  headerCta,
  hero: {
    eyebrow: "Corporate Strategy & Regulatory Compliance",
    heading: "Saudi Depth.\nGlobal Confidence.",
    subheading: "Independent. Saudi-based. Internationally experienced.",
    ctas: heroCtas,
  },
  managingPartner: {
    name: "Dr. Qaisar H. Metawea",
    role: "Founder and Managing Partner",
    bio: "Qaisar Hamed Metawea Law Firm (QHM) is a Saudi-based corporate law firm advising multinational companies, financial institutions, and regional headquarters on market entry, regulatory compliance, high-value transactions, tax disputes, and complex commercial matters across the Kingdom.",
    extendedBio:
      "We deliver partner-led, commercially driven legal solutions designed to provide regulatory certainty, mitigate transactional risk, and accelerate speed to market.",
    cta: managingPartnerCta,
  },
  coreCompetencies,
  practiceAreas,
  industryFocus,
  representativeMandates,
  corporateEnquiryFields,
  newsletter,
  footer: {
    firmName: "Qaisar H Metawea Law Firm.",
    description:
      "QHM advises multinational corporations, financial institutions, government-related entities, and leading international law firms on complex regulatory, transactional, and tax matters in Saudi Arabia, delivering seamless local execution aligned with global standards.",
    offices: [jeddahOffice, riyadhOffice],
    links: footerLinks,
    socialLinks,
  },
};
