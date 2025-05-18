'use client';

import { useEffect, useState } from 'react';
// 🔒 Desativado por enquanto: leitura do contrato Anchor
// import { useConnection } from '@solana/wallet-adapter-react';
// import { Program, AnchorProvider, BN } from '@coral-xyz/anchor';
// import idl from '@/idl/nwcswap.json';
// import { Nwcswap } from '@/idl/nwcswap';
// import { PublicKey } from '@solana/web3.js';

// const PROGRAM_ID = new PublicKey('2sZHKBKeQ556KXwQznBNnYXr1C9e6AnXfqpuJz9DHbwm');

export default function RateInfo() {
  const [rate, setRate] = useState<number>(0.10);

  // 🔒 Código abaixo está preparado para ser ativado depois
  /*
  const { connection } = useConnection();

  useEffect(() => {
    (async () => {
      try {
        const provider = AnchorProvider.local(connection);
        const program = new Program<Nwcswap>(idl as any, PROGRAM_ID, provider);

        const state = await program.account.state.fetch(
          (await PublicKey.findProgramAddressSync(
            [Buffer.from('state')],
            program.programId
          ))[0]
        );

        const rawRate = state.rate as BN;
        const formattedRate = rawRate.toNumber() / 1_000_000;

        setRate(formattedRate);
      } catch (err) {
        console.error('Erro ao buscar rate do contrato:', err);
      }
    })();
  }, [connection]);
  */

  return (
    <div className="text-sm text-neutral-400 space-y-1 mt-4">
      <p>💱 1 $NWC = {rate.toFixed(6)} USDC</p>
      <p>🧾 Taxa de emissão: <span className="text-white font-medium">0.5%</span></p>
    </div>
  );
}
