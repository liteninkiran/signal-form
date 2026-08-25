import { Component, inject, signal } from '@angular/core';
import {
  applyEach,
  FieldTree,
  form,
  FormField,
  FormRoot,
  PathKind,
  required,
  SchemaPathTree,
} from '@angular/forms/signals';
import { Item, type OrderFormModel } from './types';
import { initialState } from './state';
import { lineItemSchema } from './order.schema';
import { DummyService } from './dummy-service';

type Field = FieldTree<OrderFormModel, string | number, 'writable'>;
type Path = SchemaPathTree<OrderFormModel, PathKind.Root>;

const defaultItem: Item = { product: '', quantity: 1 };
const addFn = (items: Item[]) => [...items, defaultItem];
const removeFn = (index: number) => (items: Item[]) => items.filter((_, i) => i !== index);

const validation = (path: Path) => {
  required(path.customerName, { message: 'Customer name is required' });
  applyEach(path.items, lineItemSchema);
};

const error = {
  kind: 'serverError',
  message: 'Could not save your information. Please try again.',
};

@Component({
  selector: 'app-form-2',
  templateUrl: './form-2.html',
  styleUrl: './form-2.scss',
  imports: [FormRoot, FormField],
})
export class Form2 {
  readonly dummyService = inject(DummyService);
  readonly #action = async (field: Field) => {
    console.log(field);
    try {
      await this.dummyService.submit();
    } catch {
      return error;
    }
    return undefined;
  };
  readonly #options = {
    submission: {
      action: this.#action,
      onInvalid: (field: Field) => {
        console.log('FORM INVALID');
        console.log(field().errorSummary());
      },
    },
  };
  model = signal<OrderFormModel>(initialState);
  orderForm = form(this.model, validation, this.#options);

  addItem() {
    this.orderForm.items().value.update(addFn);
  }

  removeItem(index: number) {
    this.orderForm.items().value.update(removeFn(index));
  }
}
