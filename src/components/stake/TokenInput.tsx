'use client';

import { useState } from 'react';

interface TokenInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TokenInput({ value, onChange }: TokenInputProps) {
  return (
    <div className="w-full">
      <label className="block text-sm text-neutral-400 mb-1">Você envia</label>
      <div className="flex items-center border border-neutral-700 bg-neutral-900 px-4 py-3 rounded-lg focus-within:ring-1 ring-blue-500">
        <input
          type="number"
          placeholder="0.00"
          className="bg-transparent w-full outline-none text-lg text-white placeholder-neutral-500"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min="0"
          step="any"
        />
        <span className="ml-2 text-white font-medium">USDC</span>
      </div>
    </div>
  );
}
