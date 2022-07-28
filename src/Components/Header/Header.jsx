import Nav from '../Nav/Nav';
import style from './Header.module.css';

function Header() {
	return (
	<header className={style.block}>
		<div className='container'>
				<Nav/>
		</div>
	</header>
	);
}

export default Header;