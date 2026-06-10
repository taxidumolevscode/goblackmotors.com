import Head from "next/head";
import { useRouter } from "next/router";
import { siteMeta } from "../siteData";

export default function SeoHead({ title, description, noindex = false, image }) {
  const router = useRouter();
  const fullTitle = title
    ? `${title} | ${siteMeta.brand}`
    : `E-Bike Électrique | ${siteMeta.brand}`;
  const canonicalPath = router.asPath === "/" ? "" : router.asPath.split("?")[0];
  const canonicalUrl = `${siteMeta.siteUrl}${canonicalPath}`;
  const metaImagePath = image || siteMeta.heroImage;
  const metaImage = metaImagePath.startsWith("http")
    ? metaImagePath
    : `${siteMeta.siteUrl}${metaImagePath}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteMeta.brand,
      url: siteMeta.siteUrl,
      email: siteMeta.email,
      telephone: siteMeta.phoneDisplay,
      logo: `${siteMeta.siteUrl}/talaria-black.svg`,
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: siteMeta.brand,
      url: siteMeta.siteUrl,
      email: siteMeta.email,
      telephone: siteMeta.phoneDisplay,
      image: metaImage,
      areaServed: ["Haute-Savoie", "Bonneville", "France"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bonneville",
        postalCode: "74130",
        addressRegion: "Haute-Savoie",
        addressCountry: "FR",
      },
      description,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteMeta.siteName,
      url: siteMeta.siteUrl,
      inLanguage: "fr-FR",
      description,
    },
  ];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={siteMeta.seoKeywords} />
      <meta name="author" content={siteMeta.brand} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="fr-FR" href={canonicalUrl} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1"} />
      <meta name="geo.region" content={siteMeta.geoRegion} />
      <meta name="geo.placename" content={siteMeta.geoPlacename} />
      <meta name="geo.position" content={siteMeta.geoPosition} />
      <meta name="ICBM" content={siteMeta.geoPosition.replace(";", ", ")} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteMeta.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
      {jsonLd.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
