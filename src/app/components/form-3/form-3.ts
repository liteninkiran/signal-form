import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FieldTree, form, FormField, FormRoot } from '@angular/forms/signals';
import { UserFormModel } from './types';
import { initialState } from './state';
import { UserService } from './user-service';

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

@Component({
  selector: 'app-form-3',
  templateUrl: './form-3.html',
  styleUrl: './form-3.scss',
  imports: [FormRoot, FormField, CommonModule],
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
  readonly #options = { submission: { action: this.#action } };
  readonly userForm = form(this.model, this.#options);

  setFormValues() {
    this.userForm().value.set({
      firstName: 'David',
      lastName: 'Jones',
      address: {
        street: '5 The Street',
        city: 'Manchester',
        postcode: 'M5 6HL',
      },
      cc: '',
    });
    this.userForm.address.city().value.set('Kansas');

    // const isStreetValid = this.userForm.address.street().valid();
    // const isAddressValid = this.userForm.address().valid();
  }
}
