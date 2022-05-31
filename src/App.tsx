import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Header } from './components/header';

import './App.scss';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
      </div>
    </QueryClientProvider>
  );
}

export default App;
