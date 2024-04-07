import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveState } from './storage';
import { Profile } from '../interfaces/user.interface';

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
					id:
						profiles.length > 0
							? Math.max(...profiles.map((profile) => profile.id)) + 1
							: 1
				});
			}

			state.profile = profiles;

			saveState(state.profile, USER_PERSISTENT_STATE);
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

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
