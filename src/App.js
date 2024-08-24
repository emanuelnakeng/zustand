// import { useState } from 'react';
import { faker } from '@faker-js/faker';
import Cart from './final/Cart';
import ProductList from './final/ProductList';
import useCartStore from './final/store/cart-store';
import { useEffect } from 'react';

//using store outside component
const logCart = () => {
	const cart = useCartStore.getState().cart; //setState - sets store on mount
	console.log('Number of products in cart ', cart.length);
};

function createRandomProducts() {
	return {
		id: faker.string.uuid(),
		product_name: faker.commerce.productName(),
		product_price: faker.commerce.price({ symbol: 'R' }),
		product_desc: faker.commerce.productDescription(),
	};
}

const products = faker.helpers.multiple(createRandomProducts, { count: 10 });

function App() {
	useEffect(() => {
		logCart();
	});
	// const [cart, setCart] = useState([]);

	// const addToCartHandler = product => {
	// 	setCart(currentCart => {
	// 		return [...currentCart, product];
	// 	});
	// };

	// const removeCardHandler = id => {
	// 	const filteredProducts = cart.filter(cardItem => cardItem.id !== id);
	// 	setCart(filteredProducts);
	// };

	// const clearCartHandler = () => setCart([]);

	return (
		<div className='app'>
			<ProductList products={products} />
			<Cart />
		</div>
	);
}

export default App;
