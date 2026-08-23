import { Component, inject, signal } from '@angular/core';
import {
  FieldTree,
  form,
  FormField,
  maxLength,
  minLength,
  PathKind,
  required,
  SchemaPathTree,
  submit,
} from '@angular/forms/signals';
import { UserFormModel } from './types';
import { initialState } from './state';
import { UserService } from './user-service';
import { CommonModule } from '@angular/common';

type Field = FieldTree<UserFormModel, string | number, 'writable'>;

const userInfoMap = (user: UserFormModel) => ({
  address: user.address,
  firstName: user.firstName,
  lastName: user.lastName,
});

const error = {
  kind: 'serverError',
  message: 'Could not save your information. Please try again.',
};

const formValue: UserFormModel = {
  firstName: 'David',
  lastName: 'Jones',
  address: {
    street: '5 The Street',
    city: 'Manchester',
    postcode: 'M5 6HL',
    country: 'UK',
  },
  cc: '0123456789abcdef',
};

const validation = (path: SchemaPathTree<UserFormModel, PathKind.Root>) => {
  required(path.firstName, { message: 'First name is required' });
  required(path.lastName, { message: 'Last name is required' });
  required(path.address.postcode);
  required(path.cc, { message: 'Credit card number is required' });
  minLength(path.cc, 16, { message: 'Credit card number must have 16 digits' });
  maxLength(path.cc, 16, { message: 'Credit card number must be less than 17 digits' });
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
    this.markAllAsTouched();
    this.markAllAsDirty();

    if (this.userForm().invalid()) {
      alert('Form invalid');
      return;
    }

    const success = await submit(this.userForm, this.#action);

    console.log(success);

    if (success) {
      alert('Form saved');
    }
  }

  markAllAsTouched() {
    this.userForm.firstName().markAsTouched();
    this.userForm.lastName().markAsTouched();
    this.userForm.address.street().markAsTouched();
    this.userForm.address.city().markAsTouched();
    this.userForm.address.postcode().markAsTouched();
    this.userForm.cc().markAsTouched();
  }

  markAllAsDirty() {
    this.userForm.firstName().markAsDirty();
    this.userForm.lastName().markAsDirty();
    this.userForm.address.street().markAsDirty();
    this.userForm.address.city().markAsDirty();
    this.userForm.address.postcode().markAsDirty();
    this.userForm.cc().markAsDirty();
  }
}
