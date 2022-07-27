import { Link } from 'react-router-dom';
import style from './Nav.module.css';

function Nav() {
	return (
	<nav className={style.block}>
	    <ul>
			<li>
				CATEGORIES
				<ul>
					<li><Link to="/mensClothing">MensClothing</Link></li>
					<li><Link to="/jewelery">Jewelery</Link></li>
					<li><Link to="/electronics">Electronics</Link></li>
					<li><Link to="/womenClothing">WomenClothing</Link></li>
				</ul>
			</li>
            <li><Link to="/cart">CART</Link></li>
        </ul>
	</nav>
	);
}

export default Nav;