import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { createTaskObject } from '@app/domains/task/utils';

const NewTaskScreen = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const addTask = () => {
    const newTask = createTaskObject({ title: taskTitle });
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
      <TouchableOpacity style={StyleSheet.absoluteFill} onPress={addTask} />
      <TextInput
        value={taskTitle}
        placeholder="Type your task here..."
        onChangeText={setTaskTitle}
        autoFocus
      />
    </View>
  );
};

export default NewTaskScreen;
