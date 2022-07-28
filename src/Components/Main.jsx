import { Routes, Route } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import RulesPay from './RulesPay/RulesPay';
import Sale from './Sale/Sale';
import Prices from './Prices/Prices';
import Help from './Help/Help';
import Bonuses from './Bonuses/Bonuses';
import Blog from './Blog/Blog';
import Stores from './Stores/Stores';

function Main() {
	return (
	<main className="main">
	    <Routes>
			<Route path='/' element={<Dashboard />} />
			<Route path='/rulesPay' element={<RulesPay />} />
			<Route path='/sale' element={<Sale />} />
			<Route path='/prices' element={<Prices />} />
			<Route path='/help' element={<Help />} />
			<Route path='/bonuses' element={< Bonuses/>} />
			<Route path='/blog' element={<Blog />} />
			<Route path='/stores' element={<Stores />} />
		</Routes>
	</main>
	);
}

export default Main;