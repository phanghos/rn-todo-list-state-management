import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {
  Gesture,
  GestureDetector,
  NativeGesture,
  PanGesture,
} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { clamp } from 'react-native-redash';

import Screens from '@app/navigation/screens';
import TaskView from '@components/TaskView/TaskView';
import { useNavigation } from '@react-navigation/native';

import EmptyList from './EmptyList';

import type { Task } from '@app/domains/task/types';

type TaskListProps = {
  tasks: Task[];
  filter: Task['status'] | undefined;
};

const INITIAL_POS_Y_INPUT = -50;

const INITIAL_POS_Y_SCROLL = 0;

const DELAY_RESET_POSITION = 500;

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const TaskList = ({ tasks, filter }: TaskListProps) => {
  const { navigate } = useNavigation();
  const panRef = useRef<PanGesture>();
  const scrollRef = useRef<NativeGesture>();
  const inputSv = useSharedValue(INITIAL_POS_Y_INPUT);
  const scrollSv = useSharedValue(0);
  const [isPanEnabled, setIsPanEnabled] = useState(true);

  const onTaskPress = (task: Task) => navigate(Screens.NewTask, { task });

  const updatePanState = (offset: number) => {
    'worklet';
    if (offset > 0) {
      runOnJS(setIsPanEnabled)(false);
    } else if (offset === 0) {
      runOnJS(setIsPanEnabled)(true);
    }
  };

  const scrollPanGesture = Gesture.Pan()
    .onUpdate(({ translationY }) => {
      const clampedValue = clamp(translationY, 0, -INITIAL_POS_Y_INPUT);

      inputSv.value = interpolate(
        clampedValue,
        [0, -INITIAL_POS_Y_INPUT],
        [INITIAL_POS_Y_INPUT, 0],
      );
      scrollSv.value = clampedValue;
    })
    .onFinalize(({ translationY }) => {
      console.log(clamp(translationY, 0, -INITIAL_POS_Y_INPUT));

      if (translationY >= -INITIAL_POS_Y_INPUT) {
        runOnJS(navigate)(Screens.NewTask);
        inputSv.value = withDelay(
          DELAY_RESET_POSITION,
          withTiming(INITIAL_POS_Y_INPUT),
        );
        scrollSv.value = withDelay(DELAY_RESET_POSITION, withTiming(0));
      } else {
        inputSv.value = withTiming(INITIAL_POS_Y_INPUT);
        scrollSv.value = withTiming(INITIAL_POS_Y_SCROLL);
      }
    })
    .simultaneousWithExternalGesture(scrollRef)
    .withRef(panRef)
    .enabled(isPanEnabled);

  const onScroll = useAnimatedScrollHandler({
    onBeginDrag({ contentOffset }) {
      updatePanState(contentOffset.y);
    },
    onEndDrag({ contentOffset }) {
      updatePanState(contentOffset.y);
    },
    onMomentumEnd({ contentOffset }) {
      updatePanState(contentOffset.y);
    },
  });

  const inputAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: inputSv.value }],
  }));

  const scrollAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: clamp(scrollSv.value, 0, -INITIAL_POS_Y_INPUT) }],
  }));

  const nativeGesture = Gesture.Native()
    .simultaneousWithExternalGesture(panRef)
    .withRef(scrollRef);

  const composedGestures = Gesture.Simultaneous(
    scrollPanGesture,
    nativeGesture,
  );

  return !!tasks.length ? (
    <View style={styles.container}>
      <AnimatedTextInput
        placeholder="I want to..."
        style={[styles.textInput, inputAnimatedStyle]}
      />
      <GestureDetector gesture={composedGestures}>
        <Animated.ScrollView
          onScroll={onScroll}
          bounces={false}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          style={[styles.scrollView, scrollAnimatedStyle]}>
          {tasks.map(task => (
            <TaskView
              key={task.id}
              onPress={onTaskPress}
              task={task}
              style={styles.task}
            />
          ))}
        </Animated.ScrollView>
      </GestureDetector>
    </View>
  ) : (
    <EmptyList
      message={filter ? 'No matches for the filters applied' : undefined}
    />
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  scrollView: { flex: 1, backgroundColor: 'white', padding: 16 },
  textInput: {
    position: 'absolute',
    marginTop: 16,
    marginHorizontal: 16,
  },
  task: { marginBottom: 16 },
});
