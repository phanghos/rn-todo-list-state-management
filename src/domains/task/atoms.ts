import { atom } from 'recoil';

import { Task } from './types';

export const tasksAtom = atom<Task[]>({
  key: 'tasks',
  default: [],
});

export const filterAtom = atom<Task['status'] | undefined>({
  key: 'filter',
  default: undefined,
});
