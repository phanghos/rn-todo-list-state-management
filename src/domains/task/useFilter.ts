import { useSelector } from 'react-redux';

import { selectFilter } from './selectors';

const useFilter = () => useSelector(selectFilter);

export default useFilter;
