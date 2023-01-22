type TaskStatus = 'todo' | 'done';

export type Task = {
  readonly id: string;
  title: string;
  status: TaskStatus;
};
