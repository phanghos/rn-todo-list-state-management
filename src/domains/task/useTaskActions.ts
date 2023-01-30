import useWithDispatch from '@app/hooks/useWithDispatch';

import { addTask, changeFilter, editTask } from './slice';

const useTasksActions = () => ({
  addTask: useWithDispatch(addTask),
  editTask: useWithDispatch(editTask),
  changeFilter: useWithDispatch(changeFilter),
});
export default useTasksActions;
