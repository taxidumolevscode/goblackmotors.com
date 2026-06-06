import SeoHead from '../components/layout/SeoHead';
import SiteLayout from '../components/layout/SiteLayout';
import HeroSection from '../components/sections/HeroSection';
import IntroSection from '../components/sections/IntroSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ApproachSection from '../components/sections/ApproachSection';
import PricingSection from '../components/sections/PricingSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import ContactSection from '../components/sections/ContactSection';
import OfficialSection from '../components/sections/OfficialSection';
import DeepLinksSection from '../components/sections/DeepLinksSection';
import { faqContent, siteMeta } from '../components/siteData';

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent.slice(0, 5).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: siteMeta.brand,
    telephone: siteMeta.phoneDisplay,
    email: siteMeta.email,
    url: siteMeta.siteUrl,
    description: "Vente de motos cross électriques, accessoires, équipements et pièces off-road.",
    makesOffer: [
      "E-Bike Électrique",
      "Accessoires E-Bike",
      "Équipements pilote",
      "Pièces et entretien",
    ],
  };

  return (
    <>
      <SeoHead
        title="E-Bike Électrique"
        description="Go Black Motors vend des motos cross électriques, accessoires, équipements pilote et pièces off-road."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteLayout>
        <HeroSection />
        <IntroSection />
        <PortfolioSection />
        <ApproachSection />
        <PricingSection />
        <TestimonialSection />
        <OfficialSection />
        <DeepLinksSection />
        <ContactSection />
      </SiteLayout>
    </>
  );
}
