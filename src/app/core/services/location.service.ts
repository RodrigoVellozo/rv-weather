import { Injectable } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { map, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private readonly _geolocation$: GeolocationService) {}

  getPosition() {
    return  this._geolocation$.pipe(map((value) =>{
      let {latitude, longitude} = value.coords;
      return `${latitude},${longitude}`;
    } ));
  }
}
