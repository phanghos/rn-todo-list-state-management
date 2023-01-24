import { RootState } from '@app/store';
import { createSelector } from '@reduxjs/toolkit';

import { filterByStatus } from './utils';

const tasksState = (state: RootState) => state.tasks;

const selectTasks = createSelector(tasksState, ({ tasks }) => tasks);

const selectFilter = createSelector(tasksState, ({ filter }) => filter);

export const selectFilteredTasks = createSelector(
  selectTasks,
  selectFilter,
  (tasks, filter) => (filter ? tasks.filter(filterByStatus(filter)) : tasks),
);
