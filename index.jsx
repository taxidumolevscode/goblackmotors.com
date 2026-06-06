import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Instagram, Camera, Mail, Heart } from 'lucide-react';

// --- Components ---

// Custom Hook for simple fade-up animation
const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AnimatedText = ({ text, className = "" }) => {
  // Splitting text for letter-by-letter animation effect
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} style={{ marginRight: letter === " " ? "0.2em" : "0" }}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function LukaszWedding() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5s loading simulation
    return () => clearTimeout(timer);
  }, []);

  // Handle Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="animate-pulse mb-4">
            <Camera size={48} strokeWidth={1} />
          </div>
          <motion.h1 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
            className="h-0.5 bg-white w-32 mx-auto mb-4"
          />
          <p className="font-light tracking-[0.3em] text-sm uppercase">Lukasz Milwosz</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-40 mix-blend-difference text-white">
        <div className="text-sm md:text-base font-bold tracking-widest uppercase">
          Lukasz Milwosz
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#contact" className="hidden md:block text-xs font-bold tracking-widest uppercase border-b border-transparent hover:border-white transition-all">
            Book a Date
          </a>
          <button onClick={() => setMenuOpen(true)} className="group flex flex-col items-end gap-1.5 cursor-pointer">
             <span className="block w-8 h-[2px] bg-white group-hover:w-6 transition-all duration-300"></span>
             <span className="block w-5 h-[2px] bg-white group-hover:w-8 transition-all duration-300"></span>
          </button>
        </div>
      </nav>

      {/* --- Full Screen Menu Overlay --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#111] z-50 flex flex-col justify-center items-center text-center"
          >
            <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 p-2">
              <X size={32} />
            </button>
            <ul className="space-y-6 md:space-y-10">
              {['Portfolio', 'Philosophy', 'Stories', 'Contact'].map((item) => (
                <li key={item} className="overflow-hidden">
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="block text-4xl md:text-7xl font-black uppercase tracking-tighter hover:text-gray-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <header className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Background Image Placeholder - Dark & Moody Wedding Shot */}
           <img 
            src="https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=2076&auto=format&fit=crop" 
            alt="Wedding Atmosphere" 
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="z-10 text-center flex flex-col items-center">
          <FadeIn delay={0.2}>
             <h2 className="text-xs md:text-sm tracking-[0.4em] uppercase mb-4">Fine Art Wedding Photography</h2>
          </FadeIn>
          
          <div className="relative">
            <AnimatedText 
              text="UNSCRIPTED" 
              className="text-[15vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter uppercase mix-blend-overlay"
            />
             <AnimatedText 
              text="LOVE STORIES" 
              className="text-[15vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter uppercase text-transparent stroke-white border-white"
            />
             {/* Stroke effect simulation via CSS class below */}
             <style>{`
               .text-transparent {
                 -webkit-text-stroke: 2px white;
                 color: transparent;
               }
               @media (max-width: 768px) {
                 .text-transparent {
                   -webkit-text-stroke: 1px white;
                 }
               }
             `}</style>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-10 right-10 flex items-center gap-4 z-10 hidden md:flex"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs uppercase tracking-widest writing-vertical-lr">Scroll Down</span>
        </motion.div>
      </header>

      {/* --- SECTION 01: INTRO --- */}
      <section id="philosophy" className="py-24 md:py-40 px-6 md:px-20 bg-black relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3 text-gray-500 font-mono text-sm">
            ( 01 )
          </div>
          <div className="md:col-span-9">
            <FadeIn>
              <h3 className="text-4xl md:text-7xl font-bold leading-tight uppercase tracking-tight mb-12">
                Not everyone wants <br/>
                <span className="text-gray-500">perfect poses.</span> <br/>
                You want real moments.
              </h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <p className="text-lg text-gray-300 leading-relaxed">
                  The wedding industry sells you a performance. I capture the silence between the vows, the nervous laughter, and the unscripted joy that happens when no one is directing you.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My approach is minimalist and observational. I step back so your memories can step forward. This is photography for couples who value authenticity over tradition.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- SECTION 02: SELECTED WORKS (Parallax/Grid) --- */}
      <section id="portfolio" className="py-20 bg-white text-black">
        <div className="px-6 md:px-20 mb-20 flex justify-between items-end">
           <div>
              <span className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">( 02 )</span>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Selected Works</h2>
           </div>
           <div className="hidden md:block">
             <p className="text-sm uppercase tracking-widest font-bold border-b border-black pb-1">View Full Archive</p>
           </div>
        </div>

        {/* Gallery Grid */}
        <div className="px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Image 1 */}
            <FadeIn className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1974&auto=format&fit=crop" 
                  alt="Wedding 1" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm font-bold uppercase tracking-widest">Anna & Tom</span>
                <span className="text-xs text-gray-500">Tuscany, Italy</span>
              </div>
            </FadeIn>

            {/* Image 2 - Offset */}
            <FadeIn delay={0.1} className="group relative overflow-hidden cursor-pointer md:mt-20">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=2043&auto=format&fit=crop" 
                  alt="Wedding 2" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm font-bold uppercase tracking-widest">Elena & Marc</span>
                <span className="text-xs text-gray-500">Paris, France</span>
              </div>
            </FadeIn>

            {/* Image 3 */}
            <FadeIn delay={0.2} className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=1974&auto=format&fit=crop" 
                  alt="Wedding 3" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm font-bold uppercase tracking-widest">Sarah & James</span>
                <span className="text-xs text-gray-500">London, UK</span>
              </div>
            </FadeIn>
            
             {/* Image 4 */}
             <FadeIn className="group relative overflow-hidden cursor-pointer lg:hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop" 
                  alt="Wedding 4" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm font-bold uppercase tracking-widest">Clara & Ben</span>
                <span className="text-xs text-gray-500">Bali, Indonesia</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- SECTION 03: THE APPROACH (Black bg) --- */}
      <section className="py-32 px-6 md:px-20 bg-black text-white relative overflow-hidden">
         {/* Decorative big text background */}
         <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 text-[30vw] font-black text-[#111] pointer-events-none select-none leading-none">
            ART
         </div>

         <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
               <FadeIn>
                  <img 
                    src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1888&auto=format&fit=crop" 
                    alt="Photographer detail" 
                    className="w-full grayscale opacity-80"
                  />
               </FadeIn>
            </div>
            <div className="md:col-span-1"></div>
            <div className="md:col-span-6">
               <span className="block text-xs text-gray-500 font-mono mb-6">( 03 ) THE PROCESS</span>
               <FadeIn delay={0.2}>
                 <h3 className="text-3xl md:text-5xl font-bold uppercase leading-tight mb-8">
                   Documentary <br/> Meets Editorial
                 </h3>
                 <div className="space-y-8">
                    <div className="border-l border-gray-800 pl-6">
                       <h4 className="text-lg font-bold uppercase mb-2 text-white">The Candid Eye</h4>
                       <p className="text-gray-400 text-sm leading-relaxed">I don't interrupt moments. I anticipate them. The best photos happen in the split seconds between the posed shots.</p>
                    </div>
                    <div className="border-l border-gray-800 pl-6">
                       <h4 className="text-lg font-bold uppercase mb-2 text-white">Timeless Edit</h4>
                       <p className="text-gray-400 text-sm leading-relaxed">Black and white for emotion. True-to-life color for the details. No trendy filters that fade with time.</p>
                    </div>
                    <div className="border-l border-gray-800 pl-6">
                       <h4 className="text-lg font-bold uppercase mb-2 text-white">Luxury Experience</h4>
                       <p className="text-gray-400 text-sm leading-relaxed">From the first consultation to the final album delivery, every step is curated for ease and elegance.</p>
                    </div>
                 </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* --- SECTION 04: TESTIMONIALS --- */}
      <section className="py-24 bg-neutral-100 text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 block">Kind Words</span>
          
          <FadeIn>
            <p className="text-2xl md:text-4xl font-serif italic leading-relaxed mb-10">
              "Lukasz didn't just take photos; he captured the way it felt. Looking at our album is like reliving the best day of our lives, frame by emotional frame."
            </p>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-bold uppercase tracking-widest">Sophia & Alexander</span>
              <span className="text-xs text-gray-500">Married in Kyoto, 2023</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- SECTION 05: CTA / FOOTER --- */}
      <section id="contact" className="min-h-screen bg-black text-white flex flex-col justify-between pt-24 pb-10 px-6 md:px-20 relative">
        <div className="max-w-3xl relative z-10">
           <span className="block text-xs font-bold tracking-widest text-gray-500 mb-6">( 05 ) START THE CONVERSATION</span>
           <FadeIn>
             <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
               Your Story <br/> Starts Here.
             </h2>
             <p className="text-xl text-gray-400 max-w-md mb-10">
               I take on a limited number of weddings per year to ensure every couple gets my undivided attention.
             </p>
             <a href="mailto:lukasz@example.com" className="inline-block bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
               Inquire Availability
             </a>
           </FadeIn>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-gray-900 pt-10 relative z-10">
           <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Socials</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors">Vimeo</a></li>
              </ul>
           </div>
           <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>hello@lukaszmilwosz.com</li>
                <li>+1 (555) 000-1234</li>
              </ul>
           </div>
           <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Locations</h4>
              <ul className="space-y-2 text-sm">
                <li>London</li>
                <li>Paris</li>
                <li>Destination</li>
              </ul>
           </div>
           <div className="flex items-end justify-end">
             <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group flex items-center gap-2">
               <span className="text-xs uppercase font-bold">Back to Top</span>
               <div className="p-2 border border-white rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                 <div className="w-3 h-3 border-t-2 border-l-2 border-current transform rotate-45 translate-y-0.5"></div>
               </div>
             </button>
           </div>
        </div>

        {/* Giant Footer Logo */}
        <div className="mt-20 md:mt-0">
          <h1 className="text-[13vw] font-black uppercase leading-none tracking-tighter text-center opacity-20 select-none">
            Lukasz Milwosz
          </h1>
        </div>
      </section>
      
      {/* --- Custom Scroll Progress Bar --- */}
      <div 
        className="fixed top-0 right-0 w-1 bg-white z-50 mix-blend-difference"
        style={{ height: `${scrollProgress * 100}%`, transition: 'height 0.1s linear' }}
      />

    </div>
  );
}