import { ShoppingCart } from 'lucide-react';
import { CartItem } from '../types';

interface FloatingCartProps {
  items: CartItem[];
  onCheckout: () => void;
}

export function FloatingCart({ items, onCheckout }: FloatingCartProps) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent p-4 pb-safe">
      <button
        onClick={onCheckout}
        className="w-full max-w-2xl mx-auto flex items-center justify-between bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-900/50 transition-all duration-300 transform hover:scale-[1.02]"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          </div>
          <span>Finalizar Pedido</span>
        </div>
        <span className="text-xl">R$ {totalPrice.toFixed(2)}</span>
      </button>
    </div>
  );
}
