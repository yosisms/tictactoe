export function ResetButton({
  onReset,
  onResetScores,
  gameOver,
  showBackButton = false,
  onBackClick,
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 justify-center">
        {gameOver && (
          <button
            onClick={onReset}
            className="
              px-5 sm:px-6 py-3
              bg-gradient-to-r from-cyan-500 to-pink-500
              text-white font-bold text-base sm:text-lg
              rounded-xl
              transform transition-all duration-200
              hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30
              active:scale-95
            "
          >
            Play Again
          </button>
        )}
        <button
          onClick={onResetScores}
          className="
            px-5 sm:px-6 py-3
            bg-slate-700/50 border border-slate-600
            text-slate-300 font-semibold text-base sm:text-lg
            rounded-xl
            transform transition-all duration-200
            hover:bg-slate-600/50 hover:border-slate-500 hover:text-white
            active:scale-95
          "
        >
          Reset All
        </button>
      </div>
      {showBackButton && (
        <button
          onClick={onBackClick}
          className="
            w-full py-3 px-4
            bg-slate-700/50 border border-slate-600/50
            text-slate-300 font-semibold text-base
            rounded-xl
            transform transition-all duration-200
            hover:bg-slate-700 hover:border-slate-500 hover:text-slate-100
            active:scale-95
          "
        >
          ← Change Game Mode
        </button>
      )}
    </div>
  );
}
