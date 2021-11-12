import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/Model/weather.model';
import { WeatherService } from 'src/app/services/weather.service';
import { Consumer } from 'src/app/Model/consumer';
import { ConsumerService } from 'src/app/services/consumer.service';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  weatherDataList: WeatherData[] = [];
  energyRequestList: Consumer[] = [];
  onGoingTrade: Consumer[] = [];
  isPostEnergyVisisble = false;

  searchField: FormControl;
  energyRequestList$: Observable<Consumer[]> | undefined;

  private subs = new SubSink();

  constructor(
    private weatherservice: WeatherService,
    private consumerservice: ConsumerService
  ) {
    this.searchField = new FormControl('');
  }

  ngOnInit(): void {
    this.getWeatherData();
    this.subs.sink = this.consumerservice
      .getConsumerList()
      .subscribe((items) => (this.energyRequestList = items));
    this.subs.sink = this.consumerservice
      .getOnGoingTrade()
      .subscribe((items) => (this.onGoingTrade = items));

    const consumers$ = this.consumerservice.getConsumerList();

    const searchItem$ = this.searchField.valueChanges.pipe(
      startWith(this.searchField.value)
    );

    this.energyRequestList$ = combineLatest([consumers$, searchItem$]).pipe(
      map(([consumers, searchItem]) =>
        consumers.filter(
          (item) =>
            searchItem === '' ||
            item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
            item.kwh.toString().toLowerCase().includes(searchItem.toLowerCase())
        )
      )
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  showPostEnergy() {
    this.isPostEnergyVisisble = true;
  }
  hidePostEnergy() {
    this.isPostEnergyVisisble = false;
  }

  addConsumer(item: Consumer) {
    this.isPostEnergyVisisble = false;
    this.consumerservice
      .addConsumer(item)
      .subscribe((item) => this.energyRequestList.push(item));
  }

  toggleMove(item: Consumer) {
    item.isAvailable = !item.isAvailable;

    this.consumerservice
      .updateConsumer(item)
      .subscribe(
        (item) =>
          this.onGoingTrade.push(item) &&
          this.energyRequestList.splice(this.energyRequestList.indexOf(item), 1)
      );
  }

  deleteConsumer(item: Consumer) {
    this.consumerservice
      .deleteConsumer(item)
      .subscribe(
        () =>
          (this.onGoingTrade = this.onGoingTrade.filter(
            (i) => i.id !== item.id
          ))
      );
    this.energyRequestList$ = this.consumerservice.getConsumerList();
  }

  getWeatherData() {
    this.weatherservice.getWeatherData().then((values: any) => {
      for (let value of values['consolidated_weather']) {
        this.weatherDataList.push(WeatherDataAdapter(value));
      }
    });
  }
}
function WeatherDataAdapter(json: any): WeatherData {
  return {
    applicable_date: json.applicable_date,
    the_temp: json.the_temp.toFixed(0),
    min_temp: json.min_temp.toFixed(0),
    max_temp: json.max_temp.toFixed(0),
    weather_state_name: json.weather_state_name,
  };
}
