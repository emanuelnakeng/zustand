const ProductList = props => {
	return (
		<div>
			<h2>Products List</h2>
			{props.products.map(product => {
				return (
					<article key={product.id} className='product'>
						<h2>{product.product_name}</h2>
						<h3>{product.product_price}</h3>
						<button onClick={() => props.onAddToCart(product)}>
							Add to cart
						</button>
					</article>
				);
			})}
		</div>
	);
};

export default ProductList;
