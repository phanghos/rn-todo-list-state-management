import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screens from '@app/navigation/screens';

const EmptyList = () => {
  const { navigate } = useNavigation();

  const goToNewTaskScreen = () => navigate(Screens.NewTask);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 8 }}>
        No pending tasks
      </Text>
      <TouchableOpacity onPress={goToNewTaskScreen}>
        <Text>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyList;
