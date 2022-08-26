import style from './RegSuccess.module.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

function RegSuccess() {
	return (
	<section className="regSuccess">
	    <div className="container">
			<div className={style.block__wrapper}>
				<div className={style.block__image}>
					<img src={PUBLIC_URL + '/images/regSuccess.png'} alt="#" />
				</div>
				<div className={style.block__infoReg}>
					<p>Регистрация прошла успешно!</p>
					<span>Вы можете вернуться обратно на главную страницу</span>
				</div>
			</div>
		</div>
	</section>
	);
}

export default RegSuccess;