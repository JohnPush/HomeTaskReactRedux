export interface FormState {
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

export type FormAction =
	| { type: 'SET_VALUE'; payload: Partial<FormState['values']> }
	| { type: 'CLEAR' }
	| { type: 'RESET_VALIDITY' }
	| { type: 'SUBMIT' };

export const ARRAY_USERS: FormState = {
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

export function formReducer(state: FormState, action: FormAction): FormState {
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
			const userNameValidity = state.values.userName?.trim().length ?? 0;
			const isValidUserName = userNameValidity > 0;
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
