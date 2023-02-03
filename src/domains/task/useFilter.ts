import { useAtom } from 'jotai';

import { filterAtom } from '@app/domains/task/atoms';

const useFilter = () => useAtom(filterAtom)[0];

export default useFilter;
