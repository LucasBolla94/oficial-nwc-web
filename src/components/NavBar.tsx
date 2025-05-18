'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';

import Link from 'next/link';

const WalletMultiButton = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-black text-white">
      <div className="flex items-center gap-3">
        <Image src="/shield.png" alt="Shield" width={32} height={32} />
        <span className="text-xl font-semibold tracking-wide">NorthWall</span>
      </div>
      <WalletMultiButton className="!bg-white !text-black !font-medium !px-4 !py-2 !rounded-lg hover:!opacity-90 transition-all" />
    </nav>
  );
}
