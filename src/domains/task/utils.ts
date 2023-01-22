import ShortUniqueId from 'short-unique-id';
import type { Task } from '@app/domains/task/types';

const id = new ShortUniqueId();

export const createTaskObject = (task: Omit<Task, 'id' | 'status'>): Task => ({
  ...task,
  id: id(),
  status: 'todo',
});
