export interface Address {
  street: string;
  city: string;
  postcode: string;
}

export interface UserFormModel {
  firstName: string;
  lastName: string;
  address: Address;
  cc: string;
}
