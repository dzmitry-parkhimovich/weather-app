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

declare interface ITodayWeatherParams {
  zip: string
  units?: 'standart' | 'metric' | 'imperial'
  lang?: string
}