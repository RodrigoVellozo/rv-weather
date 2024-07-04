import { Injectable } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private readonly _geolocation$: GeolocationService) {}

  getPosition() {
    return  this._geolocation$.pipe(map((value) => value.coords));
  }
}
