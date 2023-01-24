import { useContext } from 'react';

import { TaskListContext } from '@components/TaskListContextProvider/TaskListContextProvider';

const useTasks = () => {
  const { tasks } = useContext(TaskListContext);

  return tasks;
};

export default useTasks;
