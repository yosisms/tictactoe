export function ModeSelector({ onSelectMode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md space-y-6">
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-bold text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Tic Tac Toe
        </h1>

        <p className="text-lg sm:text-xl text-center text-slate-300 mt-4">
          Choose your game mode
        </p>

        {/* Mode Selection Cards */}
        <div className="space-y-4 mt-8">
          {/* Single Player Mode */}
          <button
            onClick={() => onSelectMode("single")}
            className="w-full group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-5 sm:p-6 border-2 border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="text-4xl sm:text-5xl mb-2">🤖</div>
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1">
                  vs Computer
                </h2>
                <p className="text-slate-300 text-sm">
                  Challenge the AI opponent
                </p>
              </div>
              <div className="text-3xl sm:text-4xl text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          </button>

          {/* Multiplayer Mode */}
          <button
            onClick={() => onSelectMode("multi")}
            className="w-full group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 p-5 sm:p-6 border-2 border-pink-500/50 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="text-4xl sm:text-5xl mb-2">👥</div>
                <h2 className="text-xl sm:text-2xl font-bold text-pink-400 mb-1">
                  vs Player
                </h2>
                <p className="text-slate-300 text-sm">
                  Play with a friend locally
                </p>
              </div>
              <div className="text-3xl sm:text-4xl text-pink-400 opacity-50 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
