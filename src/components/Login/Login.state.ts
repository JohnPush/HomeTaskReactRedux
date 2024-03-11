export const ARRAY_USERS = {
	isValid: {
		userName: true,
		isLogined: false
	},
	values: {
		userName: '',
		isLogined: false
	},
	isFormReadyToSubmit: false
};

export function formReducer(state: any, action: any) {
	switch (action.type) {
		case 'SET_VALUE':
			return { ...state, values: { ...state.values, ...action.payload } };
		case 'CLEAR':
			return {
				...state,
				values: ARRAY_USERS.values,
				isFormReadyToSubmit: false
			};
		case 'RESET_VALIDITY':
			return { ...state, isValid: ARRAY_USERS.isValid };
		case 'SUBMIT': {
			const userNameValidity = state.values.userName?.trim().length;
			return {
				...state,
				isValid: {
					userName: userNameValidity
				},
				isFormReadyToSubmit: userNameValidity
			};
		}
	}
}
