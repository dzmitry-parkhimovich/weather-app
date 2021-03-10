import { fetchTodayWeatherUrl } from './routes';

export default async function fetchTodayWeather(params: ITodayWeatherParams): Promise<IWeatherData> {
  return fetch(fetchTodayWeatherUrl(params))
    .then(data => data.json())
    .catch(error => error)
}
