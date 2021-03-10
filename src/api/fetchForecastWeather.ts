import { fetchForecastWeatherUrl } from './routes';

export default async function fetchForecastWeather(params: IForeCastWeatherParams): Promise<IForecastWeatherData> {
  return fetch(fetchForecastWeatherUrl(params))
    .then(data => data.json())
    .catch(error => error)
}
