import { useCallback, useState } from 'react';

import { fetchTodayWeather, fetchForecastWeather } from 'api';

interface IUseWeatherData {
  loading: boolean
  todayWeather?: IWeatherData
  forecastWeather?: IForecastWeatherData
  onSubmit: (zipCode: string) => void
}

const useWeatherData = (): IUseWeatherData => {
  const [loading, setLoading] = useState(false);
  const [todayWeather, setTodayWeather] = useState<IWeatherData>();
  const [forecastWeather, setForecastWeather] = useState<IForecastWeatherData>();

  const searchByZipCode = useCallback(async (zip: string) => {
    try {
      setLoading(true);
      setTodayWeather(undefined);
      const weather = await fetchTodayWeather({ zip });
      const forecast = await fetchForecastWeather({
        ...weather.coord,
        exclude: 'current,minutely,hourly,alerts',
      });
      setTodayWeather(weather);
      setForecastWeather(forecast);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [])

  const onSubmit = useCallback((zipCode: string) => {
    searchByZipCode(zipCode);
  }, [searchByZipCode])

  return {
    loading,
    todayWeather,
    forecastWeather,
    onSubmit,
  }
}

export default useWeatherData;