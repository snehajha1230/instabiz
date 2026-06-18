export const COMPANY = {
  name: "Hydro Mech Engineers",
  tagline: "Precision Sheet Metal Solutions Built For Modern Industries",
  email: "hydromechengineer@gmail.com",
  phone: "+91 9738371651",
  website: "www.hydromech.co.in",
  address: [
    "#10, 1st Main,",
    "1st Cross,",
    "Doddanekundi Industrial Area,",
    "Opp. NGEF Ancillary,",
    "Mahadevapura Post,",
    "Bangalore – 560048",
  ],
  logo: "/ETHICS METAL 2026 LOGO.png",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const PRODUCTS = [
  {
    name: "Bus Bar Processing Machines",
    category: "Bus Bar Systems",
    description:
      "Punching, bending and cutting solutions for copper and aluminum bus bars.",
    image: "/Hydraulic Busbar Processing machine (3 in 1).jpg",
    capabilities: ["3-in-1 Operation", "Copper & Aluminum", "Panel Production"],
    specs: [
      { label: "Operations", value: "Punch · Bend · Cut" },
      { label: "Drive System", value: "Hydraulic" },
      { label: "Application", value: "Electrical switchgear" },
    ],
  },
  {
    name: "Hydraulic Clinching Machines",
    category: "Fastener Insertion",
    description:
      "Hydraulic fastener insertion machines designed for precision and efficiency.",
    image: "/Hydraulic Clinching Machine.jpg",
    capabilities: ["Fastener Insertion", "High Repeatability", "Low Noise"],
    specs: [
      { label: "Drive System", value: "Hydraulic" },
      { label: "Process", value: "Clinching & riveting" },
      { label: "Application", value: "Sheet metal assembly" },
    ],
  },
  {
    name: "Hydraulic Section Bending Machines",
    category: "Bending Systems",
    description:
      "Industrial pipe and section bending systems with reliable performance.",
    image: "/Hydraulic Section Bending Machine.jpg",
    capabilities: ["Pipe Bending", "Section Forming", "Heavy Sections"],
    specs: [
      { label: "Drive System", value: "Hydraulic" },
      { label: "Material Range", value: "Pipes & sections" },
      { label: "Application", value: "Structural fabrication" },
    ],
  },
  {
    name: "Hydraulic C Frame & H Frame Machines",
    category: "Forming Presses",
    description:
      "Heavy-duty hydraulic forming solutions for industrial manufacturing.",
    image: "/Hydraulic Busbar Punching.jpg",
    capabilities: ["C & H Frame", "Heavy-Duty Forming", "Industrial Stamping"],
    specs: [
      { label: "Frame Types", value: "C-frame & H-frame" },
      { label: "Drive System", value: "Hydraulic" },
      { label: "Application", value: "Production lines" },
    ],
  },
  {
    name: "Hydro Mechanical Sheet Rolling Machines",
    category: "Rolling Systems",
    description:
      "Accurate sheet rolling machinery for precision metal fabrication.",
    image: "/Hydro-Mechanical Plate Rolling Machine.jpg",
    capabilities: ["Plate Rolling", "Thickness Control", "Precision Curves"],
    specs: [
      { label: "Drive System", value: "Hydro-mechanical" },
      { label: "Process", value: "Sheet & plate rolling" },
      { label: "Application", value: "Metal fabrication" },
    ],
  },
  {
    name: "CNC Press Brake Tools",
    category: "Press Brake Tooling",
    description:
      "Precision tooling solutions for modern sheet metal operations.",
    image: "/Bending Station.jpg",
    capabilities: ["Custom Profiles", "CNC Compatible", "Precision Bends"],
    specs: [
      { label: "Compatibility", value: "CNC press brakes" },
      { label: "Tooling", value: "Punches & dies" },
      { label: "Application", value: "Sheet metal forming" },
    ],
  },
] as const;

export const FEATURES = [
  {
    title: "High Quality Manufacturing",
    description:
      "Manufactured using premium-grade materials and strict quality standards.",
    icon: "Award",
  },
  {
    title: "Reliable Engineering",
    description:
      "Designed for consistent industrial performance and durability.",
    icon: "Cog",
  },
  {
    title: "Precision Machinery",
    description:
      "Engineered for accurate forming, bending, punching and rolling.",
    icon: "Target",
  },
  {
    title: "Energy Efficient",
    description: "Hydraulic systems optimized for efficient operation.",
    icon: "Zap",
  },
  {
    title: "Low Maintenance",
    description:
      "Machines designed for long-term reliability and easy servicing.",
    icon: "Wrench",
  },
  {
    title: "Excellent After Sales Support",
    description:
      "Dedicated customer support and long-term client relationships.",
    icon: "Headphones",
  },
] as const;

export const PROCESS_STEPS = [
  "Consultation",
  "Requirement Analysis",
  "Manufacturing",
  "Quality Inspection",
  "Delivery",
  "After Sales Support",
] as const;

export const HERO_HIGHLIGHTS = [
  "Premium Engineering",
  "Precision Manufacturing",
  "Reliable Performance",
  "Excellent Support",
] as const;
