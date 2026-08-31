/** All Products mega-menu trees matching FS.com (New/Hot badges). */
export const L = (label, badge) => ({ label, badge });

export const MEGA = {
  switches: [
    { id: "picos-enterprise", name: "سوئیچ‌های سازمانی PicOS®", img: "/images/20250116162633cququm.png", href: "/c/switches/picos-enterprise", links: [L("سوئیچ‌های PicOS® با سرعت 1/2.5G", "Hot"), L("سوئیچ‌های PicOS® با سرعت 10/25G"), L("سوئیچ‌های PicOS® با سرعت 40/100G", "New"), L("سوئیچ‌های PicOS® با سرعت 200/400G", "New"), L("پلتفرم AmpCon-Campus")] },
    { id: "picos-dc", name: "سوئیچ‌های دیتاسنتر PicOS®", img: "/images/20250116162705er3rbv.png", href: "/c/switches/picos-dc", links: [L("سوئیچ‌های PicOS® با سرعت 10/25G"), L("سوئیچ‌های PicOS® با سرعت 100/200G", "Hot"), L("سوئیچ‌های PicOS® با سرعت 400/800G", "Hot"), L("سوئیچ‌های PicOS® برای HPC/AI", "New"), L("NPB مبتنی بر PicOS®")] },
    { id: "picos-poe", name: "سوئیچ‌های PoE+ با PicOS®", img: "/images/20250712105444jwgqkj.png", href: "/c/switches/picos-poe", links: [L("سوئیچ‌های PicOS® PoE+ یک گیگابیت"), L("سوئیچ‌های PicOS® PoE+ با سرعت 2.5/5G", "Hot"), L("سوئیچ‌های PicOS® PoE+ ده گیگابیت", "New"), L("پلتفرم AmpCon-Campus"), L("لایسنس و خدمات PicOS®")] },
    { id: "industrial", name: "سوئیچ‌های اترنت صنعتی", img: "/images/20230508182555_651.png", href: "/c/switches/industrial", links: [L("صنعتی ریل DIN"), L("صنعتی رک‌مونت"), L("صنعتی دیواری"), L("سوئیچ‌های صنعتی TSN", "New"), L("سوئیچ‌های صنعتی PoE+", "Hot")] },
    { id: "enterprise", name: "سوئیچ‌های سازمانی", img: "/images/20250116162126hja9wv.png", href: "/c/switches/enterprise", links: [L("سوئیچ سازمانی 1/2.5G", "Hot"), L("سوئیچ سازمانی 10G"), L("سوئیچ سازمانی 25G"), L("سوئیچ سازمانی 40G"), L("سوئیچ سازمانی 100G")] },
    { id: "data-center", name: "سوئیچ‌های دیتاسنتر", img: "/images/202501161625092pt2sj.png", href: "/c/switches/data-center", links: [L("سوئیچ دیتاسنتر 10/25G"), L("سوئیچ دیتاسنتر 100G", "Hot"), L("سوئیچ ماژولار دیتاسنتر"), L("Network Packet Broker"), L("سوئیچ‌های NVIDIA®", "New")] },
    { id: "poe", name: "سوئیچ‌های PoE+", img: "/images/20230512103812_200.png", href: "/c/switches/poe", links: [L("سوئیچ PoE+ یک گیگابیت", "Hot"), L("سوئیچ PoE+ با سرعت 2.5/5G"), L("سوئیچ PoE++ ده گیگابیت"), L("لوازم جانبی سوئیچ")] },
    { id: "sme", name: "سوئیچ‌های SME", img: "/images/20260223142838c3xw17.png", href: "/c/switches/sme", links: [L("سوئیچ SME جمع‌وجور"), L("سوئیچ SME استاندارد", "Hot"), L("سوئیچ SME حرفه‌ای"), L("سوئیچ SME حرفه‌ای مکس"), L("سوئیچ SME تجمیعی")] },
  ],
  networking: [
    { id: "wireless", name: "بی‌سیم", img: "/images/20251014172228tp621m.png", href: "/c/networking/wireless", links: [L("اکسس‌پوینت Wi-Fi 7", "New"), L("اکسس‌پوینت Wi-Fi 6", "Hot"), L("اکسس‌پوینت Wi-Fi 5"), L("کنترلر بی‌سیم"), L("روتر Wi-Fi")] },
    { id: "cameras", name: "دوربین و نظارت", img: "/images/20250712105444jwgqkj.png", href: "/c/networking/cameras", links: [L("دوربین IP", "Hot"), L("دوربین PoE"), L("دوربین فضای باز"), L("NVR / VMS")] },
    { id: "conferencing", name: "کنفرانس و تلفن", img: "/images/20250116162126hja9wv.png", href: "/c/networking/conferencing", links: [L("تلفن IP"), L("تلفن کنفرانس"), L("پایانه ویدئو")] },
    { id: "media", name: "مدیا کانورتر", img: "/images/20220409112509_426.png", href: "/c/networking/media", links: [L("فیبر به اترنت", "Hot"), L("مدیا کانورتر PoE"), L("کانورتر صنعتی")] },
    { id: "adapters", name: "آداپتور شبکه", img: "/images/20230321165822_776.png", href: "/c/networking/adapters", links: [L("کارت شبکه PCIe"), L("کارت 10G/25G", "Hot"), L("کارت 100G", "New"), L("SmartNIC")] },
    { id: "servers", name: "سرور و KVM", img: "/images/202501161625092pt2sj.png", href: "/c/networking/servers", links: [L("سرور 1U/2U"), L("سوئیچ KVM"), L("لوازم جانبی سرور")] },
    { id: "router", name: "روتر، امنیت، NPB", img: "/images/20250116162705er3rbv.png", href: "/c/networking/router", links: [L("روتر سازمانی"), L("فایروال"), L("Network Packet Broker", "New")] },
    { id: "power", name: "برق", img: "/images/20220524152815_811.jpg", href: "/c/networking/power", links: [L("PDU", "Hot"), L("UPS"), L("کابل برق")] },
  ],
  transceivers: [
    { id: "infiniband", name: "ماژول‌های InfiniBand هوش مصنوعی", img: "/images/2026052514533153hnfm.png", href: "/c/transceivers/infiniband", links: [L("InfiniBand 1.6T/800G XDR", "New"), L("InfiniBand 800G/400G NDR", "Hot"), L("InfiniBand 400G/200G HDR"), L("InfiniBand 100G EDR"), L("سفارشی‌سازی ماژول و کابل")] },
    { id: "ai-ethernet", name: "ماژول‌های اترنت هوش مصنوعی", img: "/images/20220409111938_554.png", href: "/c/transceivers/ai-ethernet", links: [L("1.6T OSFP224", "New"), L("800G/400G OSFP/QSFP112", "Hot"), L("400G/200G QSFP-DD/QSFP56", "Hot"), L("100G QSFP28", "Hot"), L("سفارشی‌سازی ماژول و کابل")] },
    { id: "800g", name: "ماژول‌های 800/400/200/100G", img: "/images/20220409111613_260.png", href: "/c/transceivers/800g", links: [L("800G OSFP/QSFP-DD", "Hot"), L("400G OSFP/QSFP112/QSFP-DD", "Hot"), L("200G QSFP-DD/QSFP56", "Hot"), L("100G QSFP28", "Hot"), L("40G QSFP+"), L("ماژول سفارشی")] },
    { id: "10g", name: "ماژول‌های 50/25/10/1G", img: "/images/20220409112509_426.png", href: "/c/transceivers/10g", links: [L("50G QSFP28/SFP56"), L("25G SFP28"), L("10G SFP+", "Hot"), L("2.5G SFP"), L("1G SFP", "Hot"), L("100M SFP"), L("ماژول سفارشی")] },
    { id: "transmission", name: "انتقال نوری", img: "/images/20230130182452_449.png", href: "/c/transceivers/transmission", links: [L("کوهِرنت 800G/400G OSFP/…", "New"), L("کوهِرنت 800G/400G/200G CFP2"), L("100G DWDM QSFP28"), L("100G CFP/CFP2/CFP4"), L("25G CWDM/DWDM SFP28"), L("10G CWDM/DWDM SFP+", "Hot"), L("1G CWDM/DWDM SFP"), L("ماژول سفارشی")] },
    { id: "mobile", name: "شبکه موبایل و دسترسی", img: "/images/2025102915514707tvtk.jpg", href: "/c/transceivers/mobile", links: [L("ماژول صنعتی", "Hot"), L("استیک GPON و XGSPON", "Hot"), L("GPON، XG(S)PON، Combo"), L("EPON، 10G EPON"), L("50G SFP56 برای 5G"), L("25G SFP28 برای 5G"), L("10G SFP+ برای 4G"), L("ماژول سفارشی")] },
    { id: "dac", name: "کابل‌های DAC/AOC/ACC/AEC", img: "/images/20230321165822_776.png", href: "/c/transceivers/dac", links: [L("DAC/AOC/AEC با سرعت 1.6T/800G", "New"), L("DAC/AOC/AEC چهارصد گیگابیت", "New"), L("DAC/AOC دویست گیگابیت"), L("DAC/AOC صد گیگابیت", "Hot"), L("DAC/AOC با سرعت 56G/50G"), L("DAC/AOC چهل گیگابیت"), L("DAC/AOC با سرعت 25G/10G/1G", "Hot"), L("سفارشی DAC/AOC/ACC/AEC")] },
    { id: "others", name: "سایر", img: "/images/2026070311032715a10j.jpg", href: "/c/transceivers/others", links: [L("FS BOX", "Hot"), L("ماژول SDI", "Hot"), L("ماژول Fibre Channel"), L("ماژول کانورتر"), L("ماژول لوپ‌بک"), L("ماژول SONET/SDH"), L("ماژول XFP/X2"), L("لوازم جانبی")] },
  ],
  cables: [
    { id: "mtp", name: "کابل فیبر MTP®/MPO", img: "/images/12285.main.jpg", href: "/c/cables/mtp", links: [L("کابل ترانک MTP®", "Hot"), L("کابل بریک‌اوت MTP®"), L("MTP® شانزده/سی‌ودو تار", "New"), L("قطبیت نوع A/B/C"), L("کابل سفارشی MTP®")] },
    { id: "patch", name: "پچ‌کورد فیبر نوری", img: "/images/12285.main.jpg", href: "/c/cables/patch", links: [L("سیمپلکس/دوبلکس OS2", "Hot"), L("دوبلکس OM4/OM5", "Hot"), L("دوبلکس OM3"), L("یونی‌بوت LC"), L("طول سفارشی")] },
    { id: "mmc", name: "اتصال فیبر MMC", img: "/images/35488.main.jpg", href: "/c/cables/mmc", links: [L("جامپر MMC", "New"), L("فرم‌فاکتور بسیار کوچک"), L("MMC چگالی بالا")] },
    { id: "specialty", name: "کابل فیبر تخصصی", img: "/images/12285.main.jpg", href: "/c/cables/specialty", links: [L("کابل زره‌دار", "Hot"), L("فضای باز / صنعتی"), L("مقاوم در برابر خمش"), L("هیبرید برق+فیبر")] },
    { id: "pigtails", name: "پیگتیل فیبر", img: "/images/12285.main.jpg", href: "/c/cables/pigtails", links: [L("پیگتیل LC/SC/FC/ST", "Hot"), L("پیگتیل ریبون"), L("۱۲ تار رنگ‌بندی‌شده")] },
    { id: "connectivity", name: "اتصالات فیبر نوری", img: "/images/20260625112920j0ryma.jpg", href: "/c/cables/connectivity", links: [L("آداپتور", "Hot"), L("کانکتور"), L("اتنیویتور"), L("کوپلر")] },
    { id: "cleaners", name: "تمیزکننده و ابزار", img: "/images/39721.1619489384125.jpg", href: "/c/cables/cleaners", links: [L("قلم یک‌فشاره", "Hot"), L("کاست تمیزکننده"), L("دستمال و استیک")] },
    { id: "splitters", name: "اسپلیتر و کلوزر", img: "/images/20260604162517vxm3jd.jpg", href: "/c/cables/splitters", links: [L("اسپلیتر PLC", "Hot"), L("اسپلیتر FBT"), L("کلوزر فیبر")] },
  ],
  panels: [
    { id: "fiber-panels", name: "پنل فیبر نوری", img: "/images/35488.main.jpg", href: "/c/panels/fiber-panels", links: [L("پنل آداپتور FHD®", "Hot"), L("پنل LGX"), L("پنل 1U/2U/4U")] },
    { id: "cassettes", name: "کاست فیبر", img: "/images/20260624115840f1ugfm.jpg", href: "/c/panels/cassettes", links: [L("کاست FHD®", "Hot"), L("کاست MTP-LC", "New"), L("کاست اسپلایس")] },
    { id: "enclosures", name: "محفظه فیبر", img: "/images/20251031104722830g5b.webp", href: "/c/panels/enclosures", links: [L("محفظه FHD®", "Hot"), L("محفظه دیواری"), L("محفظه رک‌مونت")] },
    { id: "cable-mgmt", name: "مدیریت کابل", img: "/images/202608251816347hysti.webp", href: "/c/panels/cable-mgmt", links: [L("مدیر افقی"), L("مدیر عمودی"), L("D-Ring")] },
    { id: "power", name: "برق", img: "/images/20220524152815_811.jpg", href: "/c/panels/power", links: [L("PDU", "Hot"), L("کابل برق"), L("ATS")] },
    { id: "racks", name: "رک و کابینت", img: "/images/202501161625092pt2sj.png", href: "/c/panels/racks", links: [L("کابینت 42U"), L("فریم باز"), L("کابینت دیواری")] },
    { id: "labels", name: "برچسب و چاپگر", img: "/images/202606282138103xhx5c.jpg", href: "/c/panels/labels", links: [L("برچسب کابل"), L("چاپگر برچسب")] },
  ],
  optical: [
    { id: "dci", name: "شبکه نوری DCI", img: "/images/20250421112225_320.jpg.webp", href: "/c/optical/dci", links: [L("سری D7000", "New"), L("DCI چهارصد گیگابیت", "Hot"), L("انتقال کوهِرنت")] },
    { id: "line", name: "سیستم خط نوری", img: "/images/20260618153751r4eszs.jpg", href: "/c/optical/line", links: [L("سری M6200", "Hot"), L("سری FMT"), L("EDFA"), L("DCM")] },
    { id: "enterprise-otn", name: "سیستم یکپارچه سازمانی", img: "/images/20251113174249s74e2v.jpg", href: "/c/optical/enterprise-otn", links: [L("OTN همه‌دریک", "New"), L("WDM پردیس")] },
    { id: "mux", name: "مالتی‌پلکسر و OADM", img: "/images/20260618153751r4eszs.jpg", href: "/c/optical/mux", links: [L("Mux/Demux CWDM", "Hot"), L("Mux/Demux DWDM"), L("OADM")] },
    { id: "pon", name: "شبکه PON", img: "/images/20260604162517vxm3jd.jpg", href: "/c/optical/pon", links: [L("OLT"), L("ONT"), L("اسپلیتر PON", "Hot")] },
    { id: "odn", name: "شبکه توزیع نوری", img: "/images/35488.main.jpg", href: "/c/optical/odn", links: [L("ODF"), L("ODB"), L("FDB")] },
    { id: "transmission", name: "انتقال نوری", img: "/images/20230130182452_449.png", href: "/c/optical/transmission", links: [L("ترانسپاندر"), L("ماکسپاندر", "New")] },
  ],
  copper: [
    { id: "patch", name: "پچ‌کورد مسی", img: "/images/71879.main.jpg", href: "/c/copper/patch", links: [L("پچ‌کورد Cat6", "Hot"), L("پچ‌کورد Cat6a", "Hot"), L("پچ‌کورد Cat8", "New"), L("اسلیم / اسنگلِس")] },
    { id: "trunks", name: "ترانک مسی پیش‌ساخته", img: "/images/71879.main.jpg", href: "/c/copper/trunks", links: [L("ترانک ۶/۱۲/۲۴ پورت"), L("ترانک شیلددار")] },
    { id: "bulk", name: "کابل فله مسی", img: "/images/71879.main.jpg", href: "/c/copper/bulk", links: [L("Cat6 UTP", "Hot"), L("Cat6a STP"), L("Plenum / Riser")] },
    { id: "panels", name: "پچ‌پنل مسی", img: "/images/202606282138103xhx5c.jpg", href: "/c/copper/panels", links: [L("پنل ۲۴/۴۸ پورت", "Hot"), L("پنل Cat6a"), L("پنل شیلددار")] },
    { id: "cable-mgmt", name: "مدیریت کابل", img: "/images/202608251816347hysti.webp", href: "/c/copper/cable-mgmt", links: [L("مدیر کابل"), L("چسبک Velcro"), L("حلقه")] },
    { id: "faceplates", name: "صفحه و جعبه", img: "/images/202606282138103xhx5c.jpg", href: "/c/copper/faceplates", links: [L("صفحه دیواری"), L("جعبه روکار")] },
    { id: "jacks", name: "کانکتور و جک", img: "/images/71879.main.jpg", href: "/c/copper/jacks", links: [L("جک کیستون", "Hot"), L("پلاگ RJ45")] },
    { id: "testers", name: "تستر و ابزار مسی", img: "/images/20220607112907_607.png", href: "/c/copper/testers", links: [L("سرتیفایِر"), L("ابزار پانچ‌داون")] },
  ],
  tools: [
    { id: "fiber-testers", name: "تستر فیبر نوری", img: "/images/20220409095221_859.png", href: "/c/tools/fiber-testers", links: [L("OTDR", "Hot"), L("بازرسی فیبر"), L("پاورمتر"), L("عیب‌یاب"), L("منبع نور")] },
    { id: "fiber-tools", name: "ابزار فیبر نوری", img: "/images/20220409100241_777.png", href: "/c/tools/fiber-tools", links: [L("کیت ابزار فیبر"), L("کلیور فیبر", "Hot"), L("پولیش فیبر"), L("استریپر فیبر"), L("اسپلایسر فیبر")] },
    { id: "fiber-cleaners", name: "تمیزکننده فیبر نوری", img: "/images/20220409094902_665.png", href: "/c/tools/fiber-cleaners", links: [L("قلم تمیزکننده", "Hot"), L("استیک و دستمال"), L("تمیزکننده ریلی")] },
    { id: "copper-tools", name: "ابزار مسی", img: "/images/20220607112827_839.png", href: "/c/tools/copper-tools", links: [L("ابزار پانچ‌داون"), L("استریپر کابل"), L("ابزار شبکه")] },
    { id: "copper-testers", name: "تستر مسی", img: "/images/20220607112907_607.png", href: "/c/tools/copper-testers", links: [L("سرتیفایِر کابل", "Hot"), L("تون و پروب"), L("تستر PoE")] },
  ],
};

export const NAV_LABELS = {
  solutions: "راه‌حل‌ها",
  services: "خدمات",
  resources: "منابع",
};

export const NAV_MENUS = {
  solutions: [
    { label: "کابل‌کشی کلاستر هوش مصنوعی", href: "/solutions/ai" },
    { label: "اتوماسیون EVPN-VXLAN دیتاسنتر", href: "/solutions/evpn" },
    { label: "شبکه بدون اتلاف 800G RoCE", href: "/solutions" },
    { label: "پردیس سازمانی / Wi-Fi 7", href: "/solutions" },
    { label: "DCI / OTN چهارصد گیگابیت", href: "/c/optical" },
    { label: "کابل‌کشی ماژولار FHD®", href: "/c/panels" },
  ],
  services: [
    { label: "مشاوره راه‌حل", href: "/services" },
    { label: "ارسال و تحویل", href: "/services/shipping" },
    { label: "تست سازگاری", href: "/support" },
    { label: "اپتیک سفارشی / کدنویسی", href: "/contact" },
    { label: "درخواست قابلیت PicOS®", href: "/software" },
    { label: "انبار جهانی", href: "/services/shipping" },
  ],
  resources: [
    { label: "مرکز راهنما", href: "/support" },
    { label: "مرکز مستندات", href: "/docs" },
    { label: "بلاگ FS", href: "/blog" },
    { label: "صوت و تصویر", href: "/video" },
    { label: "مطالعات موردی", href: "/about" },
    { label: "گارانتی / RMA", href: "/support" },
  ],
};

export function allFamilies() {
  return Object.entries(MEGA).flatMap(([cat, fams]) => fams.map((f) => ({ ...f, cat })));
}
