import { configureStore } from '@reduxjs/toolkit';
import { saveState } from './storage';
import userSlice, { USER_PERSISTENT_STATE } from './user.slice';

export const store = configureStore({
	reducer: {
		user: userSlice
	}
});

store.subscribe(() => {
	saveState(store.getState().user.profile, USER_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
