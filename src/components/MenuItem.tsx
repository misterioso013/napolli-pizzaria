import { Plus, Minus } from 'lucide-react';
import { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

export function MenuItem({ item, quantity, onAdd, onRemove }: MenuItemProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-red-600/50 transition-all duration-300 shadow-lg hover:shadow-red-900/20">
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-700/50">
          <img
            src={item.image || "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400"}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-white text-lg leading-tight">{item.name}</h3>
            <span className="flex-shrink-0 text-red-500 font-bold text-lg">
              R$ {item.price.toFixed(2)}
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-2 leading-relaxed">{item.description}</p>

          <div className="flex items-center justify-between">
            <span className="text-green-400 text-xs font-medium">{item.size}</span>

            {quantity > 0 ? (
              <div className="flex items-center gap-2 bg-red-600/20 rounded-lg px-2 py-1">
                <button
                  onClick={onRemove}
                  className="w-7 h-7 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-md transition-colors"
                  aria-label="Remover"
                >
                  <Minus className="w-4 h-4 text-white" />
                </button>
                <span className="font-bold text-white w-6 text-center">{quantity}</span>
                <button
                  onClick={onAdd}
                  className="w-7 h-7 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-md transition-colors"
                  aria-label="Adicionar"
                >
                  <Plus className="w-4 h-4 text-white" />
                </button>
              </div>
            ) : (
              <button
                onClick={onAdd}
                className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-lg hover:shadow-red-900/50"
              >
                <Plus className="w-4 h-4" />
                Adicionar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
