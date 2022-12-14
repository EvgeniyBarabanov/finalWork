import { Routes, Route } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import RulesPay from './RulesPay/RulesPay';
import Sale from './Sale/Sale';
import Prices from './Prices/Prices';
import Help from './Help/Help';
import Blog from './Blog/Blog';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import RegSuccess from './RegSuccess/RegSuccess';
import UserPage from './UserPage/UserPage';
import Cart from './Cart/Cart';


function Main() {
	
	if(!localStorage.getItem('user')){localStorage.setItem('user','[]')}
	let localUser = localStorage.getItem('user');
	localUser = JSON.parse(localUser);

	return (
		<main className="main">
		    <Routes>
				<Route path='*' element={<Dashboard />} />
				<Route path='/rulesPay' element={<RulesPay />} />
				<Route path='/sale' element={<Sale />} />
				<Route path='/prices' element={<Prices />} />
				<Route path='/help' element={<Help />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/regSuccess' element={<RegSuccess />} />
				<Route path='/cart' element={<Cart />} />
				{ localUser.map((item, index) =>{
					return(
						<Route key={index} path={'/' + item.login} element={<UserPage />} />
					)
				})}
			</Routes>
		</main>
	);
}

export default Main;