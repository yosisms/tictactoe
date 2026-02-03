import { useGameLogic } from "./hooks/useGameLogic";
import { Board } from "./components/Board";
import { StatusBar } from "./components/StatusBar";
import { ScoreBoard } from "./components/ScoreBoard";
import { ResetButton } from "./components/ResetButton";

function App() {
  const {
    board,
    scores,
    winningLine,
    gameOver,
    handleCellClick,
    resetGame,
    resetScores,
    getStatus,
  } = useGameLogic();

  const status = getStatus();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Tic Tac Toe
        </h1>

        {/* Score Board */}
        <ScoreBoard scores={scores} />

        {/* Status Bar */}
        <StatusBar status={status} />

        {/* Game Board */}
        <Board
          board={board}
          onCellClick={handleCellClick}
          winningLine={winningLine}
          gameOver={gameOver}
        />

        {/* Reset Buttons */}
        <ResetButton
          onReset={resetGame}
          onResetScores={resetScores}
          gameOver={gameOver}
        />
      </div>
    </div>
  );
}

export default App;
