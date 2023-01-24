import taskSlice from '@app/domains/task/slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
