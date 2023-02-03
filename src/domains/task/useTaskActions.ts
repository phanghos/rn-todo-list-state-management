import { useAtom } from 'jotai';
import { useCallback } from 'react';

import { filterAtom } from './atoms';
import { selectFilteredTasks } from './selectors';
import { Task } from './types';
import { updateTaskObject } from './utils';

const useTasksActions = () => {
  const [tasks, setTasks] = useAtom(selectFilteredTasks);
  const [_, changeFilter] = useAtom(filterAtom);

  const addTask = useCallback(
    (task: Task) => setTasks([...tasks, task]),
    [tasks, setTasks],
  );

  const editTask = useCallback(
    (task: Task) => setTasks(updateTaskObject(task)(tasks)),
    [tasks, setTasks],
  );

  return {
    addTask,
    editTask,
    changeFilter,
  };
};

export default useTasksActions;
