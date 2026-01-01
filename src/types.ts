export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'salgada' | 'doce' | 'bebida';
  size: string;
  image?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
