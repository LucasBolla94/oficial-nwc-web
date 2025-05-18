'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// ✅ Corrigido: Lottie só no client
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const IntroLegal = dynamic(() => import('@/components/whitepaper/intro'), { ssr: false });

import animationData from '@/../public/animations/shield-animation.json';

export default function Brief() {
  const [showLegal, setShowLegal] = useState(false);

  return (
    <section className="w-full px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-10 bg-neutral-950 text-white">
      
      {/* Texto */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">O que é a NorthWall?</h2>
        <p className="text-neutral-300 leading-relaxed">
          A NorthWall é um protocolo experimental na blockchain Solana que oferece uma forma simples de converter <strong>USDC</strong> em <strong>$NWC</strong> — um token interno que acompanha o crescimento de uma carteira digital gerenciada com foco em estabilidade e eficiência.
        </p>

        <p className="text-neutral-300 leading-relaxed">
          Parte dos USDC são utilizados em estratégias descentralizadas para fortalecer a liquidez do sistema e reinvestir no próprio protocolo. A outra parte permanece acessível para resgates imediatos.
        </p>

        <p className="text-neutral-300 leading-relaxed">
          Tudo funciona de forma transparente, direta e sem promessas de retorno fixo. É um experimento de longo prazo para quem acredita no poder da descentralização com responsabilidade.
        </p>

        <p className="text-green-400 text-sm mt-4">
          ✅ Comece com pouco. Observe. Acompanhe os relatórios.<br />
          Quando estiver pronto, aumente sua posição.
        </p>

        {/* Botão de aviso e conteúdo legal */}
        <div className="mt-8">
          <button
            onClick={() => setShowLegal(!showLegal)}
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-medium text-sm px-4 py-2 rounded-lg transition-colors duration-200"
          >
            ⚠️ Aviso importante — leia aqui
          </button>

          {showLegal && <IntroLegal />}
        </div>
      </div>

      {/* Animação */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Lottie animationData={animationData} loop autoplay style={{ width: 300, height: 300 }} />
      </div>
    </section>
  );
}
