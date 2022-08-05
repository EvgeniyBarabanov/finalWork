import { Link } from 'react-router-dom';

import style from './Login.module.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

function Login() {

    const preventDefault = function(event){
        event.preventDefault();
    }

	return (
	<div className={style.login}>
        <div className="container">
	        <form className={style.login__form} /* method='POST' */>
                <h2>Выполните вход в ваш личный кабинет</h2>
                <div className={style.form__field}>
                    <p>Номер телефона:</p>
                    <input type="tel" name="phone"/>
                </div>
                <div className={style.form__field}>
                    <p>Ваш пароль:</p>
                    <input type="password" name="password"/>
                </div>
                <div className={style.login__pswrd}>
                    <button className={style.login__pswrdRecovery} onClick={preventDefault}>Восстановление пароля</button>
                    <span> или </span>
                    <Link to="/registration" className={style.login__pswrdQuickRegistration}>быстрая регистрация</Link>
                </div>
                <div className={style.login__btns}>
                    <button className={style.form__sendBtn}>Войти</button>
                    <div className={style.anotherLogin}>
                        <button onClick={preventDefault}><img src={PUBLIC_URL + '/images/google_icon.png'} alt="#" /></button>
                        <button onClick={preventDefault}><img src={PUBLIC_URL + '/images/FB_icon.png'} alt="#" /></button>
                        <button onClick={preventDefault}><img src={PUBLIC_URL + '/images/VK_icon.png'} alt="#" /></button>
                    </div>
                </div>
            </form>
        </div>
	</div>
	);
}

export default Login;