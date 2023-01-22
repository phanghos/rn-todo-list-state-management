import React from 'react';
import { Text, View } from 'react-native';
import type { Task } from '@app/domains/task/types';

type TaskProps = {
  task: Omit<Task, 'id'>;
};

const TaskView = ({ task }: TaskProps) => (
  <View>
    <Text style={{ fontSize: 16, fontWeight: '500' }}>{task.title}</Text>
    <Text style={{ marginTop: 8 }}>{task.description}</Text>
  </View>
);

export default TaskView;
