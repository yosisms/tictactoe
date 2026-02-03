export function StatusBar({ status }) {
  if (status.type === "win") {
    const isX = status.winner === "X";
    return (
      <div
        className={`text-lg sm:text-3xl font-bold text-center py-2 sm:py-4 ${
          isX ? "text-cyan-400 text-glow-cyan" : "text-pink-400 text-glow-pink"
        }`}
      >
        🎉 Player {status.winner} Wins! 🎉
      </div>
    );
  }

  if (status.type === "draw") {
    return (
      <div className="text-lg sm:text-3xl font-bold text-center py-2 sm:py-4 text-slate-400">
        🤝 It's a Draw! 🤝
      </div>
    );
  }

  const isX = status.currentPlayer === "X";
  return (
    <div className="text-base sm:text-2xl font-semibold text-center py-2 sm:py-4 text-slate-300">
      Player{" "}
      <span
        className={
          isX ? "text-cyan-400 text-glow-cyan" : "text-pink-400 text-glow-pink"
        }
      >
        {status.currentPlayer}
      </span>
      's turn
    </div>
  );
}
