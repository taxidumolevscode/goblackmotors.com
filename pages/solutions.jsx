import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import ProductCatalogSection from "../components/sections/ProductCatalogSection";
import { siteMeta, solutionsPageContent } from "../components/siteData";

export default function SolutionsPage() {
  return (
    <>
      <SeoHead
        title="Solutions"
        description="La gamme Go Black Motors: motos cross électriques, accessoires, packs rider, batteries, chargeurs et pièces."
      />
      <SiteLayout>
        <PageHero
          eyebrow={solutionsPageContent.eyebrow}
          title={solutionsPageContent.title}
          intro={solutionsPageContent.intro}
          image={siteMeta.heroImage}
        />

        <ProductCatalogSection
          eyebrow="Retour aux gammes"
          title="Découvrez la gamme E-Bike Électrique"
        />

        <section className="bg-white text-black px-4 md:px-10 pb-20 md:pb-28">
          <FadeIn delay={0.18}>
            <div className="rounded-[2rem] bg-black text-white p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-5">
                Lecture Simple
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-3">
                    Moto
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Une machine électrique nerveuse, silencieuse et adaptée aux loisirs off-road.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-3">
                    Accessoires
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Protections, casque, gants, batteries, chargeurs et pièces pour rouler équipé.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-3">
                    Go Black Motors
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Une expérience claire pour choisir le bon modèle et le bon pack sans perte de temps.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </SiteLayout>
    </>
  );
}
