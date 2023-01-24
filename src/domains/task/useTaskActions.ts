import { useContext } from 'react';

import { TaskListContext } from '@components/TaskListContextProvider/TaskListContextProvider';

const useTasksActions = () => useContext(TaskListContext);

export default useTasksActions;
