import { useState, useCallback } from "react";
import { getAIMove } from "../utils/aiPlayer";

const WINNING_LINES = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal
  [2, 4, 6], // anti-diagonal
];

export function useGameLogic(mode = "multi", difficulty = "hard") {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [winningLine, setWinningLine] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [isAIThinking, setIsAIThinking] = useState(false);

  const checkWinner = useCallback((squares) => {
    for (const line of WINNING_LINES) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], line };
      }
    }
    return null;
  }, []);

  const checkDraw = useCallback((squares) => {
    return squares.every((cell) => cell !== null);
  }, []);

  const makeAIMove = useCallback(
    async (boardState) => {
      setIsAIThinking(true);
      const aiMoveIndex = await getAIMove(boardState, difficulty);
      setIsAIThinking(false);

      const newBoard = [...boardState];
      newBoard[aiMoveIndex] = "O";

      const result = checkWinner(newBoard);
      if (result) {
        setWinningLine(result.line);
        setGameOver(true);
        setScores((prev) => ({
          ...prev,
          [result.winner]: prev[result.winner] + 1,
        }));
      } else if (checkDraw(newBoard)) {
        setGameOver(true);
        setScores((prev) => ({
          ...prev,
          draws: prev.draws + 1,
        }));
      } else {
        setIsXNext(true);
      }
      setBoard(newBoard);
    },
    [difficulty, checkWinner, checkDraw],
  );

  const handleCellClick = useCallback(
    (index) => {
      if (board[index] || gameOver || isAIThinking) return;

      const newBoard = [...board];
      newBoard[index] = isXNext ? "X" : "O";
      setBoard(newBoard);

      const result = checkWinner(newBoard);
      if (result) {
        setWinningLine(result.line);
        setGameOver(true);
        setScores((prev) => ({
          ...prev,
          [result.winner]: prev[result.winner] + 1,
        }));
      } else if (checkDraw(newBoard)) {
        setGameOver(true);
        setScores((prev) => ({
          ...prev,
          draws: prev.draws + 1,
        }));
      } else {
        setIsXNext(!isXNext);

        // If in single-player mode and it's AI's turn, make AI move
        if (mode === "single") {
          makeAIMove(newBoard);
        }
      }
    },
    [
      board,
      isXNext,
      gameOver,
      isAIThinking,
      mode,
      checkWinner,
      checkDraw,
      makeAIMove,
    ],
  );

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinningLine(null);
    setGameOver(false);
  }, []);

  const resetScores = useCallback(() => {
    setScores({ X: 0, O: 0, draws: 0 });
    resetGame();
  }, [resetGame]);

  const getStatus = useCallback(() => {
    const result = checkWinner(board);
    if (result) {
      return { type: "win", winner: result.winner };
    }
    if (checkDraw(board)) {
      return { type: "draw" };
    }
    return { type: "playing", currentPlayer: isXNext ? "X" : "O" };
  }, [board, isXNext, checkWinner, checkDraw]);

  return {
    board,
    isXNext,
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
  };
}
