import useTasks from '@app/domains/task/useTasks';
import React from 'react';

import TaskList from '@components/TaskList/TaskList';

const TaskListScreen = () => {
  const tasks = useTasks();

  return <TaskList tasks={tasks} />;
};

export default TaskListScreen;
