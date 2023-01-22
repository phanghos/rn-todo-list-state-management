import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RootStackScreenProps } from '@app/navigation/types';
import { createTaskObject } from '@app/domains/task/utils';
import { TaskListContext } from '@components/TaskListContextProvider/TaskListContextProvider';
import StatusFilter from '@components/StatusFilter/StatusFilter';
import { Task } from '@app/domains/task/types';

type ScreenProps = RootStackScreenProps<'NEW_TASK_SCREEN'>;

const NewTaskScreen = () => {
  const { params: { task } = {} } = useRoute<ScreenProps['route']>();
  const [title, setTitle] = useState(task?.title ?? '');
  const [status, setStatus] = useState<Task['status']>(task?.status || 'todo');
  const { addTask, editTask } = useContext(TaskListContext);
  const { goBack } = useNavigation();

  const addTaskCallback = () => {
    if (!!title) {
      task
        ? editTask({ ...task, title, status })
        : addTask(createTaskObject({ title }));
    }
    goBack();
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
      <TouchableOpacity
        style={StyleSheet.absoluteFill}
        onPress={addTaskCallback}
      />
      <TextInput
        value={title}
        placeholder="Type your task here..."
        mode="outlined"
        onChangeText={setTitle}
        autoFocus
      />
      {!!task && (
        <StatusFilter
          status={status}
          onValueChange={setStatus as (value: string) => void}
          style={{ marginTop: 36 }}
        />
      )}
    </View>
  );
};

export default NewTaskScreen;
