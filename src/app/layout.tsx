import {
  PricingSection,
  MaterialSection,
  FenceInfoSection,
  FenceRisksSection,
  HowItWorksSection,
  RequirementsSection,
  FaqSection,
} from "@/components/sections";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import type { Metadata } from "next";

import classNames from "classnames";
import Script from "next/script";

import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

interface Props {
  children: React.ReactNode;
}

const TAG_MANAGER_ID = process.env.TAG_MANAGER_ID;

const RootLayout: React.FC<Props> = () => (
  <html lang="en">
    <head>
      <Script
        strategy="afterInteractive"
        src={"https://www.googletagmanager.com/gtag/js?id=" + TAG_MANAGER_ID}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${TAG_MANAGER_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
    </head>
    <body
      className={classNames(
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        "antialiased"
      )}
    >
      <Header />
      <Banner />
      <MaterialSection />
      <HowItWorksSection />
      <RequirementsSection />
      <FenceInfoSection />
      <PricingSection />
      <FenceRisksSection />
      <FaqSection />
    </body>
  </html>
);

export default RootLayout;
