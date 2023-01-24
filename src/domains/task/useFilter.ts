import useStore from '@app/store';

const useFilter = () => useStore(state => state.filter);

export default useFilter;
