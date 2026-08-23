import { UserFormModel } from './types';

export const initialState: UserFormModel = {
  firstName: '',
  lastName: '',
  address: {
    street: '',
    city: '',
    postcode: '',
    country: '',
  },
  cc: '',
};
