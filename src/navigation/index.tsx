import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListScreen from '@app/screens/TaskListScreen/TaskListScreen';
import NewTaskScreen from '@app/screens/NewTaskScreen/NewTaskScreen';
import type { RootStackParamList } from './types';
import Screens from './screens';

const AppStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <AppStack.Navigator>
      <AppStack.Screen
        name={Screens.TaskList}
        component={TaskListScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name={Screens.NewTask}
        component={NewTaskScreen}
        options={{ headerTitle: '' }}
      />
    </AppStack.Navigator>
  </SafeAreaView>
);

export default AppNavigator;
