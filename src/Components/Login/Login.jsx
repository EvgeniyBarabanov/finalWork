import { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MainContext } from '../Main';

import style from './Login.module.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

function Login() {
    const {user, setUser} = useContext(MainContext);
    const loginForm = useRef([]);
    const preventionNone = useRef();
    let navigate = useNavigate();


    const preventDefault = function(event){
        event.preventDefault();
    }

    const test = function(event){
        event.preventDefault();
        const form = new FormData(loginForm.current);

        let userStorage = localStorage.getItem('user');
        userStorage = JSON.parse(userStorage);
        userStorage.map((item)=>{
            if(item.phone === form.get('phone') && item.pswrd === form.get('password')){
                const userTmp = user;
                userTmp.push(item);
                setUser(userTmp)
                navigate('/myPage');
            }else{
                preventionNone.current.classList.add(style.login__form_prevention);
            }
        })

    }

	return (
	    <div className={style.login}>
            <div className="container">
	            <form ref={loginForm} className={style.login__form}>
                    <h2>Выполните вход в ваш личный кабинет</h2>
                    <span ref={preventionNone} className={style.preventionNone} >Такого пользователя не существует, либо введены неверные данные</span>
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
                        <button onClick={test} className={style.form__sendBtn}>Войти</button>

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