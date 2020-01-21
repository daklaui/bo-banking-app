import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './src/route/AppNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </>
  );
};

export default App;
