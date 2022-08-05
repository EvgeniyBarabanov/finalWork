import style from './Registration.module.css';

function Registration(){

    const preventDefault = function(event){
        event.preventDefault();
    }

	return (
	<div className={style.login}>
        <div className="container">
	        <form className={style.login__form}>
                <h2>Начните совершать покупки в английских магазинах</h2>
                <div className={style.form__field}>
                    <p>Имя:</p>
                    <input type="text" name="firstName"/>
                </div>
                <div className={style.form__field}>
                    <p>Номер телефона:</p>
                    <input type="tel" name="phone"/>
                </div>
                <div className={style.form__field}>
                    <p>Ваш пароль:</p>
                    <input type="password" name="password"/>
                </div>
                <p>Нажимая на кнопку вы соглашаетесь с <button onClick={preventDefault} className={style.registration__privacyPolicy}>правилами предоставления услуг и политикой конфиденциальности</button></p>
                <div className={style.login__btns}>
                    <button className={style.form__registrationBtn}>Зарегистрироваться</button>
                </div>
            </form>
        </div>
	</div>
	);
}
export default Registration;