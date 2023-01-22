import ShortUniqueId from 'short-unique-id';
import type { Task } from '@app/domains/task/types';

const id = new ShortUniqueId();

export const createTaskObject = (task: Omit<Task, 'id' | 'status'>): Task => ({
  ...task,
  id: id(),
  status: 'todo',
});

export const updateSingleTaskObject = (editedTask: Task) => (task: Task) =>
  editedTask.id === task.id ? { ...task, ...editedTask, id: task.id } : task;

export const updateTaskObject = (editedTask: Task) => (tasks: Task[]) =>
  tasks.map(updateSingleTaskObject(editedTask));

export const filterByStatus = (status: Task['status']) => (task: Task) =>
  status === task.status;
