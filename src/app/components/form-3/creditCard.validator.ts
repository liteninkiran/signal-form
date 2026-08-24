import { maxLength, minLength, required, SchemaPath } from '@angular/forms/signals';

export function validateCreditCard(field: SchemaPath<string>) {
  required(field, { message: 'Credit card number is required' });
  minLength(field, 16, { message: 'Credit card number must have 16 digits' });
  maxLength(field, 16, { message: 'Credit card number must be less than 17 digits' });
}
