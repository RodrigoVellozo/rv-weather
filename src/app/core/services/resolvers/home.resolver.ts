import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { WeatherService } from '../weather.service';
import { LocationService } from '../location.service';
import { map, switchMap, tap } from 'rxjs';

export const homeResolver: ResolveFn<boolean> = (route, state) => {
  let locationService = inject(LocationService);
  let weatherService = inject(WeatherService);
  return true;
  return  locationService.getPosition().pipe(
    switchMap((position) => {
      return weatherService.fetchTimelinesData(`${position.latitude},${position.longitude}`);
    })
  );
};
