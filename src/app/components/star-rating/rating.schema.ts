import { max, min, required, schema } from '@angular/forms/signals';

export const ratingSchema = schema<number | null>((rating) => {
  min(rating, 1, { message: 'Rating is required' });
  max(rating, 5, { message: 'Rating must be at most 5' });
});
