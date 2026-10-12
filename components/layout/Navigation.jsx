import Link from "next/link";
import { siteMeta } from "../siteData";

export default function Navigation({ onMenuOpen }) {
  return (
    <nav className="site-nav fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-40 mix-blend-difference text-white">
      <Link
        href="/"
        className="max-w-[13.5rem] text-[0.68rem] font-bold uppercase leading-tight tracking-[0.08em] sm:max-w-none sm:text-xs md:text-sm lg:text-base md:tracking-[0.14em]"
      >
        {siteMeta.brand}
      </Link>
      
      <div className="flex items-center gap-8">
        <a 
          href={siteMeta.phoneHref}
          className="hidden md:block text-xs font-bold tracking-widest uppercase border-b border-transparent hover:border-white transition-all"
        >
          Appeler Maintenant
        </a>
        <button 
          onClick={onMenuOpen} 
          className="group flex flex-col items-end gap-1.5 cursor-pointer"
        >
          <span className="block w-8 h-[2px] bg-white group-hover:w-6 transition-all duration-300"></span>
          <span className="block w-5 h-[2px] bg-white group-hover:w-8 transition-all duration-300"></span>
        </button>
      </div>

      <style jsx>{`
        .site-nav {
          backdrop-filter: saturate(120%);
        }

        @media (max-width: 768px) {
          .site-nav {
            padding-top: 1.25rem;
            padding-bottom: 1.25rem;
          }
        }
      `}</style>
    </nav>
  );
}
