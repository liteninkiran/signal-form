import { required, pattern, validateHttp, SchemaPath } from '@angular/forms/signals';
import { HttpErrorResponse } from '@angular/common/http';
import { CTX } from './types';
import { postcodePattern } from './data';

const request = (ctx: CTX) => {
  const postcode = ctx.value()?.trim().replace(/\s+/g, '');

  if (!postcode) {
    return undefined;
  }

  return `https://api.postcodes.io/postcodes/${postcode}`;
};

const onError = (err: unknown) => {
  if (err instanceof HttpErrorResponse && err.status === 404) {
    return {
      kind: 'invalidPostcode',
      message: 'Postcode is not valid',
    };
  }

  return {
    kind: 'postcodeValidationFailed',
    message: 'Could not validate postcode.',
  };
};

const options = {
  request,
  onSuccess: () => undefined,
  onError,
  debounce: 300,
};

/**
 * Registers UK postcode validation rules on the specified postcode path.
 */
export function validatePostcode(field: SchemaPath<string, any, any>): void {
  required(field, { message: 'Postcode is required' });
  pattern(field, postcodePattern, { message: 'Please enter a valid UK postcode' });
  validateHttp(field, options);
}
