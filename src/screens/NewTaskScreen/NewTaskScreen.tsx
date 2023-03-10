import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import useTasksActions from '@app/domains/task/useTaskActions';
import { createTaskObject } from '@app/domains/task/utils';
import StatusFilter from '@components/StatusFilter/StatusFilter';
import { useNavigation, useRoute } from '@react-navigation/native';

import type { Task } from '@app/domains/task/types';
import type { RootStackScreenProps } from '@app/navigation/types';

type ScreenProps = RootStackScreenProps<'NEW_TASK_SCREEN'>;

const NewTaskScreen = () => {
  const { params: { task } = {} } = useRoute<ScreenProps['route']>();
  const [title, setTitle] = useState(task?.title ?? '');
  const [status, setStatus] = useState<Task['status']>(task?.status || 'todo');
  const { addTask, editTask } = useTasksActions();
  const { goBack } = useNavigation();

  const addTaskCallback = () => {
    if (title.trim()) {
      task
        ? editTask({ ...task, title, status })
        : addTask(createTaskObject({ title }));
    }
    goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={StyleSheet.absoluteFill}
        onPress={addTaskCallback}
      />
      <TextInput
        value={title}
        placeholder="I want to..."
        mode="outlined"
        onChangeText={setTitle}
        autoFocus
      />
      {!!task && (
        <StatusFilter
          status={status}
          onValueChange={setStatus as (value: string) => void}
          style={styles.statusFilter}
        />
      )}
    </View>
  );
};

export default NewTaskScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: 'white' },
  statusFilter: { marginTop: 36 },
});
