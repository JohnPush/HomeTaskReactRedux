import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const CART_PERSISTENT_STATE = 'cartData';

export interface CartItem {
	id: number;
}

export interface CartState {
	items: CartItem[];
}

const initialState: CartState = loadState<CartState>(CART_PERSISTENT_STATE) ?? {
	items: []
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		delete: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((i) => i.id !== action.payload);
		},

		add: (state, action: PayloadAction<number>) => {
			const existed = state.items.find((i) => i.id === action.payload);
			if (!existed) {
				state.items.push({ id: action.payload });
			}
		}
	}
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
