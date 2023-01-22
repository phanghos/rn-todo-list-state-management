import React, { useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { Task } from '@app/domains/task/types';
import TaskView from '@components/TaskView/TaskView';
import Screens from '@app/navigation/screens';
import EmptyList from './EmptyList';

type TaskListProps = {
  tasks: Task[];
};

type SwipeDirection = 'up' | 'down';

const SWIPE_THRESHOLD = 100;

const SWIPE_DIRECTION: SwipeDirection = 'down';

const TaskList = ({ tasks }: TaskListProps) => {
  const { navigate } = useNavigation();
  const posYRef = useRef(0);

  const onTaskPress = (task: Task) => navigate(Screens.NewTask, { task });

  return !!tasks.length ? (
    <ScrollView
      bounces={false}
      style={styles.container}
      onTouchStart={({ nativeEvent }) => {
        posYRef.current = nativeEvent.pageY;
      }}
      onTouchEnd={({ nativeEvent }) => {
        const current = nativeEvent.pageY;
        const diff = Math.abs(current - posYRef.current);

        if (
          (diff > SWIPE_THRESHOLD &&
            SWIPE_DIRECTION === 'down' &&
            current > posYRef.current) ||
          (SWIPE_DIRECTION === 'up' && current < posYRef.current)
        ) {
          navigate(Screens.NewTask);
        }
      }}>
      {tasks.map(task => (
        <TaskView key={task.id} onPress={onTaskPress} task={task} />
      ))}
    </ScrollView>
  ) : (
    <EmptyList />
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 16 },
});
