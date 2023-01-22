/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation';

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
