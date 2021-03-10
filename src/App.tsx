import React from 'react';

import { PageContainer, PageContent, PageLoader } from 'components';
import { SearchBar, TodayWeatherCard } from 'widgets';
import { useWeatherData } from 'hooks';

const App: React.FC = () => {
  const { todayWeather, loading, onSubmit } = useWeatherData();

  return (
    <PageContainer>
      <SearchBar onSubmit={onSubmit} />
      <PageContent>
        {loading && <PageLoader>Loading...</PageLoader>}
        {todayWeather && !loading && (
          <React.Fragment>
            <TodayWeatherCard weather={todayWeather} />
          </React.Fragment>
        )}
      </PageContent>
    </PageContainer>
  );
}

export default App;
