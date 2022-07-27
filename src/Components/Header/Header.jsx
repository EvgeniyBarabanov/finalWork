import Nav from '../Nav/Nav';
import style from './Header.module.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

function Header() {
	return (
	<header className={style.block}>
		<div className={style.logo}>
            <a href="/">
                <img src={PUBLIC_URL + '/logo.png'} alt="#" />
            </a>
        </div>
		<Nav/>
	</header>
	);
}

export default Header;