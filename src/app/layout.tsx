import type { Metadata } from "next";
import { headers } from "next/headers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MotionProvider } from "@/components/motion/motion-provider";
import { companyInfo } from "@/lib/company-info";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const title = `${companyInfo.companyName} | Diversified Business Group in the UAE`;
  const description =
    `${companyInfo.companyName} is a diversified family business group in Abu Dhabi creating sustainable growth across real estate, contracting, hospitality, healthcare, automotive services, and recruitment.`;

  return {
    metadataBase,
    title: {
      default: title,
      template: `%s | ${companyInfo.companyName}`,
    },
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: "/",
      images: [{ url: "/og.png", width: 1731, height: 909, alt: `${companyInfo.companyName} — Shaping Sustainable Progress Across Sectors` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <MotionProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
