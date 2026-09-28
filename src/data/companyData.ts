export interface NavLinkItem {
  label: string;
  href: string;
}

export interface CompanyEntity {
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
  navLinks: NavLinkItem[];
  sisterCompany: {
    name: string;
    legalName: string;
    href: string;
    domain: string;
    subtitle: string;
    ctaLabel: string;
    description: string;
  };
}

export const COMPANY: CompanyEntity = {
  name: "Swift Consult Inc.",
  legalName: "Swift Consult Inc.",
  domain: "swiftconsultinc.com",
  tagline: "Structural Engineering, Civil Design & Municipal Approvals",
  badgeText: "Licensed Engineering Practice",
  primaryFocus: "Structural, Civil & Regulatory Approvals",
  description:
    "Providing comprehensive structural engineering calculations, municipal site design, Civil 3D hydrology, seismic analysis, and building permit acquisition across North American jurisdictions.",
  email: "info@swiftconsultinc.com",
  phone: "+1 (587) 566-3166",
  address: "1000 King Street West, Toronto, ON, M6K 3N1",
  logoSvg: "/images/swift-consult-logo.svg",
  navLinks: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Sectors", href: "/sectors" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  sisterCompany: {
    name: "Swift Global Inc.",
    legalName: "Swift Global Inc.",
    href: "https://swiftglobalinc.com",
    domain: "swiftglobalinc.com",
    subtitle: "International Procurement & Turnkey EPC",
    ctaLabel: "Visit Swift Global Inc. →",
    description:
      "Looking for heavy equipment sourcing, Factory Acceptance Testing (FAT), petrochemical facility retrofits, or turnkey EPC delivery in the Middle East or West Africa?",
  },
};

export interface ServiceItem {
  number: string;
  title: string;
  shortDesc: string;
  imageDesktop: string;
  imageMobile: string;
  features: string[];
  keySpecs: { label: string; value: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Structural Engineering & Design",
    shortDesc:
      "Rigorous finite element structural analysis, P.Eng stamped calculations, seismic resilience evaluations, and structural designs across reinforced concrete, structural steel, and mass timber.",
    imageDesktop: "/images/bim-engineering-model.webp",
    imageMobile: "/images/bim-engineering-model-mobile.webp",
    features: [
      "P.Eng stamped structural calculation packages and construction drawings",
      "Material mastery: Reinforced Concrete, Structural Steel, Mass Timber, Composite FRP",
      "Structural condition assessments, seismic retrofits, and independent peer reviews",
      "Finite element modeling, wind tunnel load mitigation, and foundation design",
    ],
    keySpecs: [
      { label: "Design Codes", value: "OBC / NBC / IBC / CSA S16 / CSA A23.3" },
      { label: "Credentials", value: "Licensed P.Eng Engineers" },
    ],
  },
  {
    number: "02",
    title: "Civil, Municipal & Site Development",
    shortDesc:
      "Complete civil site infrastructure design, municipal servicing, lot grading, stormwater management (SWM), and advanced hydraulic modeling for commercial and residential developments.",
    imageDesktop: "/images/civil-infrastructure-aerial.webp",
    imageMobile: "/images/civil-infrastructure-aerial-mobile.webp",
    features: [
      "Subdivision servicing design, municipal road alignments, and site access planning",
      "Advanced 3D civil modeling: AutoCAD Civil 3D, SWMM hydraulic & hydrologic analysis",
      "Stormwater retention ponds, low impact development (LID), and erosion control plans",
      "Sanitary sewer networks, domestic water distribution, and fire-flow calculations",
    ],
    keySpecs: [
      { label: "Software Suite", value: "AutoCAD Civil 3D, SWMM, HydroCAD" },
      {
        label: "Jurisdictions",
        value: "Ontario, Alberta, BC, US Municipalities",
      },
    ],
  },
  {
    number: "03",
    title: "Permitting, Planning & Approvals",
    shortDesc:
      "Fast-tracked municipal building permits, Site Plan Control approvals, Committee of Adjustment representation, and multi-agency environmental clearances.",
    imageDesktop: "/images/commercial-tower.webp",
    imageMobile: "/images/commercial-tower-mobile.webp",
    features: [
      "Building permit application management & building code matrix compilation",
      "Site Plan Control (SPC), subdivision draft plan, and rezoning approvals",
      "Municipal liaison, technical comment resolution, and expedited tracking",
      "Committee of Adjustment (CoA) and Minor Variance expert representation",
    ],
    keySpecs: [
      { label: "Success Rate", value: "100% First-Cycle Approval Rate" },
      { label: "Liaison", value: "Dedicated Municipal Case Officers" },
    ],
  },
  {
    number: "04",
    title: "BIM & 3D Engineering Modeling",
    shortDesc:
      "High-precision Building Information Modeling (BIM) with Autodesk Revit, clash detection, LOD 300-400 structural frameworks, and multidisciplinary coordination.",
    imageDesktop: "/images/structural-engineering.webp",
    imageMobile: "/images/structural-engineering-mobile.webp",
    features: [
      "LOD 300 to LOD 400 fabrication-ready structural BIM models in Autodesk Revit",
      "Multi-trade clash detection and geometric coordination with MEP/HVAC engineers",
      "Quantity takeoffs, parametric rebar detailing, and digital twin handovers",
      "3D laser scan integration and as-built point cloud verification",
    ],
    keySpecs: [
      { label: "Standards", value: "BIM Forum LOD / ISO 19650" },
      { label: "Platforms", value: "Autodesk Revit, Navisworks" },
    ],
  },
  {
    number: "05",
    title: "Construction Administration & Field Review",
    shortDesc:
      "Comprehensive general review during construction, on-site structural inspections, contractor RFI resolution, and municipal signoffs for final occupancy.",
    imageDesktop: "/images/residential-development.webp",
    imageMobile: "/images/residential-development-mobile.webp",
    features: [
      "Field review reports and municipal Letters of Undertaking / Commitment",
      "Concrete pour inspections, rebar placement verification, and steel torque tests",
      "Contractor RFI turnaround, shop drawing review, and change order evaluation",
      "Final structural signoff, occupancy letters, and engineering deficiency closeout",
    ],
    keySpecs: [
      { label: "Protocols", value: "OAA/PEO General Review Guidelines" },
      { label: "Turnaround", value: "24-48 hr Inspection Reports" },
    ],
  },
];

export interface SectorItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  imageDesktop: string;
  imageMobile: string;
  bulletPoints: string[];
  stats: { label: string; value: string }[];
}

export const SECTORS: SectorItem[] = [
  {
    id: "commercial",
    slug: "commercial",
    title: "Commercial Buildings & Mixed-Use Towers",
    summary:
      "High-performance structural and civil engineering for commercial office towers, retail mixed-use centers, and institutional complexes.",
    imageDesktop: "/images/commercial-tower.webp",
    imageMobile: "/images/commercial-tower-mobile.webp",
    bulletPoints: [
      "High-rise structural steel and post-tensioned concrete framing",
      "Deep foundations, shoring design, and complex subterranean parking",
      "Wind engineering and dynamic lateral load mitigation systems",
      "Expedited Site Plan Control and municipal building permit signoffs",
    ],
    stats: [
      { label: "Floor Space Delivered", value: "2.4M+ sq.ft" },
      { label: "Regulatory Approvals", value: "100% Rate" },
    ],
  },
  {
    id: "residential",
    slug: "residential",
    title: "Residential Subdivisions & Multi-Family Enclaves",
    summary:
      "Concept-through-completion engineering, blending high-efficiency structural frameworks with sustainable civil site servicing.",
    imageDesktop: "/images/residential-development.webp",
    imageMobile: "/images/residential-development-mobile.webp",
    bulletPoints: [
      "Master-planned residential subdivision grading and stormwater hydrology",
      "Mid-rise and high-rise multi-family residential towers",
      "Mass timber, structural steel, and light gauge framing integration",
      "Subdivision agreement coordination and municipal engineering assumption",
    ],
    stats: [
      { label: "Residential Units", value: "1,800+ Designed" },
      { label: "Hydrology Servicing", value: "350+ Hectares" },
    ],
  },
  {
    id: "industrial",
    slug: "industrial",
    title: "Industrial Logistics Hubs & Warehouses",
    summary:
      "Heavy industrial warehouse structural shells, slab-on-grade designs, clear-span steel trusses, and arterial site access coordination.",
    imageDesktop: "/images/industrial-plant.webp",
    imageMobile: "/images/industrial-plant-mobile.webp",
    bulletPoints: [
      "High-clearance warehouse framing with wide bay structural steel grids",
      "Heavy-duty concrete floor slab engineering and racking anchorage",
      "Truck court civil pavement design and stormwater detention systems",
      "Building envelope compliance with environmental and energy codes",
    ],
    stats: [
      { label: "Industrial Space", value: "1.2M+ sq.ft" },
      { label: "Structural Safety", value: "Zero Failures" },
    ],
  },
];

export interface ProjectSpecification {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  sector: "Commercial" | "Residential" | "Civil Infrastructure" | "Industrial";
  location: string;
  region: "Canada" | "USA";
  year: string;
  scope: string;
  image: string;
  imageMobile: string;
  stats: string;
  clientType?: string;
  completionStatus?: string;
  highlights?: string[];
  specifications?: ProjectSpecification[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "king-west-tower",
    title: "The King Financial Commercial Center",
    sector: "Commercial",
    location: "Toronto, Ontario, Canada",
    region: "Canada",
    year: "2024",
    scope:
      "Complete structural engineering design, lateral wind-resisting concrete core, cantilevered podium framing, Autodesk Revit BIM clash mitigation, and expedited municipal Site Plan Control approval.",
    image: "/images/commercial-tower.webp",
    imageMobile: "/images/commercial-tower-mobile.webp",
    stats: "42 Storeys • LEED Gold • P.Eng Stamped",
    clientType: "Institutional Commercial Developer",
    completionStatus: "Delivered & Occupied",
    highlights: [
      "Designed dynamic ductile shear-wall lateral system resisting severe lake-effect wind forces",
      "Resolved 180+ multi-trade mechanical/structural geometric clashes in Revit LOD 350",
      "Engineered 4 subterranean parking levels with deep secant pile shoring next to transit line",
      "Secured municipal building permit with zero first-cycle engineering deficiencies"
    ],
    specifications: [
      { label: "Building Height", value: "42 Storeys (158 m)" },
      { label: "Floor Area", value: "720,000 sq.ft" },
      { label: "Structural Framing", value: "Reinforced Post-Tensioned Concrete & Structural Steel" },
      { label: "Governing Codes", value: "Ontario Building Code (OBC), CSA A23.3, CSA S16" },
      { label: "BIM Coordination", value: "Autodesk Revit & Navisworks Manage (LOD 350)" },
      { label: "Certification", value: "LEED Gold Certified • P.Eng Sealed Drawings" }
    ]
  },
  {
    id: "forest-hill-timber",
    title: "The Forest Hill Geometric Residences",
    sector: "Residential",
    location: "Toronto, Ontario, Canada",
    region: "Canada",
    year: "2024",
    scope:
      "Integrated architectural engineering, mass timber structural analysis, cross-laminated timber (CLT) diaphragm design, concrete foundation integration, and building permit acquisition.",
    image: "/images/residential-development.webp",
    imageMobile: "/images/residential-development-mobile.webp",
    stats: "64 Premium Units • Mass Timber",
    clientType: "Private Residential Developer",
    completionStatus: "Substantially Completed",
    highlights: [
      "Engineered hybrid mass timber (CLT & Glulam) framing reducing carbon footprint by 38%",
      "Specialized acoustic and fire-rated floor diaphragm design meeting strict Part 3 OBC codes",
      "Optimized modular prefabrication sequence cutting on-site erection time by 3 weeks",
      "Full construction general review with daily field reports and municipal progress certifications"
    ],
    specifications: [
      { label: "Project Scale", value: "64 Boutique Residential Suites (6 Storeys)" },
      { label: "Gross Floor Area", value: "115,000 sq.ft" },
      { label: "Primary Material", value: "Cross-Laminated Timber (CLT) & Glulam Posts" },
      { label: "Acoustic Rating", value: "STC 58 / IIC 55 Field Verified" },
      { label: "Governing Codes", value: "OBC 2024 Mass Timber Provisions / CSA O86" },
      { label: "Engineering Scope", value: "Structural Analysis & Field Review Signoff" }
    ]
  },
  {
    id: "midwest-municipal-basin",
    title: "Municipal Stormwater & Arterial Site Network",
    sector: "Civil Infrastructure",
    location: "Houston, Texas, USA",
    region: "USA",
    year: "2023",
    scope:
      "AutoCAD Civil 3D site grading, SWMM continuous hydrological simulation, regional retention basin hydraulic modeling, municipal trunk sewer design, and state drainage authority approvals.",
    image: "/images/civil-infrastructure-aerial.webp",
    imageMobile: "/images/civil-infrastructure-aerial-mobile.webp",
    stats: "140 Hectares Serviced • Civil 3D",
    clientType: "Municipal Infrastructure Authority & Land Consortium",
    completionStatus: "Commissioned & Assumed",
    highlights: [
      "Modeled 100-year storm event flood resilience via 2D hydrodynamic overland flow modeling",
      "Designed twin 35,000 m³ retention ponds with low-impact development (LID) bio-filtration",
      "Engineered 4.2 km of dual-trunk sanitary and storm sewers with trenchless micro-tunneling",
      "Coordinated agency assumption with city engineering departments with 100% compliance"
    ],
    specifications: [
      { label: "Servicing Area", value: "140 Hectares (345 Acres)" },
      { label: "Retention Volume", value: "70,000 m³ Total Capacity" },
      { label: "Hydraulic Modeling", value: "EPA SWMM 5.2 & HydroCAD Civil 3D" },
      { label: "Trunk Sewer Diameter", value: "600 mm to 1,500 mm Reinforced Concrete" },
      { label: "Regulatory Agency", value: "City Floodplain Management & Water District" },
      { label: "Project Outcome", value: "Zero Downstream Surcharge Assumption" }
    ]
  },
  {
    id: "calgary-intermodal-hub",
    title: "Calgary Intermodal Logistics Depot",
    sector: "Industrial",
    location: "Calgary, Alberta, Canada",
    region: "Canada",
    year: "2023",
    scope:
      "Long-span structural steel framing design, overhead gantry crane runway engineering, high-load industrial concrete slab-on-grade, heavy truck court civil grading, and Alberta building permits.",
    image: "/images/structural-engineering.webp",
    imageMobile: "/images/structural-engineering-mobile.webp",
    stats: "240,000 sq.ft • CSA S16 Certified",
    clientType: "National Freight & Logistics Operator",
    completionStatus: "Fully Operational",
    highlights: [
      "Designed 48-meter clear span open-web steel roof joists allowing unobstructed forklift logistics",
      "Engineered twin 25-ton top-running overhead crane runways with dynamic fatigue calculations",
      "Heavy-duty 250 mm fiber-reinforced slab-on-grade designed for 80 kN post point loads",
      "Secured City of Calgary Building Permit and APEGA professional practice authorization"
    ],
    specifications: [
      { label: "Enclosed Facility", value: "240,000 sq.ft Clear-Span Warehouse" },
      { label: "Clear Eave Height", value: "36 ft (11.0 m) Clear" },
      { label: "Crane Runway Load", value: "Twin 25-Ton Class D Heavy Service" },
      { label: "Slab Specifications", value: "Heavy Industrial Post-Tensioned F-Min 65" },
      { label: "Governing Standards", value: "NBC Alberta Edition, CSA S16, CSA S136" },
      { label: "Accreditation", value: "APEGA Permit to Practice Stamped" }
    ]
  },
  {
    id: "lakeview-waterfront-condos",
    title: "Lakeview Waterfront Twin Residential Towers",
    sector: "Residential",
    location: "Mississauga, Ontario, Canada",
    region: "Canada",
    year: "2024",
    scope:
      "Twin 28-storey waterfront condominium towers with connected 4-level podium, lakefront hydro-static foundation water-stop engineering, vibration isolation, and structural peer review.",
    image: "/images/bim-engineering-model.webp",
    imageMobile: "/images/bim-engineering-model-mobile.webp",
    stats: "520 Suites • Twin 28-Storey Towers",
    clientType: "Urban High-Rise Condominium Developer",
    completionStatus: "Under Construction - Superstructure",
    highlights: [
      "Engineered deep reinforced raft slab resisting high hydrostatic water pressure from lake table",
      "Optimized column grid layout in Revit BIM eliminating transfer slab penalties across podium",
      "Wind tunnel testing coordination and aerodynamic corner softening reducing overturning moment by 14%",
      "Comprehensive structural field inspection regime with ultrasonic rebar and concrete core tests"
    ],
    specifications: [
      { label: "Building Height", value: "Twin 28 Storeys (92 m)" },
      { label: "Total Unit Count", value: "520 Residential Suites + Retail Podium" },
      { label: "Foundation System", value: "2.4 m Deep Waterproof Raft Slab on Bedrock" },
      { label: "Concrete Strength", value: "Up to 65 MPa High-Performance Mix" },
      { label: "Software Platform", value: "ETABS, SAFE, Autodesk Revit (LOD 350)" },
      { label: "Quality Standard", value: "PEO General Review / CSA A23.1 Compliance" }
    ]
  },
  {
    id: "ontario-transit-hub",
    title: "Metropolitan Regional Transit Interchange",
    sector: "Commercial",
    location: "Markham, Ontario, Canada",
    region: "Canada",
    year: "2023",
    scope:
      "Structural steel canopy framework, multi-platform pedestrian concourse bridge, civil bus-loop grade separation, stormwater retention tanks, and accessibility compliance certification.",
    image: "/images/industrial-plant.webp",
    imageMobile: "/images/industrial-plant-mobile.webp",
    stats: "18,000 Daily Riders • Civic Gateway",
    clientType: "Regional Transportation Authority",
    completionStatus: "Completed & Commissioned",
    highlights: [
      "Architecturally exposed structural steel (AESS Category 4) space-frame canopy spanning 60 meters",
      "Vibration-damped pedestrian overpass spanning active multi-track railway corridor",
      "Integrated underground stormwater detention tank providing peak-flow attenuation for entire precinct",
      "Full compliance with Metrolinx, AODA, and National Building Code of Canada requirements"
    ],
    specifications: [
      { label: "Concourse Footprint", value: "85,000 sq.ft Covered Transit Hub" },
      { label: "AESS Classification", value: "CISC AESS 4 Showcase Steelwork" },
      { label: "Rail Corridor Clearance", value: "7.1 m Vertical Railway Safety Envelope" },
      { label: "Stormwater Storage", value: "1,200 m³ Modular Underground Vault" },
      { label: "Standards", value: "CSA S16 / AREMA Rail Guidelines / OBC" },
      { label: "Engineering Scope", value: "Prime Structural & Civil Lead Consultant" }
    ]
  }
];

export const ENGINEERING_ACCREDITATIONS = [
  {
    organization: "Professional Engineers Ontario (PEO)",
    type: "Certificate of Authorization",
    code: "Licensed Engineering Practice",
  },
  {
    organization: "Association of Professional Engineers (APEGA)",
    type: "Permit to Practice",
    code: "Structural & Civil Practice",
  },
  {
    organization: "Canadian Codes & Standards",
    type: "Code Compliance Matrix",
    code: "OBC / NBC / CSA S16 / CSA A23.3",
  },
];
