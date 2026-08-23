import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideSignalFormsConfig } from '@angular/forms/signals';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideSignalFormsConfig({
      classes: {
        'ng-invalid': (field) => field.state().invalid(),
        'ng-valid': (field) => field.state().valid() && field.state().required(),
        'ng-dirty': (field) => field.state().dirty(),
      },
    }),
  ],
};
