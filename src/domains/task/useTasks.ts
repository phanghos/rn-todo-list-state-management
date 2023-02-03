import { useRecoilValue } from 'recoil';

import { selectFilteredTasks } from './selectors';

const useTasks = () => useRecoilValue(selectFilteredTasks);

export default useTasks;
