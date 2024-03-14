export interface FormState {
	isValid: {
		input: boolean;
	};
	values: {
		input: string;
	};
	isFormReadyToSubmit: boolean;
}

export type FormAction =
	| { type: 'SET_VALUE'; payload: Partial<FormState['values']> }
	| { type: 'CLEAR' }
	| { type: 'RESET_VALIDITY' }
	| { type: 'SUBMIT' };

export const ARRAY_FILMS: FormState = {
	isValid: {
		input: true
	},
	values: {
		input: ''
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
				values: ARRAY_FILMS.values,
				isFormReadyToSubmit: false
			};
		case 'RESET_VALIDITY':
			return { ...state, isValid: ARRAY_FILMS.isValid };
		case 'SUBMIT': {
			const inputValidity = state.values.input?.trim().length;

			return {
				...state,
				isValid: {
					input: !!inputValidity
				},
				isFormReadyToSubmit: !!inputValidity
			};
		}
	}
}
