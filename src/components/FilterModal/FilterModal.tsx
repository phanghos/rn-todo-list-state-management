import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from 'react-native-paper';

import useTasksActions from '@app/domains/task/useTaskActions';
import StatusFilter from '@components/StatusFilter/StatusFilter';

import type { Task } from '@app/domains/task/types';

type FilterModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

const FilterModal = ({ isVisible, onClose }: FilterModalProps) => {
  const { changeFilter } = useTasksActions();
  const [status, setStatus] = useState<Task['status']>('todo');

  const performActionAndClose = (fn: () => void) => {
    fn();
    onClose();
  };

  const onApplyFilterPress = () =>
    performActionAndClose(() => changeFilter(status));

  const onResetPress = () =>
    performActionAndClose(() => changeFilter(undefined));

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.container}>
        <StatusFilter
          status={status}
          onValueChange={setStatus as (value: string) => void}
          style={styles.filter}
        />

        <Button mode="contained" onPress={onApplyFilterPress}>
          Apply Filter
        </Button>
        <Button onPress={onResetPress}>Reset</Button>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  filter: { marginTop: 8, marginBottom: 48 },
});
