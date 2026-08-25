import { required, schema } from '@angular/forms/signals';
import { Address } from './types';

export const addressSchema = schema<Address>((address) => {
  required(address.street, { message: 'Street is required' });
  required(address.city, { message: 'City is required' });
  required(address.postcode, { message: 'Postcode is required' });
  required(address.country, { message: 'Country is required' });
});
