'use client';

export default function IntroLegal() {
  return (
    <div className="mt-4 p-4 border-l-4 border-yellow-500 bg-yellow-100 text-black rounded-md">
      <h4 className="font-semibold mb-1">⚠️ Aviso Importante</h4>
      <p className="text-sm leading-relaxed">
        A NorthWall é um protocolo descentralizado experimental. O token <strong>$NWC</strong> não representa investimento tradicional, não garante lucros, e não está vinculado a nenhuma empresa registrada neste momento.
      </p>
      <p className="text-sm leading-relaxed mt-2">
        Todas as interações são voluntárias, feitas por contratos inteligentes na blockchain Solana.
        Você participa por escolha própria, acreditando na proposta, na transparência e no potencial de longo prazo do projeto.
      </p>
    </div>
  );
}
