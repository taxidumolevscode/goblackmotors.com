import Link from "next/link";
import FadeIn from "../animations/FadeIn";
import { productCatalog } from "../siteData";

export default function ProductCatalogSection({
  eyebrow = "( 02 ) GAMME",
  title = "Découvrez la gamme E-Bike Électrique",
  compact = false,
}) {
  return (
    <section className="product-catalog bg-white text-black px-4 md:px-10 py-16 md:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 md:mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="block text-xs font-bold uppercase tracking-[0.32em] text-gray-400 mb-4">
              {eyebrow}
            </span>
            <h2 className="max-w-4xl text-[2.35rem] leading-[0.92] md:text-6xl xl:text-8xl font-black uppercase tracking-[-0.06em]">
              {title}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {["E-Bike", "Pack", "Énergie", "Pièces"].map((item) => (
              <span
                key={item}
                className="border border-black/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between border-y border-black/10 py-4">
          <Link
            href="/"
            className="text-xs font-black uppercase tracking-[0.24em] text-black/60 hover:text-black"
          >
            Retour accueil
          </Link>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-black/45">
            {productCatalog.length} modèles & packs
          </p>
        </div>

        <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${compact ? "xl:grid-cols-3" : "lg:grid-cols-3 xl:grid-cols-4"}`}>
          {productCatalog.map((product, index) => (
            <FadeIn key={product.name} delay={index * 0.04}>
              <article className="product-card group flex min-h-full flex-col border border-black/10 bg-[#f6f6f2] transition duration-300 hover:-translate-y-1 hover:border-black hover:bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="bg-black px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                      {product.category}
                    </span>
                    {product.featured && (
                      <span className="bg-[#ffb600] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black">
                        Sélection
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 text-[11px] font-black uppercase tracking-[0.24em] text-black/45">
                        {product.year}
                      </p>
                      <h3 className="text-2xl font-black uppercase leading-[0.96] tracking-[-0.045em]">
                        {product.name}
                      </h3>
                    </div>
                    <p className="shrink-0 text-right text-xs font-black uppercase tracking-[0.12em] text-black">
                      {product.price}
                    </p>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-black/62">
                    {product.tagline}
                  </p>

                  <div className="mt-auto">
                    <div className="mb-5 flex flex-wrap gap-2">
                      {product.specs.map((spec) => (
                        <span
                          key={spec}
                          className="border border-black/10 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-black/70"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="flex w-full items-center justify-center border border-black bg-black px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-white hover:bg-[#ffb600] hover:text-black"
                    >
                      Demander un prix
                    </Link>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
