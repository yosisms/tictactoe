export function ScoreBoard({ scores }) {
  return (
    <div className="flex justify-center gap-4 sm:gap-8 p-4">
      <div className="flex flex-col items-center px-4 sm:px-6 py-3 bg-slate-800/50 rounded-xl border border-cyan-500/30 glow-cyan">
        <span className="text-cyan-400 text-glow-cyan font-bold text-xl sm:text-2xl">
          X
        </span>
        <span className="text-white text-2xl sm:text-3xl font-bold">
          {scores.X}
        </span>
      </div>

      <div className="flex flex-col items-center px-4 sm:px-6 py-3 bg-slate-800/50 rounded-xl border border-slate-500/30">
        <span className="text-slate-400 font-bold text-lg sm:text-xl">
          Draw
        </span>
        <span className="text-slate-300 text-2xl sm:text-3xl font-bold">
          {scores.draws}
        </span>
      </div>

      <div className="flex flex-col items-center px-4 sm:px-6 py-3 bg-slate-800/50 rounded-xl border border-pink-500/30 glow-pink">
        <span className="text-pink-400 text-glow-pink font-bold text-xl sm:text-2xl">
          O
        </span>
        <span className="text-white text-2xl sm:text-3xl font-bold">
          {scores.O}
        </span>
      </div>
    </div>
  );
}
