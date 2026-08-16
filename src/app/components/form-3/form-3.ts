import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { UserFormModel } from './types';
import { initialState } from './state';

@Component({
  selector: 'app-form-3',
  templateUrl: './form-3.html',
  styleUrl: './form-3.scss',
  imports: [FormRoot, FormField, CommonModule],
})
export class Form3 {
  model = signal<UserFormModel>(initialState);
  userForm = form(this.model);

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
