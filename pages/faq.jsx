import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { faqContent, faqMenuOptions, siteMeta } from "../components/siteData";

const questionAnchors = {
  "Qui sommes-nous ?": "qui-sommes-nous",
  "Nos marques": "nos-marques",
  "Devenir revendeur": "devenir-revendeur",
  "Espace revendeur": "espace-revendeur",
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SeoHead
        title="FAQ"
        description="Questions fréquentes sur l'achat d'un E-Bike Électrique et d'accessoires Go Black Motors."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteLayout>
        <PageHero
          eyebrow="FAQ"
          title="Les réponses utiles avant de réserver ou de lancer les démarches."
          intro="Une FAQ courte, directe et claire pour préparer votre achat de moto ou d'accessoires."
          image={siteMeta.mascotImage}
        />

        <section className="px-4 md:px-10 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <nav
                aria-label="Menu intérieur FAQ"
                className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
              >
                {faqMenuOptions.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </FadeIn>

            {faqContent.map((item, index) => (
              <FadeIn key={item.question} delay={index * 0.05}>
                <article
                  id={questionAnchors[item.question]}
                  className="scroll-mt-28 border-t border-white/10 py-8"
                >
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
                    {item.question}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                    {item.answer}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
