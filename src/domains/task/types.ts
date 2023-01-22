type TaskStatus = 'todo' | 'pending' | 'done';

export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  description?: string;
};
