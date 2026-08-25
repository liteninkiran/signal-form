import { schema, required, min, max } from '@angular/forms/signals';
import { Item } from './types';

export const lineItemSchema = schema<Item>((item) => {
  required(item.product, { message: 'Product name is required' });
  min(item.quantity, 3, { message: 'Quantity must be at least 3' });
  max(item.quantity, 10, { message: 'Quantity must be at most 10' });
});
