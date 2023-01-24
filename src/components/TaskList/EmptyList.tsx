import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import useTasksActions from '@app/domains/task/useTaskActions';
import Screens from '@app/navigation/screens';
import { useNavigation } from '@react-navigation/native';

type EmptyListProps = {
  message?: string;
};

const EmptyList = ({ message = 'No pending tasks' }: EmptyListProps) => {
  const { navigate } = useNavigation();
  const { changeFilter } = useTasksActions();

  const resetFilterAndNavigate = () => {
    changeFilter(undefined);
    navigate(Screens.NewTask);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Button onPress={resetFilterAndNavigate}>Add Task</Button>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  message: { fontSize: 16, fontWeight: '500', marginBottom: 8 },
});
