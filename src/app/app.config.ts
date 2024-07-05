import { provideRouter } from '@angular/router';
import { withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig = [
  provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
  provideHttpClient()
];
