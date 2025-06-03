export interface CartProduct {
  id: string | number;
  name?: string;
  price?: number;
}

export interface CartContextType {
  cartItems: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: string | number) => void;
}
