import React, { createContext, useCallback, useMemo, useState } from 'react';
import { Task } from '@app/domains/task/types';
import { filterByStatus, updateTaskObject } from '@app/domains/task/utils';

type TaskListContextParams = {
  tasks: Task[];
  filter: Task['status'] | undefined;
  addTask: (task: Task) => void;
  editTask: (task: Task) => void;
  changeFilter: (filter: Task['status'] | undefined) => void;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const TaskListContext = createContext<TaskListContextParams>(undefined!);

type TaskListContextProviderProps = {
  children: React.ReactNode;
};

const TaskListContextProvider = ({
  children,
}: TaskListContextProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Task['status']>();

  const addTask = useCallback(
    (task: Task) => setTasks(currentTasks => [...currentTasks, task]),
    [],
  );

  const editTask = useCallback<TaskListContextParams['editTask']>(
    task => setTasks(updateTaskObject(task)),
    [],
  );

  const filteredTasks = useMemo(
    () => (filter ? tasks.filter(filterByStatus(filter)) : tasks),
    [tasks, filter],
  );

  const contextValue = useMemo(
    () => ({
      tasks: filteredTasks,
      filter,
      addTask,
      editTask,
      changeFilter: setFilter,
    }),
    [filteredTasks, filter, addTask, editTask],
  );

  return (
    <TaskListContext.Provider value={contextValue}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
