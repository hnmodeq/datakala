export const money = (n) =>
  "US$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const CATEGORIES = [
  {
    id: "switches",
    name: "سوئیچ‌ها",
    icon: "/images/20251204115841do4nl3.svg",
    blurb: "شبکه هوشمند آینده‌نگر برای سازمان‌ها و دیتاسنترهای مدرن بسازید.",
    families: [
      { name: "سوئیچ‌های سازمانی PicOS®", img: "/images/20250116162633cququm.png", href: "/c/switches", links: ["سوئیچ‌های PicOS® با سرعت 1/2.5G", "سوئیچ‌های PicOS® با سرعت 10/25G", "سوئیچ‌های PicOS® با سرعت 40/100G", "سوئیچ‌های PicOS® با سرعت 200/400G", "پلتفرم مدیریت AmpCon-Campus"] },
      { name: "سوئیچ‌های دیتاسنتر PicOS®", img: "/images/20250116162705er3rbv.png", href: "/c/switches", links: ["سوئیچ‌های PicOS® با سرعت 10/25G", "سوئیچ‌های PicOS® با سرعت 100/200G", "سوئیچ‌های PicOS® با سرعت 400/800G", "سوئیچ‌های PicOS® برای HPC/AI", "پلتفرم مدیریت AmpCon-DC"] },
      { name: "سوئیچ‌های PoE+ با PicOS®", img: "/images/20250712105444jwgqkj.png", href: "/c/switches", links: ["سوئیچ‌های PicOS® PoE+ یک گیگابیت", "سوئیچ‌های PicOS® PoE+ با سرعت 2.5/5G", "سوئیچ‌های PicOS® PoE+ ده گیگابیت", "پلتفرم مدیریت AmpCon-Campus", "لایسنس و خدمات PicOS®"] },
      { name: "سوئیچ‌های اترنت صنعتی", img: "/images/20230508182555_651.png", href: "/c/switches", links: ["سوئیچ صنعتی ریل DIN", "سوئیچ صنعتی رک‌مونت", "سوئیچ صنعتی دیواری", "سوئیچ صنعتی TSN", "سوئیچ صنعتی PoE+"] },
      { name: "سوئیچ‌های سازمانی", img: "/images/20250116162126hja9wv.png", href: "/c/switches", links: ["سوئیچ سازمانی 1/2.5G", "سوئیچ سازمانی 10G", "سوئیچ سازمانی 25G", "سوئیچ سازمانی 40G", "سوئیچ سازمانی 100G"] },
      { name: "سوئیچ‌های دیتاسنتر", img: "/images/202501161625092pt2sj.png", href: "/c/switches", links: ["سوئیچ دیتاسنتر 10/25G", "سوئیچ دیتاسنتر 100G", "سوئیچ ماژولار دیتاسنتر", "Network Packet Broker (NPB)", "سوئیچ‌های NVIDIA®"] },
      { name: "سوئیچ‌های PoE+", img: "/images/20230512103812_200.png", href: "/c/switches", links: ["سوئیچ PoE+ یک گیگابیت", "سوئیچ PoE+ با سرعت 2.5/5G", "سوئیچ PoE++ ده گیگابیت", "لوازم جانبی سوئیچ"] },
      { name: "سوئیچ‌های SME", img: "/images/20260223142838c3xw17.png", href: "/c/switches", links: ["سوئیچ SME جمع‌وجور", "سوئیچ SME استاندارد", "سوئیچ SME حرفه‌ای", "سوئیچ SME حرفه‌ای مکس", "سوئیچ SME تجمیعی"] },
    ],
  },
  {
    id: "networking",
    name: "شبکه",
    icon: "/images/20251204150545bfnzhc.svg",
    blurb: "اکسس‌پوینت بی‌سیم، دوربین، مدیا کانورتر، کارت شبکه و دسترسی پردیس برای Wi-Fi 6/7.",
    families: [
      { name: "بی‌سیم", img: "/images/20251014172228tp621m.png", href: "/c/networking", links: ["اکسس‌پوینت Wi-Fi 7", "اکسس‌پوینت Wi-Fi 6", "اکسس‌پوینت Wi-Fi 5", "کنترلر بی‌سیم", "روتر Wi-Fi"] },
      { name: "دوربین و نظارت", img: "/images/20250712105444jwgqkj.png", href: "/c/networking", links: ["دوربین IP", "NVR", "دوربین PoE", "دوربین فضای باز"] },
      { name: "کنفرانس و تلفن", img: "/images/20250116162126hja9wv.png", href: "/c/networking", links: ["تلفن IP", "تلفن کنفرانس", "پایانه ویدئو"] },
      { name: "مدیا کانورتر", img: "/images/20220409112509_426.png", href: "/c/networking", links: ["فیبر به اترنت", "مدیا کانورتر PoE", "کانورتر صنعتی"] },
      { name: "آداپتور شبکه", img: "/images/20230321165822_776.png", href: "/c/networking", links: ["کارت شبکه PCIe", "کارت 10G/25G/100G", "SmartNIC"] },
      { name: "سرور و KVM", img: "/images/202501161625092pt2sj.png", href: "/c/networking", links: ["سرور 1U/2U", "سوئیچ KVM", "لوازم جانبی سرور"] },
      { name: "روتر، امنیت، NPB", img: "/images/20250116162705er3rbv.png", href: "/c/networking", links: ["روتر سازمانی", "فایروال", "Network Packet Broker"] },
      { name: "برق", img: "/images/20220524152815_811.jpg", href: "/c/networking", links: ["PDU", "UPS", "کابل برق"] },
    ],
  },
  {
    id: "transceivers",
    name: "ماژول‌های نوری",
    icon: "/images/202512041505458inw4j.svg",
    blurb: "اپتیک از 1G تا 1.6T، InfiniBand و DAC/AOC — کدگذاری و تست‌شده برای پلتفرم‌های اصلی OEM.",
    families: [
      { name: "ماژول‌های InfiniBand هوش مصنوعی", img: "/images/2026052514533153hnfm.png", href: "/c/transceivers", links: ["1.6T OSFP", "InfiniBand 800G", "InfiniBand 400G", "InfiniBand 200G", "InfiniBand 100G"] },
      { name: "ماژول‌های اترنت هوش مصنوعی", img: "/images/20220409111938_554.png", href: "/c/transceivers", links: ["اترنت 800G", "اترنت 400G", "اترنت 200G", "اترنت 100G"] },
      { name: "ماژول‌های 800/400/200/100G", img: "/images/20220409111613_260.png", href: "/c/transceivers", links: ["QSFP-DD", "OSFP", "QSFP28", "QSFP56"] },
      { name: "ماژول‌های 50/25/10/1G", img: "/images/20220409112509_426.png", href: "/c/transceivers", links: ["SFP+", "SFP28", "SFP", "SFP صنعتی"] },
      { name: "انتقال نوری", img: "/images/20230130182452_449.png", href: "/c/transceivers", links: ["CFP2 کوهِرنت", "DWDM قابل تنظیم", "CWDM", "اپتیک OTN"] },
      { name: "شبکه موبایل و دسترسی", img: "/images/20220409112509_426.png", href: "/c/transceivers", links: ["فرانت‌هال 5G", "BiDi", "GPON/XG-PON"] },
      { name: "کابل‌های DAC/AOC/ACC/AEC", img: "/images/20230321165822_776.png", href: "/c/transceivers", links: ["DAC/AOC با سرعت 1.6T", "DAC/AOC هشتصد گیگابیت", "DAC/AOC چهارصد گیگابیت", "DAC/AOC صد گیگابیت", "DAC با سرعت 10/25G"] },
      { name: "سایر", img: "/images/2026070311032715a10j.jpg", href: "/c/transceivers", links: ["کانورتر", "لوپ‌بک", "خدمات کدنویسی"] },
    ],
  },
  {
    id: "cables",
    name: "کابل‌های فیبر نوری",
    icon: "/images/20251204150545q72two.svg",
    blurb: "پچ‌کورد فیبر سفارشی و استاندارد، ترانک MTP/MPO، پیگتیل و آداپتور.",
    families: [
      { name: "کابل فیبر MTP®/MPO", img: "/images/12285.main.jpg", href: "/c/cables", links: ["ترانک MTP®", "بریک‌اوت MTP®", "۱۶/۳۲ تار", "گزینه‌های قطبیت"] },
      { name: "پچ‌کورد فیبر نوری", img: "/images/12285.main.jpg", href: "/c/cables", links: ["سیمپلکس/دوبلکس OS2", "OM3/OM4/OM5", "یونی‌بوت", "طول سفارشی"] },
      { name: "اتصال فیبر MMC", img: "/images/35488.main.jpg", href: "/c/cables", links: ["جامپر MMC", "فرم‌فاکتور بسیار کوچک"] },
      { name: "کابل فیبر تخصصی", img: "/images/12285.main.jpg", href: "/c/cables", links: ["زره‌دار", "فضای باز", "صنعتی", "مقاوم در برابر خمش"] },
      { name: "پیگتیل فیبر", img: "/images/12285.main.jpg", href: "/c/cables", links: ["LC/SC/FC/ST", "ریبون", "رنگ‌بندی‌شده"] },
      { name: "اتصالات فیبر نوری", img: "/images/20260625112920j0ryma.jpg", href: "/c/cables", links: ["آداپتور", "کانکتور", "اتنیویتور"] },
      { name: "تمیزکننده و ابزار", img: "/images/39721.1619489384125.jpg", href: "/c/cables", links: ["قلم تمیزکننده", "کاست", "دستمال"] },
      { name: "اسپلیتر و کلوزر", img: "/images/20260604162517vxm3jd.jpg", href: "/c/cables", links: ["اسپلیتر PLC", "اسپلیتر FBT", "کلوزر"] },
    ],
  },
  {
    id: "panels",
    name: "پنل، محفظه و رک",
    icon: "/images/20251204150545fgijzo.svg",
    blurb: "کابل‌کشی ماژولار چگالی بالا FHD®، محفظه فیبر، پچ‌پنل و رک.",
    families: [
      { name: "پنل فیبر نوری", img: "/images/35488.main.jpg", href: "/c/panels", links: ["پنل آداپتور FHD®", "پنل LGX", "1U/2U/4U"] },
      { name: "کاست فیبر", img: "/images/20260624115840f1ugfm.jpg", href: "/c/panels", links: ["کاست FHD®", "MTP-LC", "کاست اسپلایس"] },
      { name: "محفظه فیبر", img: "/images/20251031104722830g5b.webp", href: "/c/panels", links: ["محفظه FHD®", "دیواری", "رک‌مونت"] },
      { name: "مدیریت کابل", img: "/images/202608251816347hysti.webp", href: "/c/panels", links: ["مدیر افقی", "مدیر عمودی", "D-Ring"] },
      { name: "برق", img: "/images/20220524152815_811.jpg", href: "/c/panels", links: ["PDU", "کابل برق", "ATS"] },
      { name: "رک و کابینت", img: "/images/202501161625092pt2sj.png", href: "/c/panels", links: ["کابینت 42U", "فریم باز", "کابینت دیواری"] },
      { name: "برچسب و چاپگر", img: "/images/202606282138103xhx5c.jpg", href: "/c/panels", links: ["برچسب کابل", "چاپگر"] },
    ],
  },
  {
    id: "optical",
    name: "شبکه نوری",
    icon: "/images/20251204150545iyk5ps.svg",
    blurb: "مالتی‌پلکسر DWDM/CWDM، پلتفرم OTN و سری D7000 برای DCI چهارصد گیگابیت و انتقال نوری مترو.",
    families: [
      { name: "شبکه نوری DCI", img: "/images/20250421112225_320.jpg.webp", href: "/c/optical", links: ["سری D7000", "DCI چهارصد گیگابیت", "انتقال کوهِرنت"] },
      { name: "سیستم خط نوری", img: "/images/20260618153751r4eszs.jpg", href: "/c/optical", links: ["M6200", "سری FMT", "EDFA", "DCM"] },
      { name: "سیستم یکپارچه سازمانی", img: "/images/20251113174249s74e2v.jpg", href: "/c/optical", links: ["OTN همه‌دریک", "WDM پردیس"] },
      { name: "مالتی‌پلکسر و OADM", img: "/images/20260618153751r4eszs.jpg", href: "/c/optical", links: ["Mux/Demux CWDM", "Mux/Demux DWDM", "OADM"] },
      { name: "شبکه PON", img: "/images/20260604162517vxm3jd.jpg", href: "/c/optical", links: ["OLT", "ONT", "اسپلیتر PON"] },
      { name: "شبکه توزیع نوری", img: "/images/35488.main.jpg", href: "/c/optical", links: ["ODF", "ODB", "FDB"] },
      { name: "انتقال نوری", img: "/images/20230130182452_449.png", href: "/c/optical", links: ["ترانسپاندر", "ماکسپاندر"] },
    ],
  },
  {
    id: "copper",
    name: "سیستم‌های مسی",
    icon: "/images/20251204150545x2nloe.svg",
    blurb: "پچ‌کورد Cat6/Cat6a/Cat8، کابل برق، PDU و پچ‌پنل مسی.",
    families: [
      { name: "پچ‌کورد مسی", img: "/images/71879.main.jpg", href: "/c/copper", links: ["Cat6", "Cat6a", "Cat8", "اسلیم / اسنگلِس"] },
      { name: "ترانک مسی پیش‌ساخته", img: "/images/71879.main.jpg", href: "/c/copper", links: ["ترانک ۶/۱۲/۲۴ پورت", "شیلددار"] },
      { name: "کابل فله مسی", img: "/images/71879.main.jpg", href: "/c/copper", links: ["Cat6 UTP", "Cat6a STP", "Plenum / Riser"] },
      { name: "پچ‌پنل مسی", img: "/images/202606282138103xhx5c.jpg", href: "/c/copper", links: ["۲۴/۴۸ پورت", "Cat6a", "شیلددار"] },
      { name: "مدیریت کابل", img: "/images/202608251816347hysti.webp", href: "/c/copper", links: ["مدیر کابل", "چسبک Velcro", "حلقه"] },
      { name: "صفحه و جعبه", img: "/images/202606282138103xhx5c.jpg", href: "/c/copper", links: ["صفحه دیواری", "جعبه روکار"] },
      { name: "کانکتور و جک", img: "/images/71879.main.jpg", href: "/c/copper", links: ["جک کیستون", "پلاگ RJ45"] },
      { name: "تستر و ابزار مسی", img: "/images/20220607112907_607.png", href: "/c/copper", links: ["سرتیفایِر", "پانچ‌داون"] },
    ],
  },
  {
    id: "tools",
    name: "تستر و ابزار",
    icon: "/images/20251204150545ami2dj.svg",
    blurb: "نصب، نگهداری و تست شبکه برای اطمینان از بهترین عملکرد.",
    families: [
      { name: "تستر فیبر نوری", img: "/images/20220409095221_859.png", href: "/c/tools", links: ["OTDR", "پاورمتر", "منبع نور", "VFL", "بازرسی"] },
      { name: "ابزار فیبر نوری", img: "/images/20220409100241_777.png", href: "/c/tools", links: ["کلیور", "استریپر", "فیوژن اسپلایسر", "ابزار کِریمپ"] },
      { name: "تمیزکننده فیبر نوری", img: "/images/20220409094902_665.png", href: "/c/tools", links: ["قلم یک‌فشاره", "کاست", "استیک و دستمال"] },
      { name: "ابزار مسی", img: "/images/20220607112827_839.png", href: "/c/tools", links: ["پانچ‌داون", "کِریمپر", "استریپر کابل"] },
      { name: "تستر مسی", img: "/images/20220607112907_607.png", href: "/c/tools", links: ["سرتیفایِر کابل", "تون و پروب", "تستر PoE"] },
    ],
  },
];

export const PRODUCTS = [
  { id: "134657", sku: "S3900-48T6S-R", name: "سوئیچ اترنت گیگابیتی L2+ با ۴۸ پورت، ۴۸ × گیگابیت RJ45، ۶ آپ‌لینک 10Gb SFP+، قابل استک", price: 569, was: 629, cat: "switches", img: "/images/134657.main.jpg", sold: "۲۶٫۱ هزار", tag: "Hot", ports: "48x 1G RJ45 + 6x 10G SFP+", chip: "Realtek", stock: 128, rating: 4.9, reviews: 412 },
  { id: "90131", sku: "S3400-24T4FP", name: "سوئیچ مدیریتی PoE+ گیگابیتی L2+ با ۲۴ پورت، ۲۴ × 1Gb RJ45، ۴ × کمبوی 1Gb", price: 219, was: 249, cat: "switches", img: "/images/202310271703590pm9zh.jpg", sold: "۱۸٫۴ هزار", tag: "Hot", ports: "24x 1G PoE+ + 4 Combo", chip: "Broadcom", stock: 86, rating: 4.8, reviews: 290 },
  { id: "409447", sku: "N5860-48SC", name: "سوئیچ دیتاسنتر PicOS® با ۴۸ × 10Gb SFP+ و ۸ × 100Gb QSFP28", price: 4299, was: 4599, cat: "switches", img: "/images/110478.E.jpg", sold: "۱٫۲ هزار", tag: "New", ports: "48x 10G + 8x 100G", chip: "Broadcom", stock: 24, rating: 4.9, reviews: 38 },
  { id: "11552", sku: "SFP-10GSR-85", name: "ماژول 10G SFP+ مدل SFP-10G-SR، ۳۰۰ متر، ۸۵۰ نانومتر، دوبلکس LC/UPC", price: 16, was: 19, cat: "transceivers", img: "/images/2025102915514707tvtk.jpg", sold: "۲۱۰ هزار", tag: "Hot", ports: "LC Duplex", chip: "", stock: 2400, rating: 4.9, reviews: 2104 },
  { id: "11555", sku: "SFP-10GLR-31", name: "ماژول 10G SFP+ مدل SFP-10G-LR، ۱۰ کیلومتر، ۱۳۱۰ نانومتر، دوبلکس LC/UPC", price: 19, was: 24, cat: "transceivers", img: "/images/20250623104653mj515i.jpg", sold: "۱۸۶ هزار", tag: "Hot", ports: "LC Duplex", chip: "", stock: 1800, rating: 4.9, reviews: 1880 },
  { id: "410977", sku: "SFP-100LX-31-I", name: "ماژول صنعتی 100M SFP مدل GLC-FE-100LX-RGD، ۱۰ کیلومتر، ۱۳۱۰ نانومتر، دوبلکس LC/UPC", price: 22, cat: "transceivers", img: "/images/20260608141944vlapp7.jpg", sold: "۳٫۱ هزار", tag: "New", ports: "LC Duplex", chip: "", stock: 420, rating: 4.7, reviews: 41 },
  { id: "407263", sku: "QSFP-SFP10G-CVR", name: "ماژول کانورتر 40G QSFP+ به 10G SFP+", price: 39, cat: "transceivers", img: "/images/2026070311032715a10j.jpg", sold: "۸٫۶ هزار", tag: "New", ports: "QSFP+", chip: "", stock: 310, rating: 4.8, reviews: 96 },
  { id: "12285", sku: "SMXXSX", name: "پچ‌کورد فیبر سیمپلکس سفارشی، LC/SC/FC/ST/LSH/MU", price: 3.5, cat: "cables", img: "/images/12285.main.jpg", sold: "۹۲ هزار", tag: "", ports: "Custom", chip: "", stock: 9999, rating: 4.9, reviews: 640 },
  { id: "63440", sku: "C6UTPSGSPVC", name: "پچ‌کورد Cat6 با قطر کم، 28AWG U/UTP CM، RJ45 اسنگلِس", price: 4.2, cat: "copper", img: "/images/71879.main.jpg", sold: "۶۴ هزار", tag: "", ports: "RJ45", chip: "", stock: 5000, rating: 4.8, reviews: 401 },
  { id: "35990", sku: "PC14C13-15A", name: "کابل برق سنگین IEC320 C14 به C13، 250V/15A، 14AWG", price: 8.9, cat: "copper", img: "/images/20220524152815_811.jpg", sold: "۴۱ هزار", tag: "", ports: "C14-C13", chip: "", stock: 2200, rating: 4.8, reviews: 220 },
  { id: "386811", sku: "zLP-zC15-14-zC14-2mBL", name: "کابل قفل دوتایی Z-Lock⁺ از C14 به C15، 250V/15A 14AWG (مشکی)", price: 14.5, cat: "copper", img: "/images/20260604191023dt54st.jpg", sold: "۶۲۰", tag: "New", ports: "C14-C15", chip: "", stock: 180, rating: 4.7, reviews: 12 },
  { id: "386815", sku: "zLP-zC15-14-zC14-2mRD", name: "کابل قفل دوتایی Z-Lock⁺ از C14 به C15، 250V/15A 14AWG (قرمز)", price: 14.5, cat: "copper", img: "/images/20260604194959f5wrbj.jpg", sold: "۴۱۰", tag: "New", ports: "C14-C15", chip: "", stock: 140, rating: 4.7, reviews: 8 },
  { id: "35488", sku: "FHD-FAP12LCDXSMF", name: "پنل آداپتور FHD®، ۱۲ × LC UPC دوبلکس (آبی)، ۲۴ تار، OS2", price: 18, cat: "panels", img: "/images/35488.main.jpg", sold: "۲۲ هزار", tag: "", ports: "24F LC", chip: "", stock: 760, rating: 4.9, reviews: 180 },
  { id: "382907", sku: "FHD-6LCUDXOS2", name: "کاست اسپلایس فیبر FHD®، LC UPC، OS2، ۱۲ تار، حداکثر ۰٫۳ دسی‌بل", price: 46, cat: "panels", img: "/images/20260624115840f1ugfm.jpg", sold: "۱٫۸ هزار", tag: "New", ports: "12F", chip: "", stock: 95, rating: 4.8, reviews: 22 },
  { id: "405011", sku: "WC6AP-U12P1101U", name: "پچ‌پنل دیواری تخت Cat6a سبک 110، ۱۲ پورت، T568A/B، 1RU", price: 29, cat: "panels", img: "/images/202606282138103xhx5c.jpg", sold: "۷۴۰", tag: "New", ports: "12-Port", chip: "", stock: 210, rating: 4.6, reviews: 15 },
  { id: "399095", sku: "AD-LC-LC-U-OS2-DX-GFY-FS", name: "آداپتور فیبر سینگل‌مود دوبلکس LC ماده به LC ماده UPC", price: 2.8, cat: "cables", img: "/images/20260625112920j0ryma.jpg", sold: "۱۲ هزار", tag: "New", ports: "LC", chip: "", stock: 4000, rating: 4.9, reviews: 88 },
  { id: "11857", sku: "FS-1560", name: "غلاف محافظ اسپلایس فیبر نوری ۱٫۵ × ۶۰ میلی‌متر، ۱۰۰ عدد در بسته", price: 6.5, cat: "tools", img: "/images/11857.main.jpg", sold: "۵۵ هزار", tag: "", ports: "", chip: "", stock: 3000, rating: 4.8, reviews: 310 },
  { id: "39721", sku: "ATC-NE-E1", name: "قلم تمیزکننده یک‌فشاره NEOCLEAN-E برای کانکتور LC/MU قطر ۱٫۲۵ میلی‌متر", price: 32, cat: "tools", img: "/images/39721.1619489384125.jpg", sold: "۱۹ هزار", tag: "", ports: "1.25mm", chip: "", stock: 540, rating: 4.9, reviews: 260 },
  { id: "410167", sku: "FBT-1×N", name: "اسپلیتر FBT سفارشی 1x N، LC/SC/FC، سینگل‌مود", price: 12, cat: "optical", img: "/images/20260604162517vxm3jd.jpg", sold: "۲٫۴ هزار", tag: "New", ports: "1xN", chip: "", stock: 330, rating: 4.7, reviews: 19 },
  { id: "393879", sku: "C8270A", name: "Mux/Demux تک‌فیبر CWDM هشت کاناله، ۱۲۷۰–۱۵۹۰ نانومتر، سمت A، پورت MON/EXP", price: 189, cat: "optical", img: "/images/20260618153751r4eszs.jpg", sold: "۸۹۰", tag: "New", ports: "8CH", chip: "", stock: 48, rating: 4.8, reviews: 14 },
  { id: "320689", sku: "AP-N716", name: "اکسس‌پوینت Wi-Fi 7، AmpCon، سه رادیو، 2x2 MU-MIMO، داخلی", price: 309, cat: "networking", img: "/images/2025101415543358ioel.jpg", sold: "۹۴", tag: "New", ports: "5 GbE · 9.3 Gbps", chip: "", stock: 70, rating: 4.8, reviews: 6 },
  { id: "149656", sku: "AP-N505", name: "اکسس‌پوینت Wi-Fi 6، Airware، دو رادیو، 2x2 MU-MIMO، داخلی", price: 169, cat: "networking", img: "/images/202511201824387h997d.jpg", sold: "۵٫۱ هزار", tag: "Hot", ports: "1 GbE · 3 Gbps", chip: "", stock: 210, rating: 4.8, reviews: 48 },
  { id: "108705", sku: "AP-W6D2400C", name: "اکسس‌پوینت Wi-Fi 6، Airware، دو رادیو، 2x2 MU-MIMO، داخلی", price: 169, cat: "networking", img: "/images/20251117122128avtyae.jpg", sold: "۲ هزار", tag: "Hot", ports: "1 GbE · 2.4 Gbps", chip: "", stock: 160, rating: 4.7, reviews: 30 },
  { id: "206655", sku: "S5870-48MX6BC-U", name: "سوئیچ پردیس PicOS® برای Wi-Fi 7، ۴۸ × 2.5G/5G/10G RJ45، ۶ × 25G/100G", price: 1899, cat: "switches", img: "/images/20250116162633cququm.png", sold: "۲٫۱ هزار", tag: "Hot", ports: "48x mGig + 6x 100G", chip: "Broadcom", stock: 42, rating: 4.9, reviews: 27 },
];

export const NEW_IDS = ["409447", "386811", "386815", "407263", "410977", "399095", "382907", "410167", "393879", "405011"];
export const REC_IDS = ["134657", "90131", "35990", "11552", "11555", "12285", "35488", "11857", "63440", "39721"];

export const HERO = [
  { img: "/images/20240430145508_113.jpg.webp", href: "/about", title: "ارسال همان‌روز در آمریکا", sub: "برای سفارش‌های انبار دلاور که قبل از ساعت ۱۶:۰۰ EST ثبت شوند." },
  { img: "/images/20251113174249s74e2v.jpg", href: "/software", title: "سوئیچ‌های دیتاسنتر PicOS®", sub: "سوئیچ‌های متراکم spine، leaf و ToR برای فابریک هوش مصنوعی و شبکه‌های دیتاسنتر." },
  { img: "/images/202604081453079w890k.jpg", href: "/solutions", title: "اتصال نوری 1.6T برای InfiniBand NVIDIA® B300", sub: "اپتیک 1.6T، کابل‌کشی متراکم و ارتباط کم‌تأخیر GPU." },
  { img: "/images/20250421112225_320.jpg.webp", href: "/c/optical", title: "راه‌حل نوری DCI چهارصد گیگابیت", sub: "شبکه DCI چهارصد گیگابیت را با سری D7000 بسازید." },
  { img: "/images/202608251816347hysti.webp", href: "/solutions", title: "راه‌حل کابل‌کشی ساختمان و پردیس سازمانی", sub: "اتصال یکپارچه، زیرساخت مقیاس‌پذیر، مدیریت ساده‌تر." },
  { img: "/images/20260509180559gw052w.jpg", href: "/software", title: "نرم‌افزار مدیریت AmpCon برای شبکه‌های پردیس", sub: "سریع‌تر مستقر کنید، هوشمندتر بهره‌برداری کنید — از روز صفر تا روز ۲+." },
  { img: "/images/20260228100338z12sfn.jpg", href: "/c/panels", title: "کابل‌کشی ماژولار چگالی بالا FHD®", sub: "سرهم‌شده، تست‌شده و پیکربندی‌شده برای استقرار plug & play." },
];

export const SOLUTIONS = [
  { title: "شبکه بدون اتلاف 800G RoCE", img: "/images/20251030173716j4aien.jpg", text: "شبکه اترنت برای هوش مصنوعی، زمان اتمام کار و بهره‌وری GPU را بالا می‌برد." },
  { title: "اتوماسیون فابریک EVPN-VXLAN", img: "/images/20251226161515jrnoop.jpg", text: "استقرار فابریک VXLAN را با AmpCon-DC ساده کنید." },
  { title: "شبکه پردیس چندشعبه", img: "/images/20251031104521iljcq6.webp", text: "PicOS® و AmpCon-Campus برای عملیات از راه دور از روز صفر تا روز ۲+." },
  { title: "کابل‌کشی ماژولار چگالی بالا", img: "/images/20251031104722830g5b.webp", text: "کابل‌کشی ماژولار FHD® برای استقرار سریع plug-in در دیتاسنتر." },
  { title: "راه‌حل نوری DCI چهارصد گیگابیت", img: "/images/20250421112225_320.jpg.webp", text: "سری D7000 برای DCI پرظرفیت و عملیات و نگهداری ساده‌تر." },
  { title: "اتصال نوری 1.6T", img: "/images/202604081453079w890k.jpg", text: "اتصال کلاستر هوش مصنوعی InfiniBand NVIDIA® B300." },
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
