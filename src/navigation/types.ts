import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { Task } from '@app/domains/task/types';

export type RootStackParamList = {
  TASK_LIST_SCREEN: undefined;
  NEW_TASK_SCREEN: { task: Task } | undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}
