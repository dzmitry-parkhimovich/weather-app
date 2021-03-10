import React, { useMemo } from 'react';

import { unixToDate } from 'utils';
import * as Weather from './components';

interface IProps {
  weather: IDailyWeather
}

const WeekWeatherCard: React.FC<IProps> = ({ weather }) => {
  const weatherParams = useMemo(() => (
    weather.weather.map(({ main }) => main).join(', ')
  ), [weather])

  const weatherCondition = useMemo(() => (
    weather.weather.map(({ description }) => description).join(', ')
  ), [weather])

  return (
    <Weather.Container>
      <Weather.Header>
        <Weather.Date>{unixToDate(weather.dt).toLocaleDateString()}</Weather.Date>
        <Weather.Desc>{weatherParams}</Weather.Desc>
        <Weather.Desc>{weatherCondition}</Weather.Desc>
      </Weather.Header>
      <Weather.Section label='TEMPERATURE'>
        <Weather.Temp label='MORNING'>{weather.temp.morn}</Weather.Temp>
        <Weather.Temp label='DAY'>{weather.temp.day}</Weather.Temp>
        <Weather.Temp label='EVENING'>{weather.temp.eve}</Weather.Temp>
        <Weather.Temp label='NIGHT'>{weather.temp.night}</Weather.Temp>
      </Weather.Section>
      <Weather.Section label='FEELS LIKE'>
        <Weather.Temp label='MORNING'>{weather.feels_like.morn}</Weather.Temp>
        <Weather.Temp label='DAY'>{weather.feels_like.day}</Weather.Temp>
        <Weather.Temp label='EVENING'>{weather.feels_like.eve}</Weather.Temp>
        <Weather.Temp label='NIGHT'>{weather.feels_like.night}</Weather.Temp>
      </Weather.Section>
    </Weather.Container>
  )
}

export default WeekWeatherCard