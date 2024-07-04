import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private _http: HttpClient,
    private _locationService: LocationService
  ) {}

  public fetchTimelinesData(coordinates?: any) {
    let params = `location=${coordinates}`;
    params += `&timesteps=1h`;
    params += `&units=metric`;
    // params += `&startTime=${new Date().toDateString()}`;
    params += `&endTime=${moment().add(2, 'hours').toISOString()}`;
    params += `&fields=windDirection&fields=humidity&fields=temperature&fields=temperatureApparent&fields=windSpeed&fields=uvIndex`;
    params += `&apikey=${environment.apiKey}`;

    return this._http
      .get<any>(`${environment.baseUrl}/timelines?${params}`)
      .pipe(map((res) => res.data.timelines[0].intervals));
  }

  public fetchForecastData(coordinates?: any) {
    let params = `location=${coordinates}`;
    params += `&apikey=${environment.apiKey}`;
    
    return this._http
      .get<any>(`${environment.baseUrl}/weather/forecast?${params}`)
      .pipe(map((res) => res.data));
  }
}
