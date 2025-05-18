'use client';

import { useState, useEffect } from 'react';
import TokenInput from './TokenInput';
import TokenOutput from './TokenOutput';
import RateInfo from './RateInfo';
import SwapButton from './SwapButton';

export default function SwapCard() {
  const [usdcAmount, setUsdcAmount] = useState('');
  const [nwcOutput, setNwcOutput] = useState('0.00');
  const fixedRate = 0.10; // 1 NWC = 0.10 USDC
  const mintFee = 0.005;  // 0.5% taxa

  // Atualiza o output automaticamente conforme o usuário digita
  useEffect(() => {
    const input = parseFloat(usdcAmount);
    if (!isNaN(input) && input > 0) {
      const usdcAfterFee = input * (1 - mintFee); // aplica taxa
      const nwc = usdcAfterFee / fixedRate;
      setNwcOutput(nwc.toFixed(2));
    } else {
      setNwcOutput('0.00');
    }
  }, [usdcAmount]);

  return (
    <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-6 text-center">Converter USDC para $NWC</h2>

      <div className="space-y-4">
        <TokenInput value={usdcAmount} onChange={setUsdcAmount} />
        <TokenOutput amount={nwcOutput} />
        <RateInfo />
        <SwapButton
          onClick={() => console.log('⚙️ swap() será chamado futuramente')}
        />
      </div>
    </div>
  );
}
