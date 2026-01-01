import { MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-800 mt-16 py-8 pb-24">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 mb-2">
          <span className="text-white font-bold">Napolli Pizzaria</span>
        </p>
        <p className="text-gray-500 text-sm mb-3">
          Encomendas durante a semana. Entregas apenas aos Domingos.
        </p>
        <div className="flex items-center justify-center gap-2 text-green-400">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Pedidos via WhatsApp</span>
        </div>
      </div>
    </footer>
  );
}
