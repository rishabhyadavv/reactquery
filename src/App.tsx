// src/App.tsx
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';
import { HomeScreen } from './screens/HomeScreen';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
};

export default App;
