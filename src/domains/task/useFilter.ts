import { useRecoilValue } from 'recoil';

import { filterAtom } from '@app/domains/task/atoms';

const useFilter = () => useRecoilValue(filterAtom);

export default useFilter;
