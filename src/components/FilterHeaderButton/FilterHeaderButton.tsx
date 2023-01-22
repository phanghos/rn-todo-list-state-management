import React, { useContext, useState } from 'react';
import { Button } from 'react-native-paper';
import FilterModal from '@components/FilterModal/FilterModal';
import { TaskListContext } from '@components/TaskListContextProvider/TaskListContextProvider';

const FilterHeaderButton = () => {
  const { tasks } = useContext(TaskListContext);
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
