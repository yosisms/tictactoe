export function ScoreBoard({ scores }) {
  return (
    <div className="flex justify-center gap-2 sm:gap-6 p-2 sm:p-4">
      <div className="flex flex-col items-center px-3 sm:px-5 py-2 sm:py-3 bg-slate-800/50 rounded-lg sm:rounded-xl border border-cyan-500/30 glow-cyan">
        <span className="text-cyan-400 text-glow-cyan font-bold text-sm sm:text-xl">
          X
        </span>
        <span className="text-white text-lg sm:text-2xl font-bold">
          {scores.X}
        </span>
      </div>

      <div className="flex flex-col items-center px-3 sm:px-5 py-2 sm:py-3 bg-slate-800/50 rounded-lg sm:rounded-xl border border-slate-500/30">
        <span className="text-slate-400 font-bold text-xs sm:text-lg">
          Draw
        </span>
        <span className="text-slate-300 text-lg sm:text-2xl font-bold">
          {scores.draws}
        </span>
      </div>

      <div className="flex flex-col items-center px-3 sm:px-5 py-2 sm:py-3 bg-slate-800/50 rounded-lg sm:rounded-xl border border-pink-500/30 glow-pink">
        <span className="text-pink-400 text-glow-pink font-bold text-sm sm:text-xl">
          O
        </span>
        <span className="text-white text-lg sm:text-2xl font-bold">
          {scores.O}
        </span>
      </div>
    </div>
  );
}
