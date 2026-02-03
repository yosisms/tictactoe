const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

/**
 * Check if there's a winner on the board
 * @param {Array} squares - The game board
 * @returns {string|null} - 'X', 'O', or null
 */
function checkWinner(squares) {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/**
 * Check if the board is full (draw)
 * @param {Array} squares - The game board
 * @returns {boolean}
 */
function isBoardFull(squares) {
  return squares.every((cell) => cell !== null);
}

/**
 * Get all available (empty) positions
 * @param {Array} squares - The game board
 * @returns {Array} - Array of available indices
 */
function getAvailableMoves(squares) {
  return squares.reduce((moves, cell, index) => {
    if (cell === null) moves.push(index);
    return moves;
  }, []);
}

/**
 * Minimax algorithm to find the best move
 * @param {Array} squares - The game board
 * @param {boolean} isMaximizing - Whether current player is maximizing
 * @param {number} depth - Current depth in the game tree
 * @param {number} alpha - Alpha value for pruning
 * @param {number} beta - Beta value for pruning
 * @param {number} maxDepth - Maximum depth to search (default: Infinity)
 * @returns {number} - Score of the position
 */
function minimax(
  squares,
  isMaximizing,
  depth = 0,
  alpha = -Infinity,
  beta = Infinity,
  maxDepth = Infinity,
) {
  const winner = checkWinner(squares);

  // Terminal states
  if (winner === "O") return 10 - depth; // AI wins (sooner is better)
  if (winner === "X") return depth - 10; // Human wins (later is better for human)
  if (isBoardFull(squares)) return 0; // Draw

  // Stop searching if we've reached max depth
  if (depth >= maxDepth) return 0; // Neutral position (don't know, can't evaluate further)

  const availableMoves = getAvailableMoves(squares);

  if (isMaximizing) {
    // AI's turn (O) - maximize score
    let maxScore = -Infinity;

    for (const move of availableMoves) {
      squares[move] = "O";
      const score = minimax(squares, false, depth + 1, alpha, beta, maxDepth);
      squares[move] = null;

      maxScore = Math.max(maxScore, score);
      alpha = Math.max(alpha, score);

      // Alpha-beta pruning
      if (beta <= alpha) break;
    }

    return maxScore;
  } else {
    // Human's turn (X) - minimize score
    let minScore = Infinity;

    for (const move of availableMoves) {
      squares[move] = "X";
      const score = minimax(squares, true, depth + 1, alpha, beta, maxDepth);
      squares[move] = null;

      minScore = Math.min(minScore, score);
      beta = Math.min(beta, score);

      // Alpha-beta pruning
      if (beta <= alpha) break;
    }

    return minScore;
  }
}

/**
 * Get a random move for easy difficulty
 * @param {Array} board - The game board
 * @returns {number} - Index of a random move
 */
function getRandomMove(board) {
  const availableMoves = getAvailableMoves(board);
  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
}

/**
 * Like playing against a kid - intentionally weak but not stupid
 * 60% random, 40% smart (makes obvious good moves)
 * @param {Array} board - The game board
 * @returns {number} - Index of the move
 */
function getEasyMove(board) {
  const availableMoves = getAvailableMoves(board);

  // If board is empty, play center or corner
  if (availableMoves.length === 9) {
    return [4, 0, 2, 6, 8][Math.floor(Math.random() * 5)];
  }

  // 40% chance to make a smart move (block or win)
  if (Math.random() < 0.4) {
    return findBestMove(board, 2); // Look ahead only 1-2 moves
  }

  // 60% chance to just pick randomly
  return getRandomMove(board);
}

/**
 * Medium difficulty - looks ahead 3 moves (faster, less perfect)
 * @param {Array} board - The game board
 * @returns {number} - Index of the best move with limited depth
 */
function getMediumMove(board) {
  return findBestMove(board, 3); // Limited depth for faster thinking
}

/**
 * Find the best move for the AI (with optional depth limit)
 * @param {Array} board - The game board
 * @param {number} maxDepth - Maximum depth to search (default: unlimited = hard)
 * @returns {number} - Index of the best move
 */
function findBestMove(board, maxDepth = Infinity) {
  const availableMoves = getAvailableMoves(board);

  // If board is empty, play center or corner for variety
  if (availableMoves.length === 9) {
    const goodFirstMoves = [4, 0, 2, 6, 8]; // Center or corners
    return goodFirstMoves[Math.floor(Math.random() * goodFirstMoves.length)];
  }

  // If only one move left, make it
  if (availableMoves.length === 1) {
    return availableMoves[0];
  }

  let bestMove = -1;
  let bestScore = -Infinity;

  // Try each available move and pick the best one
  for (const move of availableMoves) {
    const newBoard = [...board];
    newBoard[move] = "O"; // AI is 'O'

    const score = minimax(newBoard, false, 0, -Infinity, Infinity, maxDepth);

    if (score > bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }

  return bestMove;
}

/**
 * Get AI move based on difficulty level
 * @param {Array} board - The game board
 * @param {string} difficulty - 'easy', 'medium', or 'hard' (default: 'hard')
 * @returns {number} - Index of the move
 */
export function getAIMoveByDifficulty(board, difficulty = "hard") {
  switch (difficulty) {
    case "easy":
      return getEasyMove(board);
    case "medium":
      return getMediumMove(board);
    case "hard":
    default:
      return findBestMove(board);
  }
}

/**
 * Get AI move with optional delay for better UX
 * @param {Array} board - The game board
 * @param {string} difficulty - 'easy', 'medium', or 'hard' (default: 'hard')
 * @param {number} delayMs - Delay in milliseconds (default 400ms)
 * @returns {Promise<number>} - Promise that resolves to the move index
 */
export async function getAIMove(board, difficulty = "hard", delayMs = 400) {
  // Add slight delay to make AI feel more natural
  await new Promise((resolve) => setTimeout(resolve, delayMs));
  return getAIMoveByDifficulty(board, difficulty);
}
