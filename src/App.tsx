import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Forms } from './components/forms';
import { Header } from './components/header';

import './App.scss';
import OcurrencesList from './components/ocurrences-list';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <div className="App--content">
          <OcurrencesList />
          <Forms />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
