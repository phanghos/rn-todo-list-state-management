import React from 'react';

import useTasks from '@app/domains/task/useTasks';
import TaskList from '@components/TaskList/TaskList';

const TaskListScreen = () => {
  const tasks = useTasks();

  return <TaskList tasks={tasks} />;
};

export default TaskListScreen;
