import React, { useState } from 'react';
import { Button } from 'react-native-paper';

import useTasks from '@app/domains/task/useTasks';
import FilterModal from '@components/FilterModal/FilterModal';

const FilterHeaderButton = () => {
  const tasks = useTasks();
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
