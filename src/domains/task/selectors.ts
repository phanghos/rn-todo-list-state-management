import { DefaultValue, selector } from 'recoil';

import { filterAtom, tasksAtom } from './atoms';
import { Task } from './types';
import { filterByStatus } from './utils';

const isRecoilDefaultValue = (atom: unknown): atom is DefaultValue =>
  atom instanceof DefaultValue;

export const selectFilteredTasks = selector<Task[]>({
  key: 'filteredTasksSelector',
  get: ({ get }) => {
    const filter = get(filterAtom);
    const list = get(tasksAtom);
    return filter ? list.filter(filterByStatus(filter)) : list;
  },
  set: ({ set }, tasks) => {
    if (isRecoilDefaultValue(tasks)) return;
    set(tasksAtom, tasks);
  },
});
