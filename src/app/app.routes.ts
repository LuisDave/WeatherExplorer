import { Routes } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastComponent } from './forecast/forecast.component';

export const appRoutes: Routes = [
  { path: '', component: CurrentWeatherComponent },
  { path: 'forecast/:city', component: ForecastComponent },
  { path: 'current-weather/:city', component: CurrentWeatherComponent }
];
