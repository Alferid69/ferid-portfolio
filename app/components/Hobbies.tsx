import { Crown, Dumbbell } from "lucide-react";

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 border-t border-[#232736] relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2 font-medium">
            OFF THE CLOCK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Beyond the Code
          </h2>
          <p className="text-slate-400 max-w-2xl mt-3 text-sm md:text-base leading-relaxed">
            What keeps me grounded and sharp when the laptop screen closes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="bg-[#0f1118] border border-[#232736] p-7 rounded-2xl hover:border-amber-500/30 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[#232736]">
              <Crown className="text-amber-400" size={20} />
              <h3 className="text-lg font-bold text-white tracking-tight">
                Chess
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              I play because every mistake is entirely your own. Calculating variations under time pressure and staying calm when the board gets chaotic is surprisingly similar to debugging tricky race conditions.
            </p>
          </div>

          <div className="bg-[#0f1118] border border-[#232736] p-7 rounded-2xl hover:border-amber-500/30 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[#232736]">
              <Dumbbell className="text-amber-400" size={20} />
              <h3 className="text-lg font-bold text-white tracking-tight">
                Gym & Training
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              When your entire workday happens inside abstract logic and text files, lifting heavy things is the most honest physical reset button there is. It clears the brain and keeps my stamina high for long coding stretches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
