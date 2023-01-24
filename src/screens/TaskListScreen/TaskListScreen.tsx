import React from 'react';

import { useSelector } from 'react-redux';

import TaskList from '@components/TaskList/TaskList';
import { selectFilteredTasks } from '@app/domains/task/selectors';

const TaskListScreen = () => {
  const tasks = useSelector(selectFilteredTasks);

  return <TaskList tasks={tasks} />;
};

export default TaskListScreen;
