import { Cell } from "./Cell";

export function Board({
  board,
  onCellClick,
  winningLine,
  gameOver,
  disabled = false,
}) {
  return (
    <div className="grid grid-cols-3 gap-1 sm:gap-3 p-2 sm:p-4 bg-slate-800/50 rounded-lg sm:rounded-2xl backdrop-blur-sm border border-slate-700/50">
      {board.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onClick={() => onCellClick(index)}
          isWinning={winningLine?.includes(index)}
          disabled={gameOver || disabled}
        />
      ))}
    </div>
  );
}
