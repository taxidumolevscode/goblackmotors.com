export default function SplineScene({ className = "" }) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-[radial-gradient(circle_at_top,#1f4ed8_0%,#0f172a_42%,#020617_100%)] ${className}`}
    >
      <div className="absolute inset-0 opacity-80">
        <div className="absolute -top-12 left-8 h-36 w-36 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute top-1/3 right-8 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-12 left-1/4 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <div className="absolute inset-x-0 top-10 flex items-center justify-center">
        <div className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.34em] text-white/80 backdrop-blur-md">
          Accessoires Off-Road
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[58%]">
        <div className="absolute inset-x-[8%] bottom-[14%] h-[18%] rounded-[999px] bg-gradient-to-r from-amber-300/0 via-amber-300/80 to-amber-300/0 blur-xl" />
        <div className="absolute inset-x-[14%] bottom-[18%] h-[26%] rounded-[2.5rem] border border-white/10 bg-white/[0.05] shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm" />

        <div className="absolute left-[18%] right-[18%] bottom-[22%] h-[20%] rounded-[2.5rem] bg-gradient-to-r from-black via-neutral-900 to-black shadow-[0_16px_60px_rgba(0,0,0,0.55)]">
          <div className="absolute inset-x-[8%] top-[18%] h-[28%] rounded-full bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 opacity-90" />
          <div className="absolute inset-x-[14%] top-[26%] h-[22%] rounded-full bg-white/10" />
          <div className="absolute left-[10%] bottom-[-8%] h-[28%] w-[16%] rounded-full border-[10px] border-neutral-900 bg-black shadow-[inset_0_0_0_4px_rgba(251,191,36,0.85)]" />
          <div className="absolute right-[10%] bottom-[-8%] h-[28%] w-[16%] rounded-full border-[10px] border-neutral-900 bg-black shadow-[inset_0_0_0_4px_rgba(251,191,36,0.85)]" />
          <div className="absolute left-[16%] right-[16%] top-[-8%] h-[12%] rounded-full bg-gradient-to-r from-amber-300/10 via-amber-300 to-amber-300/10" />
        </div>
      </div>

      <div className="absolute left-6 top-1/3 rounded-[1.5rem] border border-white/10 bg-white/10 px-4 py-3 text-white/85 backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">
          Zone
        </p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em]">
          Go Black Motors
        </p>
      </div>

      <div className="absolute right-6 top-[44%] rounded-[1.5rem] border border-white/10 bg-white/10 px-4 py-3 text-white/85 backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">
          Destination
        </p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em]">
          Genève
        </p>
      </div>
    </div>
  );
}
