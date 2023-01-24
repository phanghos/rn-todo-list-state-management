import useStore, { selectFilteredTasks } from '@app/store';

const useTasks = () => useStore(selectFilteredTasks);

export default useTasks;
