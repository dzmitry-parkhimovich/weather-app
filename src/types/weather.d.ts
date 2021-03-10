declare interface ICoord {
  lon: number
  lat: number
}

declare interface IWeather {
  id: number
  main: string
  icon: string
  description: string
}

declare interface IClouds {
  all: number
}

declare interface IWind {
  speed: number
  deg: number
}

declare interface IMainWeather {
  feels_like: number
  humidity: number
  pressure: number
  temp: number
  temp_max: number
  temp_min: number
}

declare interface ISysData {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

declare interface IWeatherData {
  base: string
  clouds: IClouds
  cod: number
  coord: ICoord
  dt: number
  id: number
  main: IMainWeather
  name: string
  sys: ISysData
  visibility: number
  weather: IWeather[]
  wind: IWind
}

declare interface IDailyFeelsLike {
  day: number
  eve: number
  morn: number
  night: number
}

declare interface IDailyTemp {
  day: number
  eve: number
  max: number
  min: number
  morn: number
  night: number
}

declare interface IDailyCondition {
  id: number
  icon: string
  description: string
  main: string
}

declare interface IDailyWeather {
  clouds: number
  dew_point: number
  dt: number
  feels_like: IDailyFeelsLike
  humidity: number
  pop: number
  pressure: number
  sunrise: number
  sunset: number
  temp: IDailyTemp
  uvi: number
  weather: IDailyCondition[]
  wind_deg: number
  wind_speed: number
}

declare interface IForecastWeatherData {
  daily: IDailyWeather[]
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
}

declare interface IWeatherParams {
  units?: 'standart' | 'metric' | 'imperial'
  lang?: string
}

declare interface ITodayWeatherParams extends IWeatherParams {
  zip: string
}

declare interface IForeCastWeatherParams extends IWeatherParams {
  lat: number
  lon: number
  exclude?: string
}