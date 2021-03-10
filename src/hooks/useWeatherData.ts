import { useCallback, useState } from 'react';

import { fetchTodayWeather } from 'api';

interface IUseWeatherData {
  loading: boolean
  todayWeather: any
  onSubmit: (zipCode: string) => void
}

const useWeatherData = (): IUseWeatherData => {
  const [loading, setLoading] = useState(false);
  const [todayWeather, setTodayWeather] = useState<IWeatherData>();

  const searchByZipCode = useCallback(async (zip: string) => {
    try {
      setLoading(true)
      setTodayWeather(undefined)
      const weather = await fetchTodayWeather({ zip })
      console.log(weather)
      setTodayWeather(weather)
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const onSubmit = useCallback((zipCode: string) => {
    searchByZipCode(zipCode)
  }, [searchByZipCode])

  return {
    loading,
    todayWeather,
    onSubmit,
  }
}

export default useWeatherData;