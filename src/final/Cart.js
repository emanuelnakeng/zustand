import useCartStore from './store/cart-store';

function Cart(props) {
	const { removeCardHandler, clearCartHandler, clearCartAsync } =
		useCartStore(state => ({
			removeCardHandler: state.removeCardHandler,
			clearCartHandler: state.clearCartHandler,
			clearCartAsync: state.clearCartAsync,
		}));

	const cart = useCartStore(state => state.cart);
	return (
		<section>
			<h2>Products in cart</h2>
			<button onClick={clearCartAsync}>Clear cart</button>
			{cart.map(item => {
				return (
					<article key={item.id} className='product'>
						<h3>{item.product_name}</h3>
						<button onClick={() => removeCardHandler(item.id)}>
							Remove
						</button>
					</article>
				);
			})}
		</section>
	);
}

export default Cart;
