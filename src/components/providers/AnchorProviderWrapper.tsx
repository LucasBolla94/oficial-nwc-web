'use client';

import { FC, ReactNode, useEffect } from 'react';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { AnchorProvider, setProvider } from '@coral-xyz/anchor';

interface Props {
  children: ReactNode;
}

export const AnchorProviderWrapper: FC<Props> = ({ children }) => {
  const wallet = useAnchorWallet();
  const { connection } = useConnection();

  useEffect(() => {
    if (wallet) {
      const provider = new AnchorProvider(connection, wallet, {
        commitment: 'confirmed',
      });
      setProvider(provider);
    }
  }, [wallet, connection]);

  return <>{children}</>;
};
