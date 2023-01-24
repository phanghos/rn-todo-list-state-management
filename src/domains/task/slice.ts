import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { updateTaskObject } from './utils';

import type { Task } from './types';

const initialState = {
  tasks: [] as Task[],
  filter: undefined as Task['status'] | undefined,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<Task>) => {
      state.tasks.push(payload);
    },
    editTask: (state, { payload }: PayloadAction<Task>) => {
      state.tasks = updateTaskObject(payload)(state.tasks);
    },
    changeFilter: (
      state,
      { payload }: PayloadAction<Task['status'] | undefined>,
    ) => {
      state.filter = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, editTask, changeFilter } = taskSlice.actions;

export default taskSlice.reducer;
