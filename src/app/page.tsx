'use client';

import Brief from '@/components/intro/Brief';
import SwapCard from '@/components/stake/SwapCard';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white px-4 pb-20">
      <Brief />
      <div className="flex justify-center mt-12">
        <SwapCard />
      </div>
    </main>
  );
}
