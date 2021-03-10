import React from 'react';

import { PageContainer, PageContent, PageLoader } from 'components';
import { useWeatherData } from 'hooks';
import { SearchBar } from 'widgets';

const App: React.FC = () => {
  const { todayWeather, loading, onSubmit } = useWeatherData();

  return (
    <PageContainer>
      <SearchBar onSubmit={onSubmit} />
      <PageContent>
        {loading && <PageLoader>Loading...</PageLoader>}
        {todayWeather && !loading && (
          <div />
        )}
      </PageContent>
    </PageContainer>
  );
}

export default App;
