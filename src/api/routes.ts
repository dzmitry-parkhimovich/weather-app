import { apiUrl } from './utils';

export const fetchTodayWeatherUrl = (params: ITodayWeatherParams): string => (
  apiUrl('weather', params)
)

export const fetchForecastWeatherUrl = (params: IForeCastWeatherParams): string => (
  apiUrl('onecall', params)
)