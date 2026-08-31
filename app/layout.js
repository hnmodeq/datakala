import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { CartProvider } from "@/components/CartProvider";

export const metadata = {
  title: "FS | AI Infrastructure, Data Center, Enterprise Networking and Software Solutions",
  description: "FS high-performance switches, optics, cabling and PicOS® software for AI, data center and enterprise networks.",
  icons: { icon: "/images/logo.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
