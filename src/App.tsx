/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './navigation';
import store from './store';
import theme from './theme';

const App = () => (
  <GestureHandlerRootView style={styles.container}>
    <SafeAreaProvider>
      <NavigationContainer>
        <ReduxProvider store={store}>
          <PaperProvider theme={theme}>
            <AppNavigator />
          </PaperProvider>
        </ReduxProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

export default App;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
