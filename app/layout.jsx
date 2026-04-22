import Header from "@/components/Header";
import "./globals.css";

import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Logo />
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
