import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import { useTheme } from 'react-native-paper';

import type { Task } from '@app/domains/task/types';

type TaskProps = {
  task: Task;
  onPress: (task: Task) => void;
} & Pick<ViewProps, 'style'>;

const TaskView = ({ task, onPress, style }: TaskProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={() => onPress(task)} style={style}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{task.title}</Text>
        {task.status === 'done' && (
          <Text style={[styles.done, { color: colors.primary }]}>Done</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TaskView;

const styles = StyleSheet.create({
  titleContainer: { flexDirection: 'row', alignItems: 'center' },
  title: { flex: 1, fontSize: 16, fontWeight: '500' },
  done: { fontSize: 12, fontWeight: '500' },
});
