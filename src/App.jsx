import { useState } from "react";
import { useGameLogic } from "./hooks/useGameLogic";
import { Board } from "./components/Board";
import { StatusBar } from "./components/StatusBar";
import { ScoreBoard } from "./components/ScoreBoard";
import { ResetButton } from "./components/ResetButton";
import { ModeSelector } from "./components/ModeSelector";
import { DifficultySelector } from "./components/DifficultySelector";

function App() {
  const [gameState, setGameState] = useState("mode"); // 'mode' | 'difficulty' | 'game'
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState("hard");

  const {
    board,
    scores,
    winningLine,
    gameOver,
    isAIThinking,
    mode,
    difficulty,
    handleCellClick,
    resetGame,
    resetScores,
    getStatus,
  } = useGameLogic(selectedMode || "multi", selectedDifficulty);

  const handleSelectMode = (mode) => {
    setSelectedMode(mode);

    if (mode === "single") {
      // Show difficulty selector for single-player
      setGameState("difficulty");
    } else {
      // Start game directly for multiplayer
      setGameState("game");
    }
  };

  const handleSelectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setGameState("game");
  };

  const handleBackToDifficulty = () => {
    setGameState("difficulty");
    resetGame();
  };

  const handleBackToMode = () => {
    setGameState("mode");
    setSelectedMode(null);
    resetGame();
    resetScores();
  };

  const status = getStatus();

  // Show mode selector
  if (gameState === "mode") {
    return <ModeSelector onSelectMode={handleSelectMode} />;
  }

  // Show difficulty selector (only for single-player)
  if (gameState === "difficulty") {
    return (
      <DifficultySelector
        onSelectDifficulty={handleSelectDifficulty}
        onBack={handleBackToMode}
      />
    );
  }

  // Show game
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-start sm:justify-center pt-2 pb-2 sm:p-4 px-2">
      <div className="w-full max-w-md space-y-2 sm:space-y-4">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Tic Tac Toe
        </h1>

        {/* Game Mode & Difficulty Info */}
        <div className="text-center text-slate-400 text-xs sm:text-sm">
          {mode === "single" && (
            <p>
              vs Computer · <span className="capitalize">{difficulty}</span>
            </p>
          )}
          {mode === "multi" && <p>vs Player</p>}
        </div>

        {/* Score Board */}
        <ScoreBoard scores={scores} />

        {/* Status Bar */}
        <StatusBar status={status} />

        {/* AI Thinking Indicator */}
        {isAIThinking && (
          <div className="text-center text-slate-400 text-xs sm:text-sm animate-pulse">
            AI is thinking...
          </div>
        )}

        {/* Game Board */}
        <Board
          board={board}
          onCellClick={handleCellClick}
          winningLine={winningLine}
          gameOver={gameOver}
          disabled={isAIThinking}
        />

        {/* Reset Buttons */}
        <ResetButton
          onReset={resetGame}
          onResetScores={() => {
            resetScores();
            handleBackToMode();
          }}
          gameOver={gameOver}
          showBackButton={true}
          onBackClick={handleBackToMode}
        />
      </div>
    </div>
  );
}

export default App;
