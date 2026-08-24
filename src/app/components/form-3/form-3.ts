import { Component, inject, signal } from '@angular/core';
import {
  form,
  FormField,
  PathKind,
  required,
  SchemaPathTree,
  submit,
} from '@angular/forms/signals';
import { Field, MarkAs, UserFormModel } from './types';
import { initialState } from './state';
import { UserService } from './user-service';
import { CommonModule } from '@angular/common';
import { validatePostcode } from './postcode.validator';
import { validateCreditCard } from './creditCard.validator';
import { error, formValue } from './data';

const userInfoMap = (user: UserFormModel) => ({
  address: user.address,
  firstName: user.firstName,
  lastName: user.lastName,
});

const validation = (path: SchemaPathTree<UserFormModel, PathKind.Root>) => {
  required(path.firstName, { message: 'First name is required' });
  required(path.lastName, { message: 'Last name is required' });
  validatePostcode(path.address.postcode);
  validateCreditCard(path.cc);
};

@Component({
  selector: 'app-form-3',
  templateUrl: './form-3.html',
  styleUrl: './form-3.scss',
  imports: [FormField, CommonModule],
})
export class Form3 {
  readonly userService = inject(UserService);
  readonly model = signal<UserFormModel>(initialState);
  readonly #action = async (field: Field) => {
    try {
      await this.userService.saveUserInfo(userInfoMap(field().value()));
    } catch {
      return error;
    }
    return undefined;
  };
  readonly userForm = form(this.model, validation);

  setFormValues() {
    this.userForm().value.set(formValue);
    this.userForm.address.city().value.set('Kansas');
  }

  async onSave() {
    this.markAll(this.userForm, 'touched');
    this.markAll(this.userForm, 'dirty');

    if (this.userForm().invalid()) {
      return;
    }

    const success = await submit(this.userForm, this.#action);

    console.log(success);

    if (success) {
      alert('Form saved');
    }
  }

  markAll(fieldTree: any, state: MarkAs) {
    const field = fieldTree();

    if (state === 'dirty') field.markAsDirty();
    if (state === 'touched') field.markAsTouched();

    for (const key of Object.keys(fieldTree)) {
      if (key === 'value') continue;

      const child = fieldTree[key];

      if (typeof child === 'function') {
        this.markAll(child, state);
      }
    }
  }
}
