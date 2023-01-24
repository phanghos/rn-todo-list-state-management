import React from 'react';

import useFilter from '@app/domains/task/useFilter';
import useTasks from '@app/domains/task/useTasks';
import TaskList from '@components/TaskList/TaskList';

const TaskListScreen = () => {
  const tasks = useTasks();
  const filter = useFilter();

  return <TaskList {...{ tasks, filter }} />;
};

export default TaskListScreen;
