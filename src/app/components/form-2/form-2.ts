import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';

const items: Item[] = [
  {
    product: 'Product 1',
    quantity: 2,
  },
  {
    product: 'Product 2',
    quantity: 7,
  },
  {
    product: 'Product 3',
    quantity: 1,
  },
];

interface Item {
  product: string;
  quantity: number;
}

interface OrderFormModel {
  customerName: string;
  items: Item[];
}

@Component({
  selector: 'app-form-2',
  templateUrl: './form-2.html',
  styleUrl: './form-2.scss',
  imports: [FormRoot, FormField],
})
export class Form2 {
  model = signal<OrderFormModel>({
    customerName: '',
    items,
  });
  orderForm = form(this.model);

  addItem() {}

  removeItem() {}
}
