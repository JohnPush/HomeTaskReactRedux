import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveState } from './storage';
import { Profile } from '../interfaces/user.interface';
import { RootState } from './store';

export const USER_PERSISTENT_STATE = 'users';

export interface UserState {
	profile: Profile[] | null;
}

const initialState: UserState = {
	profile: null
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<string>) => {
			const profiles = state.profile || [];
			const existingProfile = profiles.find(
				(profile) => profile.userName === action.payload
			);

			if (existingProfile) {
				existingProfile.isLogined = true;
			} else {
				profiles.push({
					userName: action.payload,
					isLogined: true,
					userId:
						profiles.length > 0
							? Math.max(...profiles.map((profile) => profile.userId)) + 1
							: 1,
					favoriteMovies: []
				});
			}

			state.profile = profiles;

			saveState(state.profile, USER_PERSISTENT_STATE);
		},
		addFavorite: (
			state,
			action: PayloadAction<{
				// userName: string;
				userId: number;
				movieId: number;
			}>
		) => {
			const { userId, movieId } = action.payload;
			const profile = state.profile?.find(
				(profile) => profile.userId === userId
			);
			if (profile) {
				profile.favoriteMovies.push(movieId);
				saveState(state.profile, USER_PERSISTENT_STATE);
			}
		},
		removeFavorite: (
			state,
			action: PayloadAction<{ userId: number; movieId: number }>
		) => {
			const { userId, movieId } = action.payload;
			const profile = state.profile?.find(
				(profile) => profile.userId === userId
			);
			if (profile) {
				profile.favoriteMovies = profile.favoriteMovies.filter(
					(id) => id !== movieId
				);
				saveState(state.profile, USER_PERSISTENT_STATE);
			}
		},
		logout: (state) => {
			const profiles = state.profile || [];

			profiles.forEach((profile) => {
				profile.isLogined = false;
			});
			state.profile = profiles;
			saveState(state.profile, USER_PERSISTENT_STATE);
		}
	}
});

export const { login, logout, addFavorite, removeFavorite } = userSlice.actions;

export const userActions = userSlice.actions;
export const selectLoggedInUserProfiles = (state: RootState) =>
	state.user.profile?.filter((profile) => profile.isLogined);

export default userSlice.reducer;
