import React from 'react';

import { kelvinToCelsius, unixToDate } from 'utils';
import * as Weather from './components';

interface IProps {
  weather: IWeatherData
}

const TodayWeatherCard: React.FC<IProps> = ({ weather }) => (
  <Weather.Container>
    <Weather.Header>
      <Weather.CityName>{weather.name}</Weather.CityName>
      <Weather.CurrentTemp>
        {kelvinToCelsius(weather.main.temp)}°
      </Weather.CurrentTemp>
      <Weather.TempWrapper>
        <Weather.SecondaryTemp>
          H:{kelvinToCelsius(weather.main.temp_max)}°
        </Weather.SecondaryTemp>
        <Weather.SecondaryTemp>
          L:{kelvinToCelsius(weather.main.temp_min)}°
        </Weather.SecondaryTemp>
      </Weather.TempWrapper>
    </Weather.Header>
    <Weather.Line>
      <Weather.Group label='SUNRISE'>
        {unixToDate(weather.sys.sunrise).toLocaleTimeString()}
      </Weather.Group>
      <Weather.Group label='SUNSET'>
        {unixToDate(weather.sys.sunset).toLocaleTimeString()}
      </Weather.Group>
    </Weather.Line>
    <Weather.Line>
      <Weather.Group label='FEELS LIKE'>
        {kelvinToCelsius(weather.main.feels_like)}°
      </Weather.Group>
      <Weather.Group label='HUMIDITY'>
        {weather.main.humidity}%
      </Weather.Group>
    </Weather.Line>
    <Weather.Line>
      <Weather.Group label='PRESSURE'>
        {weather.main.pressure} hPa
      </Weather.Group>
      <Weather.Group label='WIND SPEED'>
        {weather.wind.speed} meter/sec
      </Weather.Group>
    </Weather.Line>
  </Weather.Container>
)

export default TodayWeatherCard;