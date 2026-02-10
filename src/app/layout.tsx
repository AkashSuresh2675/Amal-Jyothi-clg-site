import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchDialog from "@/components/ui/SearchDialog";

export const metadata: Metadata = {
  title: {
    default: "AJCE - Amal Jyothi College of Engineering",
    template: "%s | AJCE",
  },
  description:
    "Amal Jyothi College of Engineering (AJCE) - A premier engineering institution in Kerala, India. NAAC A++ accredited. Offering B.Tech, M.Tech, and MCA programs.",
  keywords: [
    "AJCE",
    "Amal Jyothi College of Engineering",
    "engineering college Kerala",
    "B.Tech",
    "M.Tech",
    "MCA",
    "Kanjirapally",
    "KTU",
  ],
  openGraph: {
    title: "Amal Jyothi College of Engineering",
    description:
      "Where tradition meets innovation. Shaping the next generation of engineers since 2001.",
    url: "https://ajce.in",
    siteName: "AJCE",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Header />
          <SearchDialog />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
