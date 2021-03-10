import { apiUrl } from './utils';

export const fetchTodayWeatherUrl = (params: ITodayWeatherParams): string => (
  apiUrl('weather', params)
)