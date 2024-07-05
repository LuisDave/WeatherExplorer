import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OpenWeatherMapService } from '../services/openweathermap.service';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecast: any = { list: [] };
  city: string = 'Pachuca';

  constructor(
    private weatherService: OpenWeatherMapService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.city = params['city'] || 'Pachuca';
      this.getForecast();
    });
  }

  getForecast(): void {
    this.weatherService.getForecast(this.city).subscribe(data => {
      this.forecast = data;
    });
  }
}