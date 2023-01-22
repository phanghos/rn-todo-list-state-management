import React from 'react';
import { ViewProps } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { Task } from '@app/domains/task/types';

type StatusFilterProps = Pick<Task, 'status'> &
  Pick<ViewProps, 'style'> & {
    onValueChange: (value: string) => void;
  };

const StatusFilter = ({ status, onValueChange, style }: StatusFilterProps) => (
  <SegmentedButtons
    value={status}
    onValueChange={onValueChange}
    buttons={[
      {
        value: 'todo',
        label: 'Todo',
      },
      {
        value: 'done',
        label: 'Done',
      },
    ]}
    style={style}
  />
);

export default StatusFilter;
