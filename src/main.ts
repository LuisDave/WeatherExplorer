import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { CurrentWeatherComponent } from './app/current-weather/current-weather.component';
import { ForecastComponent } from './app/forecast/forecast.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'current-weather/Pachuca', pathMatch: 'full' },
  { path: 'current-weather/:city', component: CurrentWeatherComponent },
  { path: 'forecast/:city', component: ForecastComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));
