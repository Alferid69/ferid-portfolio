import { Crown, Dumbbell } from "lucide-react";

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Beyond the Code
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            When I&apos;m not building applications, here&apos;s how I spend
            my time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-8 rounded-3xl hover:border-teal-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
            <div className="bg-teal-500/10 w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Crown className="text-teal-400" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                Chess
              </h3>
              <p className="text-slate-400 leading-relaxed">
                A game of strategy and foresight. It keeps my mind sharp,
                helps me think multiple steps ahead, and translates
                perfectly to problem-solving in software architecture.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-8 rounded-3xl hover:border-teal-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
            <div className="bg-teal-500/10 w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Dumbbell className="text-teal-400" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                Gym
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Physical discipline fuels mental endurance. Regular workouts
                keep me energized, focused, and provide the perfect balance
                to long hours at the keyboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
