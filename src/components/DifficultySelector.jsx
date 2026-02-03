export function DifficultySelector({ onSelectDifficulty, onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-bold text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Difficulty
        </h1>

        <p className="text-xl text-center text-slate-300 mb-8">
          Choose your opponent's level
        </p>

        {/* Difficulty Selection Cards */}
        <div className="space-y-4">
          {/* Easy */}
          <button
            onClick={() => onSelectDifficulty("easy")}
            className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 p-8 border-2 border-green-500/50 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="text-4xl mb-2">🎮</div>
                <h2 className="text-2xl font-bold text-green-400 mb-1">Easy</h2>
                <p className="text-slate-300 text-sm">
                  Like playing with a kid
                </p>
              </div>
              <div className="text-4xl text-green-400 opacity-50 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          </button>

          {/* Medium */}
          <button
            onClick={() => onSelectDifficulty("medium")}
            className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 p-8 border-2 border-yellow-500/50 hover:border-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="text-4xl mb-2">🤔</div>
                <h2 className="text-2xl font-bold text-yellow-400 mb-1">
                  Medium
                </h2>
                <p className="text-slate-300 text-sm">A fair challenge</p>
              </div>
              <div className="text-4xl text-yellow-400 opacity-50 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          </button>

          {/* Hard */}
          <button
            onClick={() => onSelectDifficulty("hard")}
            className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/20 p-8 border-2 border-red-500/50 hover:border-red-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="text-4xl mb-2">🔥</div>
                <h2 className="text-2xl font-bold text-red-400 mb-1">Hard</h2>
                <p className="text-slate-300 text-sm">Unbeatable AI</p>
              </div>
              <div className="text-4xl text-red-400 opacity-50 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          </button>
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="w-full py-3 px-4 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-slate-100 rounded-xl transition-all duration-300 border border-slate-600/50 hover:border-slate-500"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
