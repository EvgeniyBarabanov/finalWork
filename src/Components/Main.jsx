import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import RulesPay from './RulesPay/RulesPay';
import Sale from './Sale/Sale';
import Prices from './Prices/Prices';
import Help from './Help/Help';
import Bonuses from './Bonuses/Bonuses';
import Blog from './Blog/Blog';
import Stores from './Stores/Stores';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import UserPage from './UserPage/UserPage';

export const MainContext = createContext();

function Main() {

	const [user, setUser] = useState([])

	return (
	<main className="main">
		<MainContext.Provider value={ {user, setUser}} >
	    	<Routes>
				<Route path='*' element={<Dashboard />} />
				<Route path='/rulesPay' element={<RulesPay />} />
				<Route path='/sale' element={<Sale />} />
				<Route path='/prices' element={<Prices />} />
				<Route path='/help' element={<Help />} />
				<Route path='/bonuses' element={< Bonuses/>} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/stores' element={<Stores />} />
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/myPage' element={<UserPage />} />
			</Routes>
		</MainContext.Provider>
	</main>
	);
}

export default Main;