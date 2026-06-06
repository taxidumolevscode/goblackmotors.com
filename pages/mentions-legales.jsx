import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";

export default function MentionsLegalesPage() {
  return (
    <>
      <SeoHead
        title="Mentions Légales"
        description="Mentions légales du site Go Black Motors."
      />
      <SiteLayout>
        <section className="px-4 md:px-10 pt-36 pb-24 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-6">
            Mentions Légales
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10">
            Informations Du Site
          </h1>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>Éditeur du site : Go Black Motors.</p>
            <p>Téléphone : +33 6 80 42 30 31.</p>
            <p>Email : contact@goblackmotors.com.</p>
            <p>Activité : vente de motos cross électriques, accessoires, équipements et pièces off-road.</p>
            <p>Les informations publiées ont pour objectif de présenter les produits et faciliter les demandes de prix.</p>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
