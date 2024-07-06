import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {
  tap
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { RealtimeWeather } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private _http: HttpClient,
  ) {}

  public fetchTimelinesData(coordinates?: any) {
    let params = `location=${localStorage.getItem('position')}`;
    params += `&timesteps=1h`;
    params += `&units=metric`;
    params += `&endTime=${moment().add(1, 'hours').toISOString()}`;
    params += `&fields=windDirection&fields=humidity&fields=temperature&fields=temperatureApparent&fields=windSpeed&fields=uvIndex`;
    params += `&apikey=${environment.apiKey}`;

    return this._http.get<any>(`${environment.baseUrl}/timelines?${params}`).pipe(
      tap(res=>console.log('foi mesmo:', res))
    );
  }

  public realtimeWeather (){
    // https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=hRie3U91ibFYyJIZHZ7gWzqsGkBqhUKV', options)
    let params = `location=${localStorage.getItem('position')}`;
    params += `&apikey=${environment.apiKey}`
    
    return this._http.get<RealtimeWeather>(`${environment.baseUrl}/weather/realtime?${params}`);
  } 
}
