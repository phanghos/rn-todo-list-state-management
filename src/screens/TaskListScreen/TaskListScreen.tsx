import React, { useContext } from 'react';
import TaskList from '@components/TaskList/TaskList';
import { TaskListContext } from '@components/TaskListContextProvider/TaskListContextProvider';

const TaskListScreen = () => {
  const { tasks } = useContext(TaskListContext);

  return <TaskList tasks={tasks} />;
};

export default TaskListScreen;
