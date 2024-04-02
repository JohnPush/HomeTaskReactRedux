import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Profile } from '../interfaces/user.interface';
import { RootState } from './store';
import { saveState, loadState } from './storage';

export const ACCESS_TOKEN_PERSISTENT_STATE = 'accessToken';
export const USER_LIST_PERSISTENT_STATE = 'userList';

export interface UserPersistentState {
	accessToken: string | null;
	userList: string[];
}

export interface UserState {
	accessToken: string | null;
	loginErrorMessage?: string;
	registerErrorMessage?: string;
	profile?: Profile;
}

const initialState: UserState = {
	accessToken:
		loadState<UserPersistentState>(ACCESS_TOKEN_PERSISTENT_STATE)
			?.accessToken ?? null
};

const userExists = (username: string, userList: string[]): boolean => {
	return userList.includes(username);
};

// Функция для создания нового пользователя
const createUser = (username: string, userList: string[]): string[] => {
	return [...userList, username];
};

export const login = createAsyncThunk(
	'user/login',
	async (params: { name: string }, { getState }) => {
		try {
			const { name } = params;
			const state = getState() as RootState;
			const { accessToken, userList } = state.user;

			// Проверяем существует ли пользователь с данным именем
			if (!userExists(name, userList)) {
				// Если пользователь не существует, создаем нового
				const newUserList = createUser(name, userList);
				saveState(
					{ accessToken, userList: newUserList },
					ACCESS_TOKEN_PERSISTENT_STATE
				);
			} else {
				// Если пользователь существует, устанавливаем accessToken
				saveState(
					{ accessToken: name, userList },
					ACCESS_TOKEN_PERSISTENT_STATE
				);
			}

			// Возвращаем accessToken
			return { accessToken: name };
		} catch (error) {
			throw new Error('Failed to login');
		}
	}
);

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			state.accessToken = null;
		},
		clearLoginError: (state) => {
			state.loginErrorMessage = undefined;
		},
		clearRegisterError: (state) => {
			state.registerErrorMessage = undefined;
		}
	}
	// extraReducers: (builder) => {
	// 	// Добавление extra reducers здесь, если это необходимо
	// }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
