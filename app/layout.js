import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { CartProvider } from "@/components/CartProvider";

export const metadata = {
  title: "دیتاکالا | زیرساخت هوش مصنوعی، دیتاسنتر، شبکه سازمانی و نرم‌افزار",
  description: "سوئیچ، ماژول نوری، کابل‌کشی و نرم‌افزار PicOS® برای شبکه‌های هوش مصنوعی، دیتاسنتر و سازمان.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }, { url: "/favicon.ico" }],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <ChatWidget />
        </CartProvider>
      </body>
    </html>
  );
}
