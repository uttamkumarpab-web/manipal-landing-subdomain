import HomeClient from "@/components/HomeClient";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://onlinembamanipal.radhyaeducationacademy.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Manipal Online MBA",
      item: "https://onlinembamanipal.radhyaeducationacademy.com/",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HomeClient />
    </>
  );
}