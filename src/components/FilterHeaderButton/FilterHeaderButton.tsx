import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';

import FilterModal from '@components/FilterModal/FilterModal';
import { selectFilteredTasks } from '@app/domains/task/selectors';

const FilterHeaderButton = () => {
  const tasks = useSelector(selectFilteredTasks);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const openModal = () => setIsFilterModalVisible(true);

  const closeModal = () => setIsFilterModalVisible(false);

  if (!tasks.length) return null;

  return (
    <>
      <Button onPress={openModal}>Filter</Button>
      <FilterModal isVisible={isFilterModalVisible} onClose={closeModal} />
    </>
  );
};

export default FilterHeaderButton;
