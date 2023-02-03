import { atom } from 'jotai';

import { filterAtom, tasksAtom } from './atoms';
import { Task } from './types';
import { filterByStatus } from './utils';

export const selectFilteredTasks = atom(
  get => {
    const filter = get(filterAtom);
    const list = get(tasksAtom);
    return filter ? list.filter(filterByStatus(filter)) : list;
  },
  (_get, set, tasks: Task[]) => set(tasksAtom, tasks),
);
