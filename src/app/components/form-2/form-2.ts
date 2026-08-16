import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { type OrderFormModel } from './types';
import { initialState } from './state';

@Component({
  selector: 'app-form-2',
  templateUrl: './form-2.html',
  styleUrl: './form-2.scss',
  imports: [FormRoot, FormField],
})
export class Form2 {
  model = signal<OrderFormModel>(initialState);
  orderForm = form(this.model);

  addItem() {}

  removeItem() {}
}
