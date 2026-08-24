import { UserFormModel } from './types';

export const error = {
  kind: 'serverError',
  message: 'Could not save your information. Please try again.',
};

export const formValue: UserFormModel = {
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

export const postcodePattern =
  /^(?:(?:[A-PR-UWYZ][0-9][0-9A-HJKSTUW]?|[A-PR-UWYZ][A-HK-Y][0-9][0-9A-HJKSTUW]?) ?[0-9][ABD-HJLNP-UW-Z]{2}|GIR ?0AA)$/i;
