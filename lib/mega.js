/** All Products mega-menu trees matching FS.com (New/Hot badges). */
export const L = (label, badge) => ({ label, badge });

export const MEGA = {
  switches: [
    { name: "سوئیچ‌های سازمانی PicOS®", img: "/images/20250116162633cququm.png", href: "/c/switches", links: [L("سوئیچ‌های PicOS® با سرعت 1/2.5G", "Hot"), L("سوئیچ‌های PicOS® با سرعت 10/25G"), L("سوئیچ‌های PicOS® با سرعت 40/100G", "New"), L("سوئیچ‌های PicOS® با سرعت 200/400G", "New"), L("پلتفرم AmpCon-Campus")] },
    { name: "سوئیچ‌های دیتاسنتر PicOS®", img: "/images/20250116162705er3rbv.png", href: "/c/switches", links: [L("سوئیچ‌های PicOS® با سرعت 10/25G"), L("سوئیچ‌های PicOS® با سرعت 100/200G", "Hot"), L("سوئیچ‌های PicOS® با سرعت 400/800G", "Hot"), L("سوئیچ‌های PicOS® برای HPC/AI", "New"), L("NPB مبتنی بر PicOS®")] },
    { name: "سوئیچ‌های PoE+ با PicOS®", img: "/images/20250712105444jwgqkj.png", href: "/c/switches", links: [L("سوئیچ‌های PicOS® PoE+ یک گیگابیت"), L("سوئیچ‌های PicOS® PoE+ با سرعت 2.5/5G", "Hot"), L("سوئیچ‌های PicOS® PoE+ ده گیگابیت", "New"), L("پلتفرم AmpCon-Campus"), L("لایسنس و خدمات PicOS®")] },
    { name: "سوئیچ‌های اترنت صنعتی", img: "/images/20230508182555_651.png", href: "/c/switches", links: [L("صنعتی ریل DIN"), L("صنعتی رک‌مونت"), L("صنعتی دیواری"), L("سوئیچ‌های صنعتی TSN", "New"), L("سوئیچ‌های صنعتی PoE+", "Hot")] },
    { name: "سوئیچ‌های سازمانی", img: "/images/20250116162126hja9wv.png", href: "/c/switches", links: [L("سوئیچ سازمانی 1/2.5G", "Hot"), L("سوئیچ سازمانی 10G"), L("سوئیچ سازمانی 25G"), L("سوئیچ سازمانی 40G"), L("سوئیچ سازمانی 100G")] },
    { name: "سوئیچ‌های دیتاسنتر", img: "/images/202501161625092pt2sj.png", href: "/c/switches", links: [L("سوئیچ دیتاسنتر 10/25G"), L("سوئیچ دیتاسنتر 100G", "Hot"), L("سوئیچ ماژولار دیتاسنتر"), L("Network Packet Broker"), L("سوئیچ‌های NVIDIA®", "New")] },
    { name: "سوئیچ‌های PoE+", img: "/images/20230512103812_200.png", href: "/c/switches", links: [L("سوئیچ PoE+ یک گیگابیت", "Hot"), L("سوئیچ PoE+ با سرعت 2.5/5G"), L("سوئیچ PoE++ ده گیگابیت"), L("لوازم جانبی سوئیچ")] },
    { name: "سوئیچ‌های SME", img: "/images/20260223142838c3xw17.png", href: "/c/switches", links: [L("سوئیچ SME جمع‌وجور"), L("سوئیچ SME استاندارد", "Hot"), L("سوئیچ SME حرفه‌ای"), L("سوئیچ SME حرفه‌ای مکس"), L("سوئیچ SME تجمیعی")] },
  ],
  networking: [
    { name: "بی‌سیم", img: "/images/20251014172228tp621m.png", href: "/c/networking", links: [L("اکسس‌پوینت Wi-Fi 7", "New"), L("اکسس‌پوینت Wi-Fi 6", "Hot"), L("اکسس‌پوینت Wi-Fi 5"), L("کنترلر بی‌سیم"), L("روتر Wi-Fi")] },
    { name: "دوربین و نظارت", img: "/images/20250712105444jwgqkj.png", href: "/c/networking", links: [L("دوربین IP", "Hot"), L("دوربین PoE"), L("دوربین فضای باز"), L("NVR / VMS")] },
    { name: "کنفرانس و تلفن", img: "/images/20250116162126hja9wv.png", href: "/c/networking", links: [L("تلفن IP"), L("تلفن کنفرانس"), L("پایانه ویدئو")] },
    { name: "مدیا کانورتر", img: "/images/20220409112509_426.png", href: "/c/networking", links: [L("فیبر به اترنت", "Hot"), L("مدیا کانورتر PoE"), L("کانورتر صنعتی")] },
    { name: "آداپتور شبکه", img: "/images/20230321165822_776.png", href: "/c/networking", links: [L("کارت شبکه PCIe"), L("کارت 10G/25G", "Hot"), L("کارت 100G", "New"), L("SmartNIC")] },
    { name: "سرور و KVM", img: "/images/202501161625092pt2sj.png", href: "/c/networking", links: [L("سرور 1U/2U"), L("سوئیچ KVM"), L("لوازم جانبی سرور")] },
    { name: "روتر، امنیت، NPB", img: "/images/20250116162705er3rbv.png", href: "/c/networking", links: [L("روتر سازمانی"), L("فایروال"), L("Network Packet Broker", "New")] },
    { name: "برق", img: "/images/20220524152815_811.jpg", href: "/c/networking", links: [L("PDU", "Hot"), L("UPS"), L("کابل برق")] },
  ],
  transceivers: [
    { name: "ماژول‌های InfiniBand هوش مصنوعی", img: "/images/2026052514533153hnfm.png", href: "/c/transceivers", links: [L("InfiniBand 1.6T/800G XDR", "New"), L("InfiniBand 800G/400G NDR", "Hot"), L("InfiniBand 400G/200G HDR"), L("InfiniBand 100G EDR"), L("سفارشی‌سازی ماژول و کابل")] },
    { name: "ماژول‌های اترنت هوش مصنوعی", img: "/images/20220409111938_554.png", href: "/c/transceivers", links: [L("1.6T OSFP224", "New"), L("800G/400G OSFP/QSFP112", "Hot"), L("400G/200G QSFP-DD/QSFP56", "Hot"), L("100G QSFP28", "Hot"), L("سفارشی‌سازی ماژول و کابل")] },
    { name: "ماژول‌های 800/400/200/100G", img: "/images/20220409111613_260.png", href: "/c/transceivers", links: [L("800G OSFP/QSFP-DD", "Hot"), L("400G OSFP/QSFP112/QSFP-DD", "Hot"), L("200G QSFP-DD/QSFP56", "Hot"), L("100G QSFP28", "Hot"), L("40G QSFP+"), L("ماژول سفارشی")] },
    { name: "ماژول‌های 50/25/10/1G", img: "/images/20220409112509_426.png", href: "/c/transceivers", links: [L("50G QSFP28/SFP56"), L("25G SFP28"), L("10G SFP+", "Hot"), L("2.5G SFP"), L("1G SFP", "Hot"), L("100M SFP"), L("ماژول سفارشی")] },
    { name: "انتقال نوری", img: "/images/20230130182452_449.png", href: "/c/transceivers", links: [L("کوهِرنت 800G/400G OSFP/…", "New"), L("کوهِرنت 800G/400G/200G CFP2"), L("100G DWDM QSFP28"), L("100G CFP/CFP2/CFP4"), L("25G CWDM/DWDM SFP28"), L("10G CWDM/DWDM SFP+", "Hot"), L("1G CWDM/DWDM SFP"), L("ماژول سفارشی")] },
    { name: "شبکه موبایل و دسترسی", img: "/images/2025102915514707tvtk.jpg", href: "/c/transceivers", links: [L("ماژول صنعتی", "Hot"), L("استیک GPON و XGSPON", "Hot"), L("GPON، XG(S)PON، Combo"), L("EPON، 10G EPON"), L("50G SFP56 برای 5G"), L("25G SFP28 برای 5G"), L("10G SFP+ برای 4G"), L("ماژول سفارشی")] },
    { name: "کابل‌های DAC/AOC/ACC/AEC", img: "/images/20230321165822_776.png", href: "/c/transceivers", links: [L("DAC/AOC/AEC با سرعت 1.6T/800G", "New"), L("DAC/AOC/AEC چهارصد گیگابیت", "New"), L("DAC/AOC دویست گیگابیت"), L("DAC/AOC صد گیگابیت", "Hot"), L("DAC/AOC با سرعت 56G/50G"), L("DAC/AOC چهل گیگابیت"), L("DAC/AOC با سرعت 25G/10G/1G", "Hot"), L("سفارشی DAC/AOC/ACC/AEC")] },
    { name: "سایر", img: "/images/2026070311032715a10j.jpg", href: "/c/transceivers", links: [L("FS BOX", "Hot"), L("ماژول SDI", "Hot"), L("ماژول Fibre Channel"), L("ماژول کانورتر"), L("ماژول لوپ‌بک"), L("ماژول SONET/SDH"), L("ماژول XFP/X2"), L("لوازم جانبی")] },
  ],
  cables: [
    { name: "کابل فیبر MTP®/MPO", img: "/images/12285.main.jpg", href: "/c/cables", links: [L("کابل ترانک MTP®", "Hot"), L("کابل بریک‌اوت MTP®"), L("MTP® شانزده/سی‌ودو تار", "New"), L("قطبیت نوع A/B/C"), L("کابل سفارشی MTP®")] },
    { name: "پچ‌کورد فیبر نوری", img: "/images/12285.main.jpg", href: "/c/cables", links: [L("سیمپلکس/دوبلکس OS2", "Hot"), L("دوبلکس OM4/OM5", "Hot"), L("دوبلکس OM3"), L("یونی‌بوت LC"), L("طول سفارشی")] },
    { name: "اتصال فیبر MMC", img: "/images/35488.main.jpg", href: "/c/cables", links: [L("جامپر MMC", "New"), L("فرم‌فاکتور بسیار کوچک"), L("MMC چگالی بالا")] },
    { name: "کابل فیبر تخصصی", img: "/images/12285.main.jpg", href: "/c/cables", links: [L("کابل زره‌دار", "Hot"), L("فضای باز / صنعتی"), L("مقاوم در برابر خمش"), L("هیبرید برق+فیبر")] },
    { name: "پیگتیل فیبر", img: "/images/12285.main.jpg", href: "/c/cables", links: [L("پیگتیل LC/SC/FC/ST", "Hot"), L("پیگتیل ریبون"), L("۱۲ تار رنگ‌بندی‌شده")] },
    { name: "اتصالات فیبر نوری", img: "/images/20260625112920j0ryma.jpg", href: "/c/cables", links: [L("آداپتور", "Hot"), L("کانکتور"), L("اتنیویتور"), L("کوپلر")] },
    { name: "تمیزکننده و ابزار", img: "/images/39721.1619489384125.jpg", href: "/c/cables", links: [L("قلم یک‌فشاره", "Hot"), L("کاست تمیزکننده"), L("دستمال و استیک")] },
    { name: "اسپلیتر و کلوزر", img: "/images/20260604162517vxm3jd.jpg", href: "/c/cables", links: [L("اسپلیتر PLC", "Hot"), L("اسپلیتر FBT"), L("کلوزر فیبر")] },
  ],
  panels: [
    { name: "پنل فیبر نوری", img: "/images/35488.main.jpg", href: "/c/panels", links: [L("پنل آداپتور FHD®", "Hot"), L("پنل LGX"), L("پنل 1U/2U/4U")] },
    { name: "کاست فیبر", img: "/images/20260624115840f1ugfm.jpg", href: "/c/panels", links: [L("کاست FHD®", "Hot"), L("کاست MTP-LC", "New"), L("کاست اسپلایس")] },
    { name: "محفظه فیبر", img: "/images/20251031104722830g5b.webp", href: "/c/panels", links: [L("محفظه FHD®", "Hot"), L("محفظه دیواری"), L("محفظه رک‌مونت")] },
    { name: "مدیریت کابل", img: "/images/202608251816347hysti.webp", href: "/c/panels", links: [L("مدیر افقی"), L("مدیر عمودی"), L("D-Ring")] },
    { name: "برق", img: "/images/20220524152815_811.jpg", href: "/c/panels", links: [L("PDU", "Hot"), L("کابل برق"), L("ATS")] },
    { name: "رک و کابینت", img: "/images/202501161625092pt2sj.png", href: "/c/panels", links: [L("کابینت 42U"), L("فریم باز"), L("کابینت دیواری")] },
    { name: "برچسب و چاپگر", img: "/images/202606282138103xhx5c.jpg", href: "/c/panels", links: [L("برچسب کابل"), L("چاپگر برچسب")] },
  ],
  optical: [
    { name: "شبکه نوری DCI", img: "/images/20250421112225_320.jpg.webp", href: "/c/optical", links: [L("سری D7000", "New"), L("DCI چهارصد گیگابیت", "Hot"), L("انتقال کوهِرنت")] },
    { name: "سیستم خط نوری", img: "/images/20260618153751r4eszs.jpg", href: "/c/optical", links: [L("سری M6200", "Hot"), L("سری FMT"), L("EDFA"), L("DCM")] },
    { name: "سیستم یکپارچه سازمانی", img: "/images/20251113174249s74e2v.jpg", href: "/c/optical", links: [L("OTN همه‌دریک", "New"), L("WDM پردیس")] },
    { name: "مالتی‌پلکسر و OADM", img: "/images/20260618153751r4eszs.jpg", href: "/c/optical", links: [L("Mux/Demux CWDM", "Hot"), L("Mux/Demux DWDM"), L("OADM")] },
    { name: "شبکه PON", img: "/images/20260604162517vxm3jd.jpg", href: "/c/optical", links: [L("OLT"), L("ONT"), L("اسپلیتر PON", "Hot")] },
    { name: "شبکه توزیع نوری", img: "/images/35488.main.jpg", href: "/c/optical", links: [L("ODF"), L("ODB"), L("FDB")] },
    { name: "انتقال نوری", img: "/images/20230130182452_449.png", href: "/c/optical", links: [L("ترانسپاندر"), L("ماکسپاندر", "New")] },
  ],
  copper: [
    { name: "پچ‌کورد مسی", img: "/images/71879.main.jpg", href: "/c/copper", links: [L("پچ‌کورد Cat6", "Hot"), L("پچ‌کورد Cat6a", "Hot"), L("پچ‌کورد Cat8", "New"), L("اسلیم / اسنگلِس")] },
    { name: "ترانک مسی پیش‌ساخته", img: "/images/71879.main.jpg", href: "/c/copper", links: [L("ترانک ۶/۱۲/۲۴ پورت"), L("ترانک شیلددار")] },
    { name: "کابل فله مسی", img: "/images/71879.main.jpg", href: "/c/copper", links: [L("Cat6 UTP", "Hot"), L("Cat6a STP"), L("Plenum / Riser")] },
    { name: "پچ‌پنل مسی", img: "/images/202606282138103xhx5c.jpg", href: "/c/copper", links: [L("پنل ۲۴/۴۸ پورت", "Hot"), L("پنل Cat6a"), L("پنل شیلددار")] },
    { name: "مدیریت کابل", img: "/images/202608251816347hysti.webp", href: "/c/copper", links: [L("مدیر کابل"), L("چسبک Velcro"), L("حلقه")] },
    { name: "صفحه و جعبه", img: "/images/202606282138103xhx5c.jpg", href: "/c/copper", links: [L("صفحه دیواری"), L("جعبه روکار")] },
    { name: "کانکتور و جک", img: "/images/71879.main.jpg", href: "/c/copper", links: [L("جک کیستون", "Hot"), L("پلاگ RJ45")] },
    { name: "تستر و ابزار مسی", img: "/images/20220607112907_607.png", href: "/c/copper", links: [L("سرتیفایِر"), L("ابزار پانچ‌داون")] },
  ],
  tools: [
    { name: "تستر فیبر نوری", img: "/images/20220409095221_859.png", href: "/c/tools", links: [L("OTDR", "Hot"), L("بازرسی فیبر"), L("پاورمتر"), L("عیب‌یاب"), L("منبع نور")] },
    { name: "ابزار فیبر نوری", img: "/images/20220409100241_777.png", href: "/c/tools", links: [L("کیت ابزار فیبر"), L("کلیور فیبر", "Hot"), L("پولیش فیبر"), L("استریپر فیبر"), L("اسپلایسر فیبر")] },
    { name: "تمیزکننده فیبر نوری", img: "/images/20220409094902_665.png", href: "/c/tools", links: [L("قلم تمیزکننده", "Hot"), L("استیک و دستمال"), L("تمیزکننده ریلی")] },
    { name: "ابزار مسی", img: "/images/20220607112827_839.png", href: "/c/tools", links: [L("ابزار پانچ‌داون"), L("استریپر کابل"), L("ابزار شبکه")] },
    { name: "تستر مسی", img: "/images/20220607112907_607.png", href: "/c/tools", links: [L("سرتیفایِر کابل", "Hot"), L("تون و پروب"), L("تستر PoE")] },
  ],
};

export const NAV_LABELS = {
  solutions: "راه‌حل‌ها",
  services: "خدمات",
  resources: "منابع",
};

export const NAV_MENUS = {
  solutions: [
    { label: "دیتاسنتر / فابریک هوش مصنوعی", href: "/solutions" },
    { label: "شبکه بدون اتلاف 800G RoCE", href: "/solutions" },
    { label: "فابریک EVPN-VXLAN", href: "/solutions" },
    { label: "پردیس سازمانی / Wi-Fi 7", href: "/solutions" },
    { label: "DCI / OTN چهارصد گیگابیت", href: "/solutions" },
    { label: "کابل‌کشی ماژولار FHD®", href: "/solutions" },
  ],
  services: [
    { label: "مشاوره راه‌حل", href: "/contact" },
    { label: "طراحی شبکه", href: "/contact" },
    { label: "تست سازگاری", href: "/support" },
    { label: "اپتیک سفارشی / کدنویسی", href: "/contact" },
    { label: "درخواست قابلیت PicOS®", href: "/software" },
    { label: "انبار و ارسال جهانی", href: "/about" },
  ],
  resources: [
    { label: "مرکز راهنما", href: "/support" },
    { label: "مرکز دانلود", href: "/support" },
    { label: "مطالعات موردی", href: "/about" },
    { label: "مستندات PicOS® / AmpCon", href: "/software" },
    { label: "بلاگ و بینش‌ها", href: "/about" },
    { label: "گارانتی / RMA", href: "/support" },
  ],
};
