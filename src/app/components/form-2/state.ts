import { type Item, type OrderFormModel } from './types';

export const items: Item[] = [
  { product: 'Product 1', quantity: 2 },
  { product: 'Product 2', quantity: 7 },
  { product: 'Product 3', quantity: 1 },
];

export const initialState: OrderFormModel = { customerName: '', items };
