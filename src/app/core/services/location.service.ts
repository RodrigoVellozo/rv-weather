import { Injectable } from '@angular/core';
import { Geolocation, PositionOptions } from '@capacitor/geolocation';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { map } from 'rxjs';

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

  async getCurrentLoaction(){
    try {
      const permitionStatus = await Geolocation.checkPermissions();
      if (permitionStatus.location != 'granted') {
        const requestStatus = await Geolocation.requestPermissions();
        if(requestStatus.location != 'granted' ) {
          // go to location settings
          return;
        }
      }
      let options: PositionOptions = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 3000
      };
      const position = await Geolocation.getCurrentPosition(options); 
      return `${position.coords.latitude},${position.coords.longitude}`;

    } catch (error) {
      console.log('deu ruim: ',error);
      throw(error)
    }
    
  }
}
