import { create } from 'zustand';

import { Task } from '@app/domains/task/types';
import { filterByStatus, updateTaskObject } from '@app/domains/task/utils';

type TaskAction = (task: Task) => void;

type StoreState = {
  tasks: Task[];
  filter: Task['status'] | undefined;
  addTask: TaskAction;
  editTask: TaskAction;
  changeFilter: (filter: Task['status'] | undefined) => void;
};

const useStore = create<StoreState>(set => ({
  tasks: [],
  filter: undefined,
  addTask: task => set(state => ({ ...state, tasks: [...state.tasks, task] })),
  editTask: task =>
    set(state => ({ ...state, tasks: updateTaskObject(task)(state.tasks) })),
  changeFilter: filter => set(state => ({ ...state, filter })),
}));

export default useStore;

export const selectFilteredTasks = ({ filter, tasks }: StoreState) =>
  filter ? tasks.filter(filterByStatus(filter)) : tasks;
