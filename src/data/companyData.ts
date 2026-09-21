export type EntityKey = 'group' | 'consult' | 'global';

export interface NavLinkItem {
  label: string;
  href: string;
  badge?: string;
}

export interface CompanyEntity {
  id: EntityKey;
  name: string;
  legalName: string;
  domain: string;
  tagline: string;
  badgeText: string;
  primaryFocus: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  logoSvg: string;
  colorTheme: {
    accent: string;
    border: string;
    heroBg: string;
    badgeStyle: string;
  };
  navLinks: NavLinkItem[];
  crossEntity: {
    targetId: EntityKey;
    targetName: string;
    targetLegalName: string;
    targetHref: string;
    targetDomain: string;
    targetSubtitle: string;
    ctaLabel: string;
    description: string;
  };
}

export const ENTITIES: Record<EntityKey, CompanyEntity> = {
  group: {
    id: 'group',
    name: 'Swift Group',
    legalName: 'Swift Consult Inc. & Swift Global Inc.',
    domain: 'swiftconsultinc.com / swiftglobalinc.com',
    tagline: 'Integrated Engineering, Global Procurement & Construction Management',
    badgeText: 'Unified Dual-Entity Gateway',
    primaryFocus: 'End-to-End International EPC Delivery',
    description: 'A unified consortium pairing Canadian engineering precision and regulatory expertise with international heavy industrial procurement and EPC construction execution.',
    email: 'info@swiftconsultinc.com',
    phone: '+1 (587) 566-3166',
    address: '1000 King Street West, Toronto, ON, M6K 3N1',
    logoSvg: '/images/swift-group-logo.svg',
    colorTheme: {
      accent: 'text-navy-900',
      border: 'border-navy-900',
      heroBg: 'bg-navy-950',
      badgeStyle: 'bg-amber-50 text-amber-900 border-amber-construction/60'
    },
    navLinks: [
      { label: 'Gateway Portal', href: '/' },
      { label: 'Swift Consult Inc.', href: '/consult' },
      { label: 'Swift Global Inc.', href: '/global' },
      { label: 'Contact', href: '/consult/contact' }
    ],
    crossEntity: {
      targetId: 'consult',
      targetName: 'Swift Consult Inc.',
      targetLegalName: 'Swift Consult Inc.',
      targetHref: '/consult',
      targetDomain: 'swiftconsultinc.com',
      targetSubtitle: 'Structural Engineering & Municipal Permitting',
      ctaLabel: 'Enter Swift Consult Website →',
      description: 'Explore structural calculations, civil engineering, and Canadian municipal permitting.'
    }
  },
  consult: {
    id: 'consult',
    name: 'Swift Consult Inc.',
    legalName: 'Swift Consult Inc.',
    domain: 'swiftconsultinc.com',
    tagline: 'Structural Engineering, Civil Design & Municipal Approvals',
    badgeText: 'Engineering & Design Consultancy',
    primaryFocus: 'Structural, Civil & Regulatory Approvals',
    description: 'Providing comprehensive structural engineering, municipal site design, seismic evaluation, and building permit acquisition across North American jurisdictions.',
    email: 'info@swiftconsultinc.com',
    phone: '+1 (587) 566-3166',
    address: '1000 King Street West, Toronto, ON, M6K 3N1',
    logoSvg: '/images/swift-consult-logo.svg',
    colorTheme: {
      accent: 'text-steel-600',
      border: 'border-steel-500',
      heroBg: 'bg-navy-950',
      badgeStyle: 'bg-steel-100 text-steel-900 border-steel-300'
    },
    navLinks: [
      { label: 'Home', href: '/consult' },
      { label: 'About', href: '/consult/about' },
      { label: 'Services', href: '/consult/services' },
      { label: 'Sectors', href: '/consult/sectors' },
      { label: 'Projects', href: '/consult/projects' },
      { label: 'Contact', href: '/consult/contact' }
    ],
    crossEntity: {
      targetId: 'global',
      targetName: 'Swift Global Inc.',
      targetLegalName: 'Swift Global Inc.',
      targetHref: '/global',
      targetDomain: 'swiftglobalinc.com',
      targetSubtitle: 'Procurement & Turnkey EPC',
      ctaLabel: 'Switch to Swift Global Inc. →',
      description: 'Need heavy equipment sourcing or turnkey EPC in the Middle East or West Africa?'
    }
  },
  global: {
    id: 'global',
    name: 'Swift Global Inc.',
    legalName: 'Swift Global Inc.',
    domain: 'swiftglobalinc.com',
    tagline: 'Engineering Procurement, Heavy Industrial & Cross-Border EPC',
    badgeText: 'Procurement & International EPC',
    primaryFocus: 'Supply Chain, Industrial Facilities & Turnkey Project Delivery',
    description: 'Executing complex international equipment sourcing, technical vendor prequalification, industrial facility upgrades, and multi-model EPC delivery across Canada, the US, the Middle East, and West Africa.',
    email: 'info@swiftglobalinc.com',
    phone: '+1 (587) 566-3166',
    address: '1000 King Street West, Toronto, ON, M6K 3N1',
    logoSvg: '/images/swift-global-logo.svg',
    colorTheme: {
      accent: 'text-amber-construction',
      border: 'border-amber-construction',
      heroBg: 'bg-black',
      badgeStyle: 'bg-amber-950 text-amber-300 border-amber-600/50'
    },
    navLinks: [
      { label: 'Home', href: '/global' },
      { label: 'About', href: '/global/about' },
      { label: 'Services', href: '/global/services' },
      { label: 'Sectors', href: '/global/sectors' },
      { label: 'Projects', href: '/global/projects' },
      { label: 'Contact', href: '/global/contact' }
    ],
    crossEntity: {
      targetId: 'consult',
      targetName: 'Swift Consult Inc.',
      targetLegalName: 'Swift Consult Inc.',
      targetHref: '/consult',
      targetDomain: 'swiftconsultinc.com',
      targetSubtitle: 'Structural & Permitting',
      ctaLabel: 'Switch to Swift Consult Inc. →',
      description: 'Need structural design stamps, Civil 3D hydrology, or Canadian building permits?'
    }
  }
};

export interface SectorItem {
  id: string;
  slug: string;
  title: string;
  leadEntity: 'Swift Consult' | 'Swift Global' | 'Joint Delivery';
  summary: string;
  imageDesktop: string;
  imageMobile: string;
  bulletPoints: string[];
  stats: { label: string; value: string }[];
}

export const SECTORS: SectorItem[] = [
  {
    id: 'commercial',
    slug: 'commercial',
    title: 'Commercial Building & Development',
    leadEntity: 'Joint Delivery',
    summary: 'Comprehensive engineering and project delivery for landmark commercial high-rises, mixed-use corporate centers, and facility refurbishments.',
    imageDesktop: '/images/commercial-tower.webp',
    imageMobile: '/images/commercial-tower-mobile.webp',
    bulletPoints: [
      'New commercial building development & construction',
      'Commercial refurbishment & strategic redevelopment',
      'Existing property & structural asset improvement',
      'Technical project delivery & facility operational programs'
    ],
    stats: [
      { label: 'Floor Space Delivered', value: '2.4M+ sq.ft' },
      { label: 'Regulatory Approvals', value: '100% Rate' }
    ]
  },
  {
    id: 'industrial',
    slug: 'industrial',
    title: 'Industrial Engineering & Facility Operations',
    leadEntity: 'Swift Global',
    summary: 'Multidisciplinary engineering, heavy equipment procurement, and infrastructure modernization for high-output industrial processing facilities.',
    imageDesktop: '/images/industrial-plant.webp',
    imageMobile: '/images/industrial-plant-mobile.webp',
    bulletPoints: [
      'Industrial facility development & process optimization',
      'Multidisciplinary engineering & efficiency upgrades',
      'Equipment, systems, and heavy infrastructure modernization',
      'Process piping, pressure vessel integration & safety audits'
    ],
    stats: [
      { label: 'Operational Uptime', value: '99.8%' },
      { label: 'International Sites', value: '18+ Plants' }
    ]
  },
  {
    id: 'residential',
    slug: 'residential',
    title: 'Residential Buildings & Development',
    leadEntity: 'Swift Consult',
    summary: 'Concept-through-delivery residential engineering, blending high-performance structural systems with contemporary architectural elegance.',
    imageDesktop: '/images/residential-development.webp',
    imageMobile: '/images/residential-development-mobile.webp',
    bulletPoints: [
      'Small- to medium-scale residential project planning & design',
      'Integrated structural, architectural, and MEP solutions',
      'Concept-through-delivery project execution',
      'Mass timber, structural steel, and reinforced concrete integration'
    ],
    stats: [
      { label: 'Residential Units', value: '1,800+' },
      { label: 'Delivery Model', value: 'Turnkey EPC' }
    ]
  }
];

export interface ServiceItem {
  number: string;
  title: string;
  entityRole: 'Swift Consult' | 'Swift Global' | 'Joint Competency';
  shortDesc: string;
  imageDesktop: string;
  imageMobile: string;
  features: string[];
  keySpecs: { label: string; value: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Structural Engineering & Design',
    entityRole: 'Swift Consult',
    shortDesc: 'Rigorous structural analysis, seismic resistance evaluations, and resilient engineering across concrete, structural steel, and mass-timber.',
    imageDesktop: '/images/structural-engineering.webp',
    imageMobile: '/images/structural-engineering-mobile.webp',
    features: [
      'Structural analysis, seismic evaluation, and condition assessments',
      'Material mastery: Reinforced Concrete, Structural Steel, Timber/Mass-Timber, FRP',
      'Retrofitting aging structures & independent peer design reviews',
      'Finite element modeling, vibration analysis, and load-path optimization'
    ],
    keySpecs: [
      { label: 'Design Codes', value: 'OBC / NBC / IBC / ACI / CSA' },
      { label: 'Materials', value: 'Steel, Concrete, Mass Timber' }
    ]
  },
  {
    number: '02',
    title: 'Civil, Municipal & Site Development',
    entityRole: 'Swift Consult',
    shortDesc: 'Complete civil infrastructure design, municipal servicing, stormwater management, and advanced hydraulic modeling for land development.',
    imageDesktop: '/images/civil-site.webp',
    imageMobile: '/images/civil-site-mobile.webp',
    features: [
      'Site development, municipal servicing design, and subdivision planning',
      'Advanced software expertise: AutoCAD Civil 3D, SWMM hydraulic modeling',
      'Stormwater management, lot grading, erosion control, and municipal approvals',
      'Water distribution, sanitary sewer networks, and site access coordination'
    ],
    keySpecs: [
      { label: 'Tooling', value: 'AutoCAD Civil 3D, SWMM' },
      { label: 'Domain', value: 'Municipal Infrastructure' }
    ]
  },
  {
    number: '03',
    title: 'Permitting, Planning & Approvals',
    entityRole: 'Swift Consult',
    shortDesc: 'Fast-tracked regulatory compliance, municipal liaison, site plan approvals, and environmental permit coordination across agencies.',
    imageDesktop: '/images/commercial-tower.webp',
    imageMobile: '/images/commercial-tower-mobile.webp',
    features: [
      'Building permit applications & regulatory compliance coordination',
      'Municipal, site plan control, subdivision, and environmental approvals',
      'Authority liaison & technical documentation tracking',
      'Zoning bylaws, Committee of Adjustment, and variance representation'
    ],
    keySpecs: [
      { label: 'Jurisdictions', value: 'Canada & US Municipalities' },
      { label: 'Tracking', value: 'End-to-End Agency Liaison' }
    ]
  },
  {
    number: '04',
    title: 'Engineering Procurement & Technical Services',
    entityRole: 'Swift Global',
    shortDesc: 'Strategic international equipment sourcing, technical bid leveling, quality assurance expediting, and global supply chain logistics.',
    imageDesktop: '/images/global-logistics.webp',
    imageMobile: '/images/global-logistics-mobile.webp',
    features: [
      'Material & heavy equipment sourcing & technical bid evaluation',
      'Vendor prequalification, factory acceptance testing, and expediting',
      'Direct support for EPC, Design-Build, and Construction Management projects',
      'Cross-border customs logistics, freight consolidation, and site staging'
    ],
    keySpecs: [
      { label: 'Procurement Scale', value: 'Heavy Industrial & EPC' },
      { label: 'Geographies', value: 'North America, Middle East, Africa' }
    ]
  },
  {
    number: '05',
    title: 'Project & Construction Management',
    entityRole: 'Joint Competency',
    shortDesc: 'Turnkey project management from feasibility to commissioning, ensuring rigorous cost control, safety compliance, and schedule fidelity.',
    imageDesktop: '/images/industrial-plant.webp',
    imageMobile: '/images/industrial-plant-mobile.webp',
    features: [
      'Full lifecycle planning, scheduling, cost control, and risk management',
      'Quality oversight, design coordination, commissioning, and project closeout',
      'Multi-model delivery: EPC, Design-Build, Design-Bid-Build, and CM at-Risk',
      'Comprehensive on-site safety protocols and quality management system (QMS)'
    ],
    keySpecs: [
      { label: 'Delivery Modes', value: 'EPC, CM, Design-Build' },
      { label: 'Governance', value: 'ISO 9001 / Safety First' }
    ]
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  sector: 'Commercial' | 'Industrial' | 'Residential' | 'Civil Infrastructure';
  entity: 'Swift Consult' | 'Swift Global' | 'Unified Group';
  location: string;
  region: 'Canada' | 'USA' | 'Middle East' | 'West Africa';
  year: string;
  scope: string;
  image: string;
  imageMobile: string;
  stats: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'king-financial-tower',
    title: 'King West Commercial Center',
    sector: 'Commercial',
    entity: 'Swift Consult',
    location: 'Toronto, Ontario, Canada',
    region: 'Canada',
    year: '2024',
    scope: 'Structural design, seismic peer review, municipal site plan approval, and structural steel framing.',
    image: '/images/commercial-tower.webp',
    imageMobile: '/images/commercial-tower-mobile.webp',
    stats: '42 Storeys • LEED Gold'
  },
  {
    id: 'gulf-petrochem-terminal',
    title: 'Industrial Petrochemical Facility Expansion',
    sector: 'Industrial',
    entity: 'Swift Global',
    location: 'Jebel Ali, United Arab Emirates',
    region: 'Middle East',
    year: '2023',
    scope: 'Turnkey EPC procurement of specialized pressure equipment, process piping structural design, and expediting.',
    image: '/images/industrial-plant.webp',
    imageMobile: '/images/industrial-plant-mobile.webp',
    stats: '120,000 BPD Capacity'
  },
  {
    id: 'lagos-deepwater-staging',
    title: 'Deepwater Marine & Heavy Logistics Terminal',
    sector: 'Industrial',
    entity: 'Swift Global',
    location: 'Lekki Free Zone, Lagos, Nigeria',
    region: 'West Africa',
    year: '2023',
    scope: 'Equipment sourcing, marine quay engineering, and international freight expediting for major infrastructure hub.',
    image: '/images/global-logistics.webp',
    imageMobile: '/images/global-logistics-mobile.webp',
    stats: '3 Heavy Berths • 500k TEU'
  },
  {
    id: 'york-mass-timber-enclave',
    title: 'The Forest Hill Geometric Residences',
    sector: 'Residential',
    entity: 'Swift Consult',
    location: 'Toronto, Ontario, Canada',
    region: 'Canada',
    year: '2024',
    scope: 'Integrated architectural engineering, mass timber structural analysis, and complete building permit approvals.',
    image: '/images/residential-development.webp',
    imageMobile: '/images/residential-development-mobile.webp',
    stats: '64 Premium Units'
  },
  {
    id: 'midwest-municipal-basin',
    title: 'Municipal Stormwater & Arterial Site Network',
    sector: 'Civil Infrastructure',
    entity: 'Swift Consult',
    location: 'Houston, Texas, USA',
    region: 'USA',
    year: '2022',
    scope: 'SWMM hydrological modeling, retention basin grading, and municipal subdivision approvals.',
    image: '/images/civil-site.webp',
    imageMobile: '/images/civil-site-mobile.webp',
    stats: '140 Hectares Serviced'
  },
  {
    id: 'calgary-intermodal-depot',
    title: 'Intermodal Freight & Structural Assembly Depot',
    sector: 'Industrial',
    entity: 'Unified Group',
    location: 'Calgary, Alberta, Canada',
    region: 'Canada',
    year: '2023',
    scope: 'Joint delivery: Structural engineering by Swift Consult, global steel procurement and fabrication by Swift Global.',
    image: '/images/structural-engineering.webp',
    imageMobile: '/images/structural-engineering-mobile.webp',
    stats: 'Joint EPC Delivery'
  }
];

export const GLOBAL_REGIONS = [
  {
    region: 'Canada',
    flag: '🇨🇦',
    headquarters: 'Corporate HQ: Toronto, Ontario',
    description: 'Structural engineering design, municipal site approvals (Ontario & Alberta), and architectural consultation.',
    keyHubs: ['Toronto, ON', 'Calgary, AB', 'Vancouver, BC'],
    lead: 'Swift Consult Inc.'
  },
  {
    region: 'United States',
    flag: '🇺🇸',
    headquarters: 'Regional Practice: Midwest & East Coast',
    description: 'Civil land development, stormwater management modeling, and commercial structural assessments.',
    keyHubs: ['Houston, TX', 'New York, NY', 'Miami, FL'],
    lead: 'Swift Consult Inc. / Swift Global'
  },
  {
    region: 'Middle East',
    flag: '🇦🇪',
    headquarters: 'International Operations Hub',
    description: 'High-capacity EPC equipment procurement, petrochemical modernization, and multidisciplinary project management.',
    keyHubs: ['Dubai, UAE', 'Abu Dhabi', 'Doha, Qatar'],
    lead: 'Swift Global Inc.'
  },
  {
    region: 'West Africa',
    flag: '🇳🇬',
    headquarters: 'Regional EPC & Industrial Sourcing',
    description: 'Heavy equipment supply chain, port infrastructure logistics, and turnkey industrial facility engineering.',
    keyHubs: ['Lagos, Nigeria', 'Accra, Ghana', 'Port Harcourt'],
    lead: 'Swift Global Inc.'
  }
];
