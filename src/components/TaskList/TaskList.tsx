import React from 'react';
import { ScrollView } from 'react-native';
import type { Task } from '@app/domains/task/types';
import TaskView from '@components/TaskView/TaskView';
import EmptyList from './EmptyList';

type TaskListProps = {
  tasks: Task[];
};

const TaskList = ({ tasks }: TaskListProps) =>
  !!tasks.length ? (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      {tasks.map(({ id, ...props }) => (
        <TaskView key={id} task={props} />
      ))}
    </ScrollView>
  ) : (
    <EmptyList />
  );

export default TaskList;
