import {
  ChildFieldContext,
  FieldTree,
  ItemFieldContext,
  PathKind,
  RootFieldContext,
  SchemaPath,
  SchemaPathRules,
} from '@angular/forms/signals';

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

export type MarkAs = 'touched' | 'dirty';

export type Field = FieldTree<UserFormModel, string | number, 'writable'>;

export type CTX = ItemFieldContext<string> | ChildFieldContext<string> | RootFieldContext<string>;

export type FieldPath = SchemaPath<string, any, any>;
