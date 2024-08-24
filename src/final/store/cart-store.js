import { create } from 'zustand';

const initialState = {
	cart: [],
};

const useCartStore = create(set => ({
	...initialState,
	addToCartHandler: product =>
		set(state => ({ cart: [...state.cart, product] })),
	removeCardHandler: id =>
		set(state => ({
			cart: state.cart.filter(cartItem => cartItem.id !== id),
		})),
	clearCartHandler: () => set(state => ({ cart: [] })),
	clearCartAsync: async () => {
		await new Promise(resolve => setTimeout(resolve, 2000));
		set(state => ({ cart: [] }));
	},
}));

export default useCartStore;
