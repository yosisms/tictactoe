export function Cell({ value, onClick, isWinning, disabled }) {
  const baseClasses = `
    aspect-square w-full
    flex items-center justify-center
    text-5xl sm:text-6xl md:text-7xl font-bold
    rounded-xl
    transition-all duration-200
    cursor-pointer
    bg-slate-700/50
    border-2 border-slate-600/50
  `;

  const hoverClasses = !value && !disabled 
    ? 'hover:bg-slate-600/70 hover:border-slate-500 hover:scale-105' 
    : '';

  const winClasses = isWinning ? 'animate-win-pulse' : '';
  
  const colorClasses = value === 'X' 
    ? 'text-cyan-400 text-glow-cyan' 
    : value === 'O' 
    ? 'text-pink-400 text-glow-pink' 
    : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled || !!value}
      className={`${baseClasses} ${hoverClasses} ${winClasses} ${colorClasses}`}
    >
      {value && (
        <span className="animate-pop-in">
          {value}
        </span>
      )}
    </button>
  );
}
