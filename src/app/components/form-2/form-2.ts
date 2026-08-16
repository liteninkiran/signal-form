import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { Item, type OrderFormModel } from './types';
import { initialState } from './state';

const defaultItem: Item = { product: '', quantity: 1 };
const addFn = (items: Item[]) => [...items, defaultItem];
const removeFn = (index: number) => (items: Item[]) => items.filter((_, i) => i !== index);

@Component({
  selector: 'app-form-2',
  templateUrl: './form-2.html',
  styleUrl: './form-2.scss',
  imports: [FormRoot, FormField],
})
export class Form2 {
  model = signal<OrderFormModel>(initialState);
  orderForm = form(this.model);

  addItem() {
    this.orderForm.items().value.update(addFn);
  }

  removeItem(index: number) {
    this.orderForm.items().value.update(removeFn(index));
  }
}
