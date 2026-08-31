import "./globals.css";
import "./dk-theme.css";
import "./cp.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { CartProvider } from "@/components/CartProvider";
import { ControlProvider } from "@/components/ControlProvider";
import AdminPanelGate from "@/components/AdminPanelGate";
import LoadingScreen from "@/components/LoadingScreen";
import config from "@/lib/site-config.json";

const DEFAULT_ICONS = {
  icon: [
    { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    { url: "/icon.png", type: "image/png", sizes: "512x512" },
    { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
  ],
  apple: "/apple-icon.png",
};

export async function generateMetadata() {
  const siteName = config.siteName || "دیتاکالا";
  let icons = DEFAULT_ICONS;
  if (config.favicon && config.favicon.file) {
    const ext = (config.favicon.ext || "png").toLowerCase();
    const type = ext === "ico" ? "image/x-icon" : ext === "svg" ? "image/svg+xml" : `image/${ext}`;
    icons = { icon: [{ url: config.favicon.file, type }], apple: config.favicon.file };
  }
  return {
    title: siteName,
    description: "سوئیچ، ماژول نوری، کابل‌کشی و نرم‌افزار PicOS® برای شبکه‌های هوش مصنوعی، دیتاسنتر و سازمان.",
    icons,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <CartProvider>
          <ControlProvider>
            <LoadingScreen />
            <Header />
            {children}
            <Footer />
            <ChatWidget />
            <AdminPanelGate />
          </ControlProvider>
        </CartProvider>
      </body>
    </html>
  );
}
