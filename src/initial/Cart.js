const Cart = props => {
	return (
		<section>
			<h2>Products in cart</h2>
			<button onClick={props.onClearCart}>Clear cart</button>
			{props.cart.map(item => {
				return (
					<article key={item.id} className='product'>
						<h3>{item.product_name}</h3>
						<button onClick={() => props.onRemoveProduct(item.id)}>
							Remove
						</button>
					</article>
				);
			})}
		</section>
	);
};

export default Cart;
