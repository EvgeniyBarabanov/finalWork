import Nav from '../Nav/Nav';
import style from './Header.module.css';

function Header() {
	return (
	<header>
		<div className='container'>
				<Nav/>
		</div>
	</header>
	);
}

export default Header;