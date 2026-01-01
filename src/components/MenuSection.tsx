import { MenuItem } from './MenuItem';
import { MenuItem as MenuItemType, CartItem } from '../types';

interface MenuSectionProps {
  title: string;
  items: MenuItemType[];
  cart: CartItem[];
  onAddToCart: (item: MenuItemType) => void;
  onRemoveFromCart: (itemId: string) => void;
}

export function MenuSection({ title, items, cart, onAddToCart, onRemoveFromCart }: MenuSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item) => {
          const cartItem = cart.find((ci) => ci.id === item.id);
          const quantity = cartItem?.quantity || 0;

          return (
            <MenuItem
              key={item.id}
              item={item}
              quantity={quantity}
              onAdd={() => onAddToCart(item)}
              onRemove={() => onRemoveFromCart(item.id)}
            />
          );
        })}
      </div>
    </section>
  );
}
