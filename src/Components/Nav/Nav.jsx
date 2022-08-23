import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import style from './Nav.module.css';

const getCookie = require('../GetCookie');

const PUBLIC_URL = process.env.PUBLIC_URL;

function Nav() {


	const visibilityMenu = useRef();
	/* const transparent = useRef(); */
	const [name, setName] = useState('');

	const visibility = function(){
		visibilityMenu.current.classList.toggle(style.visibilityMenu);
		/* transparent.current.classList.toggle(style.transparent) */
	}

	useEffect(()=>{
        if (getCookie('authLogin')){
			setName(getCookie('authLogin')) 
    	}else{
			setName('Войти');
		}
	})

	return (
		<nav className={style.block}>
				<button className={style.block__burgerBtn} onClick={visibility}></button>
				<div className={style.block__logo}>
    	    		    <a href="/">
    	    		        <img src={PUBLIC_URL + '/images/logo.png'} alt="#" />
							<span>OKEYPOST</span>
    	    		    </a>
    	    		</div>
		    	<ul ref={visibilityMenu} className={style.block__list}>
					<li><Link to="/rulesPay">Как покупать</Link></li>
					<li><Link to="/sale">Распродажи</Link></li>
					<li><Link to="/prices">Цены</Link></li>
					<li><Link to="/help">Помощь</Link></li>
					<li><Link to="/bonuses">Бонусы</Link></li>
					<li><Link to="/blog">Блог</Link></li>
					<li><Link to="/stores">Магазины</Link></li>	
				</ul>
				<div className={style.block__user}>
					<Link to="/cart" className={style.block__user_cart}><img src={PUBLIC_URL + '/images/cart_icon.png'} alt="#" /></Link>
					<Link to="/login" className={style.block__logIn}><img src={PUBLIC_URL + '/images/userLogo.png'} alt="#" />{name}</Link>
					<button className={style.block__contact_btn}>Связаться с нами</button>
				</div>
				{/* <div ref={transparent} className={style.block_opacity}></div> */}
		</nav>
	);
}


export default Nav;