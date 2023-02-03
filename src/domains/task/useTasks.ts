import { useAtom } from 'jotai';

import { selectFilteredTasks } from './selectors';

const useTasks = () => useAtom(selectFilteredTasks)[0];

export default useTasks;
