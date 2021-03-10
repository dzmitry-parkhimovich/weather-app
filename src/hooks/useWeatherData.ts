import { useCallback, useState } from 'react'

interface IUseWeatherData {
  loading: boolean
  error?: Error
  todayWeather: any
  onSubmit: (zipCode: string) => void
}

const useWeatherData = (): IUseWeatherData => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [todayWeather, setTodayWeather] = useState();

  const searchByZipCode = useCallback(async (zipCode: string) => {
    try {
      setLoading(true)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const onSubmit = useCallback((zipCode: string) => {
    searchByZipCode(zipCode)
  }, [searchByZipCode])

  return {
    error,
    loading,
    todayWeather,
    onSubmit,
  }
}

export default useWeatherData;