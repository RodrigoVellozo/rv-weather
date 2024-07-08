import { RealtimeWeatherData } from "./realtimeWeatherData";
import { Location } from "./location.model";
export interface RealtimeWeather {
  data: RealtimeWeatherData;
  location: Location;
}
