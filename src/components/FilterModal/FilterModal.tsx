import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { changeFilter } from '@app/domains/task/slice';
import StatusFilter from '@components/StatusFilter/StatusFilter';

import type { Task } from '@app/domains/task/types';

type FilterModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

const FilterModal = ({ isVisible, onClose }: FilterModalProps) => {
  const [status, setStatus] = useState<Task['status']>('todo');
  const dispatch = useDispatch();

  const performActionAndClose = (fn: () => void) => {
    fn();
    onClose();
  };

  const onApplyFilterPress = () =>
    performActionAndClose(() => dispatch(changeFilter(status)));

  const onResetPress = () =>
    performActionAndClose(() => dispatch(changeFilter(undefined)));

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
