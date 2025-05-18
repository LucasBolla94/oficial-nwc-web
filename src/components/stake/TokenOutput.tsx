'use client';

interface TokenOutputProps {
  amount: string;
}

export default function TokenOutput({ amount }: TokenOutputProps) {
  return (
    <div className="w-full">
      <label className="block text-sm text-neutral-400 mb-1">Você recebe</label>
      <div className="flex items-center border border-neutral-700 bg-neutral-900 px-4 py-3 rounded-lg">
        <input
          type="text"
          className="bg-transparent w-full outline-none text-lg text-white"
          value={amount}
          readOnly
        />
        <span className="ml-2 text-white font-medium">$NWC</span>
      </div>
    </div>
  );
}
