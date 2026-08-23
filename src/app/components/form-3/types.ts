export interface Address {
  street: string;
  city: string;
  postcode: string;
  country: string;
}

export interface UserFormModel {
  firstName: string;
  lastName: string;
  address: Address;
  cc: string;
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  address: Address;
}
