import { shallow } from 'zustand/shallow';

import useStore from '@app/store';

const useTasksActions = () =>
  useStore(
    ({ addTask, editTask, changeFilter }) => ({
      addTask,
      editTask,
      changeFilter,
    }),
    shallow,
  );

export default useTasksActions;
