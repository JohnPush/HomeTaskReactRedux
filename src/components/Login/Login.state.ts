export interface LoginFormState {
	isValid: {
		userName: boolean;
		isLogined: boolean;
	};
	values: {
		userName: string;
		isLogined: boolean;
	};
	isFormReadyToSubmit: boolean;
}

export type LoginFormAction =
	| { type: 'SET_VALUE'; payload: Partial<LoginFormState['values']> }
	| { type: 'CLEAR' }
	| { type: 'RESET_VALIDITY' }
	| { type: 'SUBMIT' };

export const INITIAL_LOGIN_FORM_STATE: LoginFormState = {
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

export function formReducer(
	state: LoginFormState,
	action: LoginFormAction
): LoginFormState {
	switch (action.type) {
		case 'SET_VALUE':
			return { ...state, values: { ...state.values, ...action.payload } };
		case 'CLEAR':
			return {
				...state,
				values: INITIAL_LOGIN_FORM_STATE.values,
				isFormReadyToSubmit: false
			};
		case 'RESET_VALIDITY':
			return { ...state, isValid: INITIAL_LOGIN_FORM_STATE.isValid };
		case 'SUBMIT': {
			const isValidUserName = !!state.values.userName?.trim().length;

			return {
				...state,
				isValid: {
					...state.isValid,
					userName: isValidUserName
				},
				isFormReadyToSubmit: isValidUserName
			};
		}
	}
}
