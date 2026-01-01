import { useState } from 'react';
import { Header } from './components/Header';
import { MenuSection } from './components/MenuSection';
import { FloatingCart } from './components/FloatingCart';
import { Footer } from './components/Footer';
import { menuItems } from './data/menuData';
import { CartItem, MenuItem } from './types';
import { sendWhatsAppOrder } from './utils/whatsapp';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((ci) => ci.id === item.id);

      if (existingItem) {
        return prevCart.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }

      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((ci) => ci.id === itemId);

      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((ci) =>
          ci.id === itemId ? { ...ci, quantity: ci.quantity - 1 } : ci
        );
      }

      return prevCart.filter((ci) => ci.id !== itemId);
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    sendWhatsAppOrder(cart);
  };

  const salgadasItems = menuItems.filter((item) => item.category === 'salgada');
  const docesItems = menuItems.filter((item) => item.category === 'doce');
  const bebidasItems = menuItems.filter((item) => item.category === 'bebida');

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzExMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <MenuSection
            title="PIZZAS SALGADAS"
            items={salgadasItems}
            cart={cart}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />

          <MenuSection
            title="PIZZAS DOCES"
            items={docesItems}
            cart={cart}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />

          <MenuSection
            title="BEBIDAS"
            items={bebidasItems}
            cart={cart}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />
        </main>

        <Footer />

        <FloatingCart items={cart} onCheckout={handleCheckout} />
      </div>
    </div>
  );
}

export default App;
