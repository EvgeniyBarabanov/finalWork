import { Routes, Route } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import MensClothing from './MensClothing/MensClothing';
import Jewelery from './Jewelery/Jewelery';
import Electronics from './Electronics/Electronics';
import WomenClothing from './WomenClothing/WomenClothing';
import Product from './Product/Product';
import Cart from './Cart/Cart';

function Main() {
	return (
	<main className="main">
	    <Routes>
			<Route path='/' element={<Dashboard />} />
			<Route path='/mensClothing' element={<MensClothing />} />
			<Route path='/jewelery' element={<Jewelery />} />
			<Route path='/electronics' element={<Electronics />} />
			<Route path='/womenClothing' element={<WomenClothing />} />
			<Route path='/product' element={< Product/>} />
			<Route path='/cart' element={<Cart />} />
		</Routes>
	</main>
	);
}

export default Main;