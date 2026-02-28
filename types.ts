export interface Product {
  id: string;
  name: string;
  category: 'couch' | 'cushion' | 'foam' | 'furniture' | 'headboard' | 'curtains' | 'service';
  price: number;
  description: string;
  image: string;
  dimensions?: string;
  material?: string;
  colors: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}