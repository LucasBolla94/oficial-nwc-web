'use client';

interface SwapButtonProps {
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export default function SwapButton({ disabled, loading, onClick }: SwapButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full mt-6 py-3 px-6 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 
        ${disabled || loading
          ? 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 text-white'}
      `}
    >
      {loading ? 'Processando...' : 'Realizar Conversão'}
    </button>
  );
}
