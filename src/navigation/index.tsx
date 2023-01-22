import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListScreen from '@app/screens/TaskListScreen/TaskListScreen';
import NewTaskScreen from '@app/screens/NewTaskScreen/NewTaskScreen';
import FilterHeaderButton from '@components/FilterHeaderButton/FilterHeaderButton';
import type { RootStackParamList } from './types';
import Screens from './screens';

const AppStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppStack.Navigator>
        <AppStack.Screen
          name={Screens.TaskList}
          component={TaskListScreen}
          options={{
            headerTitle: '',
            headerRight: FilterHeaderButton,
          }}
        />
        <AppStack.Screen
          name={Screens.NewTask}
          component={NewTaskScreen}
          options={{
            headerTitle: '',
            headerShadowVisible: false,
            headerTintColor: colors.primary,
          }}
        />
      </AppStack.Navigator>
    </SafeAreaView>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
});
