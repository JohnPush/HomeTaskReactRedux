export const ARRAY_FILMS = {
	isValid: {
		input: true
	},
	values: {
		input: ''
	},
	isFormReadyToSubmit: false
};

export function formReducer(state, action) {
	switch(action.type) {
	case 'SET_VALUE':
		return { ...state, values: { ...state.values, ...action.payload}};
	case 'CLEAR':
		return { ...state, values: ARRAY_FILMS.values, isFormReadyToSubmit: false};
	case 'RESET_VALIDITY':
		return { ...state, isValid: ARRAY_FILMS.isValid};
	case 'SUBMIT' : {
		const inputValidity = state.values.input?.trim().length;

		return {
			...state,
			isValid: {
				input: inputValidity
			},
			isFormReadyToSubmit: inputValidity
		};
	}
	}
}