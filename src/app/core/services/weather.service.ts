import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { RealtimeWeather } from '../models/weather.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _http: HttpClient) {}

  public realtimeWeather() {
    let params = `location=${localStorage.getItem('coords')}`;
    params += `&apikey=${environment.apiKey}`;
    return this._http.get<RealtimeWeather>(
      `${environment.baseUrl}/weather/realtime?${params}`
    );
  }

  public fetchTimelinesWeekData(coordinates?: any) {
    let params = `location=${localStorage.getItem('coords')}`;
    params += `&timesteps=1d`;
    params += `&units=metric`;
    params += `&endTime=${moment().add(5, 'day').toISOString()}`;
    params += `&fields=weatherCode&fields=humidity&fields=temperatureMax&fields=temperatureMin`;
    params += `&apikey=${environment.apiKey}`;
    return this._http.get<any>(`${environment.baseUrl}/timelines?${params}`).pipe(
      map(res =>
        res.data.timelines[0].intervals
      )
    );
  }

  public fetchTimelinesData(coordinates?: any) {
    let params = `location=${localStorage.getItem('coords')}`;
    params += `&timesteps=1h`;
    params += `&units=metric`;
    params += `&endTime=${moment().add(1, 'day').toISOString()}`;
    params += `&fields=windDirection&fields=humidity&fields=temperature&fields=temperatureApparent&fields=windSpeed&fields=uvIndex`;
    params += `&apikey=${environment.apiKey}`;
    return this._http.get<any>(`${environment.baseUrl}/timelines?${params}`);
  }
}
