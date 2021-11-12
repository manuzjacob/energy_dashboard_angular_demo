import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/app/Model/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-widget-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  @Input()
  weatherData!: WeatherData;
  @Output() onToggleMove: EventEmitter<WeatherData> = new EventEmitter();
  percentage: any;
  constructor() {}

  ngOnInit(): void {
    this.setPercentage();
  }
  setPercentage() {
    if (this.weatherData.weather_state_name == 'Clear') this.percentage = 75;
    else if (this.weatherData.weather_state_name == 'Light Cloud')
      this.percentage = 40;
    else if (this.weatherData.weather_state_name == 'Heavy Cloud')
      this.percentage = 10;
    else if (this.weatherData.weather_state_name == 'Showers')
      this.percentage = 0;
  }
}
