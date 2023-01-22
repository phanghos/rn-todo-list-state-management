/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import TaskListContextProvider from '@components/TaskListContextProvider/TaskListContextProvider';
import AppNavigator from './navigation';
import theme from './theme';

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <TaskListContextProvider>
        <PaperProvider theme={theme}>
          <AppNavigator />
        </PaperProvider>
      </TaskListContextProvider>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
