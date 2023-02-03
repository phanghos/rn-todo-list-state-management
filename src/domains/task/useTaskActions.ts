import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { filterAtom } from './atoms';
import { selectFilteredTasks } from './selectors';
import { Task } from './types';
import { updateTaskObject } from './utils';

const useTasksActions = () => {
  const [tasks, setTasks] = useRecoilState(selectFilteredTasks);
  const changeFilter = useSetRecoilState(filterAtom);

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
