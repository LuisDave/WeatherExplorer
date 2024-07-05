import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OpenWeatherMapService } from '../services/openweathermap.service';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  currentWeather: any;
  city: string = 'Pachuca';

  constructor(
    private weatherService: OpenWeatherMapService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.city = params['city'] || 'Pachuca';
      this.getCurrentWeather();
    });
  }

  getCurrentWeather(): void {
    this.weatherService.getCurrentWeather(this.city).subscribe(data => {
      this.currentWeather = data;
    });
  }

  goToForecast(): void {
    this.router.navigate(['/forecast', this.city]);
  }
}