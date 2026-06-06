import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { siteMeta } from "../components/siteData";

export default function ZonesDesserviesPage() {
  return (
    <>
      <SeoHead
        title="Zones Desservies"
        description="Accessoires Go Black Motors: équipements pilote, batteries, chargeurs, pneus, pièces et consommables off-road."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Accessoires"
          title="Équipements pilote, batteries, chargeurs et pièces off-road."
          intro="Go Black Motors vous aide à composer un pack cohérent autour de votre E-Bike Électrique."
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["Casques", "Protection indispensable pour commencer avec un équipement sérieux."],
              ["Gants", "Grip, confort et protection pour les sessions off-road."],
              ["Protections", "Gilet, genouillères, coudières et lunettes selon le niveau du pilote."],
              ["Batteries", "Autonomie supplémentaire ou remplacement selon compatibilité modèle."],
              ["Chargeurs", "Charge adaptée à la batterie et au rythme d'utilisation."],
              ["Pièces", "Pneus, plaquettes, chaînes, leviers, poignées et consommables."],
            ].map(([title, text], index) => (
              <FadeIn key={title} delay={index * 0.06}>
                <article className="rounded-[2rem] bg-neutral-100 p-8 min-h-[15rem]">
                  <h2 className="text-3xl font-black uppercase tracking-tight mb-4">{title}</h2>
                  <p className="text-neutral-700 leading-relaxed">{text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
