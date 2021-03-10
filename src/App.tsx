import React from 'react';

import { PageContainer, PageContent, PageLoader, PageTitle } from 'components';
import { SearchBar, TodayWeatherCard, WeekWeatherCard } from 'widgets';
import { useWeatherData } from 'hooks';

const App: React.FC = () => {
  const { todayWeather, forecastWeather, loading, onSubmit } = useWeatherData();

  return (
    <PageContainer>
      <SearchBar onSubmit={onSubmit} />
      <PageContent>
        {loading && <PageLoader>Loading...</PageLoader>}
        {todayWeather && forecastWeather && !loading && (
          <React.Fragment>
            <TodayWeatherCard weather={todayWeather} />
            <PageTitle>FORECAST WEATHER</PageTitle>
            {forecastWeather.daily.map(weather => (
              <WeekWeatherCard
                key={weather.dt}
                weather={weather}
              />
            ))}
          </React.Fragment>
        )}
      </PageContent>
    </PageContainer>
  );
}

export default App;
