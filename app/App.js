import React from 'react';
import { NavigationContainer } from 'react-native';

import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

