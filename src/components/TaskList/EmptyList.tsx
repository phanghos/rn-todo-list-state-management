import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import Screens from '@app/navigation/screens';
import { useNavigation } from '@react-navigation/native';

const EmptyList = () => {
  const { navigate } = useNavigation();

  const goToNewTaskScreen = () => navigate(Screens.NewTask);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>No pending tasks</Text>
      <Button onPress={goToNewTaskScreen}>Add Task</Button>
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
