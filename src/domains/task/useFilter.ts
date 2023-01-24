import { useContext } from 'react';

import { TaskListContext } from '@components/TaskListContextProvider/TaskListContextProvider';

const useFilter = () => {
  const { filter } = useContext(TaskListContext);

  return filter;
};

export default useFilter;
