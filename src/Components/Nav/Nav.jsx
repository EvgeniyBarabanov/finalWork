import { Link } from 'react-router-dom';
import style from './Nav.module.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

function Nav() {
	return (
	<nav className={style.block}>
		<div className={style.logo}>
        	    <a href="/">
        	        <img src={PUBLIC_URL + '/images/logo.png'} alt="#" />
        	    </a>
        	</div>
	    <ul className={style.list}>
			<li><Link to="/rulesPay">Как покупать</Link></li>
			<li><Link to="/sale">Распродажи</Link></li>
			<li><Link to="/prices">Цены</Link></li>
			<li><Link to="/help">Помощь</Link></li>
			<li><Link to="/bonuses">Бонусы</Link></li>
			<li><Link to="/blog">Блог</Link></li>
			<li><Link to="/stores">Магазины</Link></li>	
		</ul>
		<div className={style.user}>
			<button className={style.logIn}><img src={PUBLIC_URL + '/images/userLogo.png'} alt="#" /> Вход</button>
			<button className={style.contact_btn}>Связаться с нами</button>
		</div>
	</nav>
	);
}

export default Nav;