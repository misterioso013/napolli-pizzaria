import { CartItem } from '../types';

export function sendWhatsAppOrder(items: CartItem[]) {
  const phoneNumber = '5581994425625';

  let message = '*Olá! Gostaria de fazer um pedido:*\n\n';

  items.forEach((item) => {
    message += `*${item.name}* (${item.size})\n`;
    message += `   Quantidade: ${item.quantity}\n`;
    message += `   Valor: R$ ${(item.price * item.quantity).toFixed(2)}\n\n`;
  });

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  message += `*Total: R$ ${total.toFixed(2)}*`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
}
