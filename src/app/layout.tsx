import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://onlinembamanipal.radhyaeducationacademy.com"
  ),

  title: {
    default: "Manipal Online MBA 2026 – Fees, Eligibility & Admission",
    template: "%s | Manipal Online MBA",
  },

  description:
    "Explore Manipal Online MBA fees, eligibility, specializations, admission process and other key details. Get expert guidance for your Manipal Online MBA admission.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://onlinembamanipal.radhyaeducationacademy.com/",
    title: "Manipal Online MBA 2026 – Fees, Eligibility & Admission",
    description:
      "Explore Manipal Online MBA fees, eligibility, specializations, admission process and other key details.",
    siteName: "Online MBA Manipal",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manipal Online MBA 2026 – Fees, Eligibility & Admission",
    description:
      "Explore Manipal Online MBA fees, eligibility, specializations, admission process and other key details.",
  },

  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />

        {/* Inter Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/images/favicon.png" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NL2KX5GW');
          `}
        </Script>

        {/* Google Ads / Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18215221480"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-18215221480');
          `}
        </Script>

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Radhya Education Academy",
              url: "https://onlinembamanipal.radhyaeducationacademy.com/",
              logo: "https://onlinembamanipal.radhyaeducationacademy.com/images/favicon.png",
              sameAs: ["https://radhyaeducationacademy.com/"],
            }),
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Online MBA Manipal",
              url: "https://onlinembamanipal.radhyaeducationacademy.com/",
              publisher: {
                "@type": "Organization",
                name: "Radhya Education Academy",
              },
            }),
          }}
        />
      </head>

      <body
        className="font-sans text-gray-800 antialiased"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NL2KX5GW"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}