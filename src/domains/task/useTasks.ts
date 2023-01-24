import { useSelector } from 'react-redux';

import { selectFilteredTasks } from './selectors';

const useTasks = () => useSelector(selectFilteredTasks);

export default useTasks;
