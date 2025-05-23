import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import styles from "@/scss/layout.module.scss";
import "@/scss/global.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EduLyon",
  description: "Site touristique educatif pour découvrir Lyon et ses secrets.",
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={notoSans.className}>
        <Navbar />
        <div className={styles.pageContainer}>
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
