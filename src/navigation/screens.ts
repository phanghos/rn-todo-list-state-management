type ScreenNameMap = Record<string, `${Uppercase<string>}_SCREEN`>;

const Screens = {
  TaskList: 'TASK_LIST_SCREEN',
  NewTask: 'NEW_TASK_SCREEN',
} as const satisfies ScreenNameMap;

export default Screens;
