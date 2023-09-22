
export interface CartItem {
  productId: number;
  productName: string;
  quantity: number;
  width?: number;
  height?: number;
  price: number;
}

export default function useCart() {
  const cart: Ref<CartItem[]> = useState('cartItems', () => []);
  return {
    cart
  };
}