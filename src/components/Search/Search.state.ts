export interface SearchFormState {
	isValid: {
		searchField: boolean;
	};
	values: {
		searchField: string;
	};
	isFormReadyToSubmit: boolean;
}

export type SearchFormAction =
	| { type: 'SET_VALUE'; payload: Partial<SearchFormState['values']> }
	| { type: 'CLEAR' }
	| { type: 'RESET_VALIDITY' }
	| { type: 'SUBMIT' };

export const INITIAL_SEARCH_FORM_STATE: SearchFormState = {
	isValid: {
		searchField: true
	},
	values: {
		searchField: ''
	},
	isFormReadyToSubmit: false
};

export function formReducer(
	state: SearchFormState,
	action: SearchFormAction
): SearchFormState {
	switch (action.type) {
		case 'SET_VALUE':
			return { ...state, values: { ...state.values, ...action.payload } };
		case 'CLEAR':
			return {
				...state,
				values: INITIAL_SEARCH_FORM_STATE.values,
				isFormReadyToSubmit: false
			};
		case 'RESET_VALIDITY':
			return { ...state, isValid: INITIAL_SEARCH_FORM_STATE.isValid };
		case 'SUBMIT': {
			const inputValidity = state.values.searchField?.trim().length || 0;

			return {
				...state,
				isValid: {
					searchField: !!inputValidity
				},
				isFormReadyToSubmit: !!inputValidity
			};
		}
	}
}
