export const money = (n) =>
  "US$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const CATEGORIES = [
  {
    id: "switches",
    name: "Switches",
    icon: "/images/20251204115841do4nl3.svg",
    blurb: "Build a future-ready intelligent network for modern enterprises and data centers.",
    families: [
      { name: "PicOS® Enterprise Switches", img: "/images/20250116162633cququm.png", href: "/c/switches", links: ["1/2.5G PicOS® Switches", "10/25G PicOS® Switches", "40/100G PicOS® Switches", "200/400G PicOS® Switches", "AmpCon-Campus Management Platform"] },
      { name: "PicOS® Data Center Switches", img: "/images/20250116162705er3rbv.png", href: "/c/switches", links: ["10/25G PicOS® Switches", "100/200G PicOS® Switches", "400/800G PicOS® Switches", "HPC/AI PicOS® Switches", "AmpCon-DC Management Platform"] },
      { name: "PicOS® PoE+ Switches", img: "/images/20250712105444jwgqkj.png", href: "/c/switches", links: ["1G PicOS® PoE+ Switches", "2.5/5G PicOS® PoE+ Switches", "10G PicOS® PoE+ Switches", "AmpCon-Campus Management Platform", "PicOS® License & Service"] },
      { name: "Industrial Ethernet Switches", img: "/images/20230508182555_651.png", href: "/c/switches", links: ["DIN Rail Mount Industrial Switches", "Rack Mount Industrial Switches", "Wall Mount Industrial Switches", "TSN Industrial Switches", "Industrial PoE+ Switches"] },
      { name: "Enterprise Switches", img: "/images/20250116162126hja9wv.png", href: "/c/switches", links: ["1/2.5G Enterprise Switches", "10G Enterprise Switches", "25G Enterprise Switches", "40G Enterprise Switches", "100G Enterprise Switches"] },
      { name: "Data Center Switches", img: "/images/202501161625092pt2sj.png", href: "/c/switches", links: ["10/25G Data Center Switches", "100G Data Center Switches", "Modular Data Center Switches", "Network Packet Brokers (NPB)", "NVIDIA® Switches"] },
      { name: "PoE+ Switches", img: "/images/20230512103812_200.png", href: "/c/switches", links: ["1G PoE+ Switches", "2.5/5G PoE+ Switches", "10G PoE++ Switches", "Switch Accessories"] },
      { name: "SME Switches", img: "/images/20260223142838c3xw17.png", href: "/c/switches", links: ["Compact SME Switches", "Standard SME Switches", "Professional SME Switches", "Professional Max SME Switches", "Aggregation SME Switches"] },
    ],
  },
  {
    id: "networking",
    name: "Networking",
    icon: "/images/20251204150545bfnzhc.svg",
    blurb: "Wireless APs, cameras, media converters, NICs and campus access for Wi-Fi 6/7.",
    families: [
      { name: "Wireless", img: "/images/20251014172228tp621m.png", href: "/c/networking", links: ["Wi-Fi 7 Access Points", "Wi-Fi 6 Access Points", "Wi-Fi 5 Access Points", "Wireless Controllers", "Wi-Fi Routers"] },
      { name: "Cameras & Surveillance", img: "/images/20250712105444jwgqkj.png", href: "/c/networking", links: ["IP Cameras", "NVR", "PoE Cameras", "Outdoor Cameras"] },
      { name: "Conferencing, Phones", img: "/images/20250116162126hja9wv.png", href: "/c/networking", links: ["IP Phones", "Conference Phones", "Video Endpoints"] },
      { name: "Media Converters", img: "/images/20220409112509_426.png", href: "/c/networking", links: ["Fiber to Ethernet", "PoE Media Converters", "Industrial Converters"] },
      { name: "Network Adapters", img: "/images/20230321165822_776.png", href: "/c/networking", links: ["PCIe NICs", "10G/25G/100G NICs", "SmartNICs"] },
      { name: "Servers & KVM", img: "/images/202501161625092pt2sj.png", href: "/c/networking", links: ["1U/2U Servers", "KVM Switches", "Server Accessories"] },
      { name: "Router, Security, NPB", img: "/images/20250116162705er3rbv.png", href: "/c/networking", links: ["Enterprise Routers", "Firewalls", "Network Packet Brokers"] },
      { name: "Power", img: "/images/20220524152815_811.jpg", href: "/c/networking", links: ["PDU", "UPS", "Power Cords"] },
    ],
  },
  {
    id: "transceivers",
    name: "Optical Transceivers",
    icon: "/images/202512041505458inw4j.svg",
    blurb: "1G to 1.6T optics, InfiniBand and DAC/AOC — coded and tested for major OEM platforms.",
    families: [
      { name: "AI InfiniBand Modules", img: "/images/2026052514533153hnfm.png", href: "/c/transceivers", links: ["1.6T OSFP", "800G InfiniBand", "400G InfiniBand", "200G InfiniBand", "100G InfiniBand"] },
      { name: "AI Ethernet Modules", img: "/images/20220409111938_554.png", href: "/c/transceivers", links: ["800G Ethernet", "400G Ethernet", "200G Ethernet", "100G Ethernet"] },
      { name: "800/400/200/100G Modules", img: "/images/20220409111613_260.png", href: "/c/transceivers", links: ["QSFP-DD", "OSFP", "QSFP28", "QSFP56"] },
      { name: "50/25/10/1G Modules", img: "/images/20220409112509_426.png", href: "/c/transceivers", links: ["SFP+", "SFP28", "SFP", "Industrial SFP"] },
      { name: "Optical Transmission", img: "/images/20230130182452_449.png", href: "/c/transceivers", links: ["Coherent CFP2", "DWDM Tunable", "CWDM", "OTN Optics"] },
      { name: "Mobile & Access Network", img: "/images/20220409112509_426.png", href: "/c/transceivers", links: ["5G Fronthaul", "BiDi", "GPON/XG-PON"] },
      { name: "DAC/AOC/ACC/AEC Cables", img: "/images/20230321165822_776.png", href: "/c/transceivers", links: ["1.6T DAC/AOC", "800G DAC/AOC", "400G DAC/AOC", "100G DAC/AOC", "10/25G DAC"] },
      { name: "Others", img: "/images/2026070311032715a10j.jpg", href: "/c/transceivers", links: ["Converters", "Loopbacks", "Coding Services"] },
    ],
  },
  {
    id: "cables",
    name: "Fiber Optic Cables",
    icon: "/images/20251204150545q72two.svg",
    blurb: "Custom and standard fiber patch cables, MTP/MPO trunks, pigtails and adapters.",
    families: [
      { name: "MTP®/MPO Fiber Cables", img: "/images/12285.main.jpg", href: "/c/cables", links: ["MTP® Trunks", "MTP® Breakouts", "16/32 Fiber", "Polarity Options"] },
      { name: "Fiber Patch Cables", img: "/images/12285.main.jpg", href: "/c/cables", links: ["OS2 Simplex/Duplex", "OM3/OM4/OM5", "Uniboot", "Custom Length"] },
      { name: "MMC Fiber Connectivity", img: "/images/35488.main.jpg", href: "/c/cables", links: ["MMC Jumpers", "Very Small Form Factor"] },
      { name: "Specialty Fiber Cables", img: "/images/12285.main.jpg", href: "/c/cables", links: ["Armored", "Outdoor", "Industrial", "Bend Insensitive"] },
      { name: "Fiber Pigtails", img: "/images/12285.main.jpg", href: "/c/cables", links: ["LC/SC/FC/ST", "Ribbon", "Color Coded"] },
      { name: "Fiber Optic Connectivity", img: "/images/20260625112920j0ryma.jpg", href: "/c/cables", links: ["Adapters", "Connectors", "Attenuators"] },
      { name: "Cleaners & Tools", img: "/images/39721.1619489384125.jpg", href: "/c/cables", links: ["Pen Cleaners", "Cassettes", "Wipes"] },
      { name: "Splitters & Closures", img: "/images/20260604162517vxm3jd.jpg", href: "/c/cables", links: ["PLC Splitters", "FBT Splitters", "Closures"] },
    ],
  },
  {
    id: "panels",
    name: "Panels, Enclosures & Racks",
    icon: "/images/20251204150545fgijzo.svg",
    blurb: "FHD® high-density modular cabling, fiber enclosures, patch panels and racks.",
    families: [
      { name: "Fiber Optic Panels", img: "/images/35488.main.jpg", href: "/c/panels", links: ["FHD® Adapter Panels", "LGX Panels", "1U/2U/4U"] },
      { name: "Fiber Cassettes", img: "/images/20260624115840f1ugfm.jpg", href: "/c/panels", links: ["FHD® Cassettes", "MTP-LC", "Splice Cassettes"] },
      { name: "Fiber Enclosures", img: "/images/20251031104722830g5b.webp", href: "/c/panels", links: ["FHD® Enclosures", "Wall Mount", "Rack Mount"] },
      { name: "Cable Management", img: "/images/202608251816347hysti.webp", href: "/c/panels", links: ["Horizontal Managers", "Vertical Managers", "D-Rings"] },
      { name: "Power", img: "/images/20220524152815_811.jpg", href: "/c/panels", links: ["PDU", "Power Cords", "ATS"] },
      { name: "Racks & Cabinets", img: "/images/202501161625092pt2sj.png", href: "/c/panels", links: ["42U Cabinets", "Open Frames", "Wall Cabinets"] },
      { name: "Labels & Printers", img: "/images/202606282138103xhx5c.jpg", href: "/c/panels", links: ["Cable Labels", "Printers"] },
    ],
  },
  {
    id: "optical",
    name: "Optical Networking",
    icon: "/images/20251204150545iyk5ps.svg",
    blurb: "DWDM/CWDM mux, OTN platforms and D7000 series for 400G DCI and metro optical transport.",
    families: [
      { name: "Optical DCI Network", img: "/images/20250421112225_320.jpg.webp", href: "/c/optical", links: ["D7000 Series", "400G DCI", "Coherent Transport"] },
      { name: "Optical Line System", img: "/images/20260618153751r4eszs.jpg", href: "/c/optical", links: ["M6200", "FMT Series", "EDFA", "DCM"] },
      { name: "Enterprise Integrated System", img: "/images/20251113174249s74e2v.jpg", href: "/c/optical", links: ["All-in-one OTN", "Campus WDM"] },
      { name: "Multiplexer & OADM", img: "/images/20260618153751r4eszs.jpg", href: "/c/optical", links: ["CWDM Mux/Demux", "DWDM Mux/Demux", "OADM"] },
      { name: "PON Network", img: "/images/20260604162517vxm3jd.jpg", href: "/c/optical", links: ["OLT", "ONT", "PON Splitters"] },
      { name: "Optical Distribution Network", img: "/images/35488.main.jpg", href: "/c/optical", links: ["ODF", "ODB", "FDB"] },
      { name: "Optical Transmission", img: "/images/20230130182452_449.png", href: "/c/optical", links: ["Transponders", "Muxponders"] },
    ],
  },
  {
    id: "copper",
    name: "Copper Systems",
    icon: "/images/20251204150545x2nloe.svg",
    blurb: "Cat6/Cat6a/Cat8 patch cords, power cords, PDUs and copper patch panels.",
    families: [
      { name: "Copper Patch Cords", img: "/images/71879.main.jpg", href: "/c/copper", links: ["Cat6", "Cat6a", "Cat8", "Slim / Snagless"] },
      { name: "Pre-Term Copper Trunks", img: "/images/71879.main.jpg", href: "/c/copper", links: ["6/12/24 Port Trunks", "Shielded"] },
      { name: "Copper Bulk Cables", img: "/images/71879.main.jpg", href: "/c/copper", links: ["Cat6 UTP", "Cat6a STP", "Plenum / Riser"] },
      { name: "Copper Patch Panels", img: "/images/202606282138103xhx5c.jpg", href: "/c/copper", links: ["24/48 Port", "Cat6a", "Shielded"] },
      { name: "Cable Management", img: "/images/202608251816347hysti.webp", href: "/c/copper", links: ["Managers", "Velcro", "Rings"] },
      { name: "Faceplates & Boxes", img: "/images/202606282138103xhx5c.jpg", href: "/c/copper", links: ["Wall Plates", "Surface Boxes"] },
      { name: "Connectors & Jacks", img: "/images/71879.main.jpg", href: "/c/copper", links: ["Keystone Jacks", "RJ45 Plugs"] },
      { name: "Copper Testers & Tools", img: "/images/20220607112907_607.png", href: "/c/copper", links: ["Certifiers", "Punch Down"] },
    ],
  },
  {
    id: "tools",
    name: "Testers & Tools",
    icon: "/images/20251204150545ami2dj.svg",
    blurb: "Install, maintain, and test your networks while ensuring optimal performance.",
    families: [
      { name: "Fiber Optic Testers", img: "/images/20220409095221_859.png", href: "/c/tools", links: ["OTDR", "Power Meters", "Light Sources", "VFL", "Inspection"] },
      { name: "Fiber Optic Tools", img: "/images/20220409100241_777.png", href: "/c/tools", links: ["Cleavers", "Strippers", "Fusion Splicers", "Crimp Tools"] },
      { name: "Fiber Optic Cleaners", img: "/images/20220409094902_665.png", href: "/c/tools", links: ["One-Push Pens", "Cassettes", "Sticks & Wipes"] },
      { name: "Copper Tools", img: "/images/20220607112827_839.png", href: "/c/tools", links: ["Punch Down", "Crimpers", "Cable Strippers"] },
      { name: "Copper Testers", img: "/images/20220607112907_607.png", href: "/c/tools", links: ["Cable Certifiers", "Tone & Probe", "PoE Testers"] },
    ],
  },
];

export const PRODUCTS = [
  { id: "134657", sku: "S3900-48T6S-R", name: "48-Port Gigabit Ethernet L2+ Switch, 48 x Gigabit RJ45, 6 x 10Gb SFP+ Uplinks, Stackable", price: 569, was: 629, cat: "switches", img: "/images/134657.main.jpg", sold: "26.1K", tag: "Hot", ports: "48x 1G RJ45 + 6x 10G SFP+", chip: "Realtek", stock: 128, rating: 4.9, reviews: 412 },
  { id: "90131", sku: "S3400-24T4FP", name: "24-Port Gigabit L2+ Managed PoE+ Switch, 24 x 1Gb RJ45, 4 x 1Gb Combo", price: 219, was: 249, cat: "switches", img: "/images/202310271703590pm9zh.jpg", sold: "18.4K", tag: "Hot", ports: "24x 1G PoE+ + 4 Combo", chip: "Broadcom", stock: 86, rating: 4.8, reviews: 290 },
  { id: "409447", sku: "N5860-48SC", name: "48 x 10Gb SFP+, 8 x 100Gb QSFP28, PicOS® Data Center Switch", price: 4299, was: 4599, cat: "switches", img: "/images/110478.E.jpg", sold: "1.2K", tag: "New", ports: "48x 10G + 8x 100G", chip: "Broadcom", stock: 24, rating: 4.9, reviews: 38 },
  { id: "11552", sku: "SFP-10GSR-85", name: "10G SFP+ SFP-10G-SR 300m 850nm Duplex LC/UPC Module", price: 16, was: 19, cat: "transceivers", img: "/images/2025102915514707tvtk.jpg", sold: "210K", tag: "Hot", ports: "LC Duplex", chip: "", stock: 2400, rating: 4.9, reviews: 2104 },
  { id: "11555", sku: "SFP-10GLR-31", name: "10G SFP+ SFP-10G-LR 10km 1310nm Duplex LC/UPC Module", price: 19, was: 24, cat: "transceivers", img: "/images/20250623104653mj515i.jpg", sold: "186K", tag: "Hot", ports: "LC Duplex", chip: "", stock: 1800, rating: 4.9, reviews: 1880 },
  { id: "410977", sku: "SFP-100LX-31-I", name: "100M SFP GLC-FE-100LX-RGD 10km 1310nm Duplex LC/UPC Industrial Module", price: 22, cat: "transceivers", img: "/images/20260608141944vlapp7.jpg", sold: "3.1K", tag: "New", ports: "LC Duplex", chip: "", stock: 420, rating: 4.7, reviews: 41 },
  { id: "407263", sku: "QSFP-SFP10G-CVR", name: "40G QSFP+ to 10G SFP+ Converter Module", price: 39, cat: "transceivers", img: "/images/2026070311032715a10j.jpg", sold: "8.6K", tag: "New", ports: "QSFP+", chip: "", stock: 310, rating: 4.8, reviews: 96 },
  { id: "12285", sku: "SMXXSX", name: "Customized Simplex Fiber Patch Cable, LC/SC/FC/ST/LSH/MU", price: 3.5, cat: "cables", img: "/images/12285.main.jpg", sold: "92K", tag: "", ports: "Custom", chip: "", stock: 9999, rating: 4.9, reviews: 640 },
  { id: "63440", sku: "C6UTPSGSPVC", name: "Cat6 28AWG U/UTP CM Small OD Patch Cord, Snagless RJ45", price: 4.2, cat: "copper", img: "/images/71879.main.jpg", sold: "64K", tag: "", ports: "RJ45", chip: "", stock: 5000, rating: 4.8, reviews: 401 },
  { id: "35990", sku: "PC14C13-15A", name: "IEC320 C14 to C13, Heavy-Duty, 250V/15A 14AWG Power Cord", price: 8.9, cat: "copper", img: "/images/20220524152815_811.jpg", sold: "41K", tag: "", ports: "C14-C13", chip: "", stock: 2200, rating: 4.8, reviews: 220 },
  { id: "386811", sku: "zLP-zC15-14-zC14-2mBL", name: "Z-Lock⁺ Dual Locking C14 to C15 250V/15A 14AWG (Black)", price: 14.5, cat: "copper", img: "/images/20260604191023dt54st.jpg", sold: "620", tag: "New", ports: "C14-C15", chip: "", stock: 180, rating: 4.7, reviews: 12 },
  { id: "386815", sku: "zLP-zC15-14-zC14-2mRD", name: "Z-Lock⁺ Dual Locking C14 to C15 250V/15A 14AWG (Red)", price: 14.5, cat: "copper", img: "/images/20260604194959f5wrbj.jpg", sold: "410", tag: "New", ports: "C14-C15", chip: "", stock: 140, rating: 4.7, reviews: 8 },
  { id: "35488", sku: "FHD-FAP12LCDXSMF", name: "FHD® Adapter Panel, 12 x LC UPC Duplex (Blue), 24 Fibers, OS2", price: 18, cat: "panels", img: "/images/35488.main.jpg", sold: "22K", tag: "", ports: "24F LC", chip: "", stock: 760, rating: 4.9, reviews: 180 },
  { id: "382907", sku: "FHD-6LCUDXOS2", name: "FHD® Fiber Splice Cassette, LC UPC, OS2, 12 Fibers, 0.3dB Max.", price: 46, cat: "panels", img: "/images/20260624115840f1ugfm.jpg", sold: "1.8K", tag: "New", ports: "12F", chip: "", stock: 95, rating: 4.8, reviews: 22 },
  { id: "405011", sku: "WC6AP-U12P1101U", name: "Cat6a 110-Style Flat Wall Mount Patch Panel, 12-Port, T568A/B, 1RU", price: 29, cat: "panels", img: "/images/202606282138103xhx5c.jpg", sold: "740", tag: "New", ports: "12-Port", chip: "", stock: 210, rating: 4.6, reviews: 15 },
  { id: "399095", sku: "AD-LC-LC-U-OS2-DX-GFY-FS", name: "LC Female to LC Female UPC Duplex Single Mode Fiber Adapter", price: 2.8, cat: "cables", img: "/images/20260625112920j0ryma.jpg", sold: "12K", tag: "New", ports: "LC", chip: "", stock: 4000, rating: 4.9, reviews: 88 },
  { id: "11857", sku: "FS-1560", name: "1.5 x 60mm Fiber Optic Splice Protection Sleeve, 100pcs/pkg", price: 6.5, cat: "tools", img: "/images/11857.main.jpg", sold: "55K", tag: "", ports: "", chip: "", stock: 3000, rating: 4.8, reviews: 310 },
  { id: "39721", sku: "ATC-NE-E1", name: "NEOCLEAN-E One-Push Pen Cleaner, for LC/MU 1.25mm Connectors", price: 32, cat: "tools", img: "/images/39721.1619489384125.jpg", sold: "19K", tag: "", ports: "1.25mm", chip: "", stock: 540, rating: 4.9, reviews: 260 },
  { id: "410167", sku: "FBT-1×N", name: "Customized 1x N FBT Splitter, LC/SC/FC, Singlemode", price: 12, cat: "optical", img: "/images/20260604162517vxm3jd.jpg", sold: "2.4K", tag: "New", ports: "1xN", chip: "", stock: 330, rating: 4.7, reviews: 19 },
  { id: "393879", sku: "C8270A", name: "8CH CWDM Single-fiber Mux/Demux, 1270-1590nm, Side-A, MON/EXP Ports", price: 189, cat: "optical", img: "/images/20260618153751r4eszs.jpg", sold: "890", tag: "New", ports: "8CH", chip: "", stock: 48, rating: 4.8, reviews: 14 },
  { id: "320689", sku: "AP-N716", name: "Wi-Fi 7 Access Point, AmpCon, Three Radios, 2x2 MU-MIMO, Indoor", price: 309, cat: "networking", img: "/images/2025101415543358ioel.jpg", sold: "94", tag: "New", ports: "5 GbE · 9.3 Gbps", chip: "", stock: 70, rating: 4.8, reviews: 6 },
  { id: "149656", sku: "AP-N505", name: "Wi-Fi 6 Access Point, Airware, Dual Radios, 2x2 MU-MIMO, Indoor", price: 169, cat: "networking", img: "/images/202511201824387h997d.jpg", sold: "5.1K", tag: "Hot", ports: "1 GbE · 3 Gbps", chip: "", stock: 210, rating: 4.8, reviews: 48 },
  { id: "108705", sku: "AP-W6D2400C", name: "Wi-Fi 6 Access Point, Airware, Dual Radios, 2x2 MU-MIMO, Indoor", price: 169, cat: "networking", img: "/images/20251117122128avtyae.jpg", sold: "2K", tag: "Hot", ports: "1 GbE · 2.4 Gbps", chip: "", stock: 160, rating: 4.7, reviews: 30 },
  { id: "206655", sku: "S5870-48MX6BC-U", name: "48 x 2.5G/5G/10G RJ45, 6 x 25G/100G, PicOS® Wi-Fi 7 Campus Switch", price: 1899, cat: "switches", img: "/images/20250116162633cququm.png", sold: "2.1K", tag: "Hot", ports: "48x mGig + 6x 100G", chip: "Broadcom", stock: 42, rating: 4.9, reviews: 27 },
];

export const NEW_IDS = ["409447", "386811", "386815", "407263", "410977", "399095", "382907", "410167", "393879", "405011"];
export const REC_IDS = ["134657", "90131", "35990", "11552", "11555", "12285", "35488", "11857", "63440", "39721"];

export const HERO = [
  { img: "/images/20240430145508_113.jpg.webp", href: "/about", title: "U.S. Same Day Shipping", sub: "For Delaware warehouse orders placed before 4:00PM EST." },
  { img: "/images/20251113174249s74e2v.jpg", href: "/software", title: "PicOS® Data Center Switches", sub: "Dense spine, leaf and ToR switches for AI fabrics and data center networks." },
  { img: "/images/202604081453079w890k.jpg", href: "/solutions", title: "1.6T Optical Interconnect for InfiniBand NVIDIA® B300", sub: "1.6T optics, dense cabling, and low-latency GPU communication." },
  { img: "/images/20250421112225_320.jpg.webp", href: "/c/optical", title: "400G DCI Optical Solution", sub: "Build 400G DCI networks with the D7000 Series." },
  { img: "/images/202608251816347hysti.webp", href: "/solutions", title: "Enterprise Buildings and Campus Cabling Solution", sub: "Unified connectivity, scalable infrastructure, simplified management." },
  { img: "/images/20260509180559gw052w.jpg", href: "/software", title: "AmpCon Management Software for Campus Networks", sub: "Deploy faster, operate smarter — Day 0 to Day 2+." },
  { img: "/images/20260228100338z12sfn.jpg", href: "/c/panels", title: "FHD® High Density Modular Cabling", sub: "Terminated, tested, and configured for plug & play deployment." },
];

export const SOLUTIONS = [
  { title: "800G RoCE Lossless Network", img: "/images/20251030173716j4aien.jpg", text: "Ethernet networking for AI accelerates job completion times and GPU use." },
  { title: "Automate EVPN-VXLAN Fabric", img: "/images/20251226161515jrnoop.jpg", text: "Simplify VXLAN fabric deployment with AmpCon-DC." },
  { title: "Multi-Branch Campus Network", img: "/images/20251031104521iljcq6.webp", text: "PicOS® and AmpCon-Campus for remote Day-0 to Day-2+ operations." },
  { title: "High-density Modular Cabling", img: "/images/20251031104722830g5b.webp", text: "FHD® modular cabling for quick plug-in data center deployment." },
  { title: "400G DCI Optical Solution", img: "/images/20250421112225_320.jpg.webp", text: "D7000 Series for high-capacity DCI and streamlined O&M." },
  { title: "1.6T Optical Interconnect", img: "/images/202604081453079w890k.jpg", text: "InfiniBand NVIDIA® B300 AI cluster interconnect." },
];

export function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}
export function byCat(id) {
  return PRODUCTS.filter((p) => p.cat === id);
}
export function getCat(id) {
  return CATEGORIES.find((c) => c.id === id);
}
