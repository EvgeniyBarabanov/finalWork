import { useEffect } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import style from './Login.module.css';

const getCookie = require('../GetCookie');

const PUBLIC_URL = process.env.PUBLIC_URL;

function Login() {

    const loginForm = useRef([]);
    const preventionNone = useRef();
    let navigate = useNavigate();

    const preventDefault = function(event){
        event.preventDefault();
    }

    
    
    const logIn = function(event){
        event.preventDefault();
        const form = new FormData(loginForm.current);
        console.log(window.location)
        let userStorage = localStorage.getItem('user');
        userStorage = JSON.parse(userStorage);

        userStorage.map((item)=>{
            if(item.phone === form.get('phone') && item.pswrd === form.get('password')){
                document.cookie = 'auth=true; max-age=3600';
                document.cookie = 'authPhone=' + item.phone + '; max-age=3600';
                document.cookie = 'authLogin=' + item.login + '; max-age=3600';
                window.location.href = 'http://localhost:3000'
            }else{
                preventionNone.current.classList.add(style.login__form_prevention);
            }
        })
    }

    const auth = function(){
        if (getCookie('auth') === 'true'){
            navigate(('/' + getCookie('authLogin')))
        }
    }

    useEffect(()=>{
        auth();
    })

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
                        <button onClick={logIn} className={style.form__sendBtn}>Войти</button>

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