import { Product } from '@models/product';

export type CartItem = Product & {
  amount: number;
};
