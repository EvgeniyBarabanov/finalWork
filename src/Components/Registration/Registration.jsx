import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Registration.module.css';

function Registration(){

    const navigate = useNavigate();

    const userForm = useRef([]);
    const incorrectLogin = useRef();
    const incorrectPhone = useRef();
    const numberRegistered = useRef();
    const incorrectPassword = useRef();


    const [userAdd, setUserAdd] = useState([]);

    const addUsers = function(event){
        event.preventDefault();

        const formData = new FormData(userForm.current);

        let regexpLogin = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,14}$/ //логин
        let regexpPhone = /^\s*\+375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/ // номер телефона
        let regexpPassword = /^[a-zA-z0-9]{8}$/ // пароль
        
        let user = {
            login: formData.get('login'),
            phone: formData.get('phone'),
            pswrd: formData.get('password')
        }

        let userTestPhone = userAdd.find(item => item.phone === user.phone);
        
        if(incorrectLogin.current.classList.contains(style.incorrectLogin) || 
            numberRegistered.current.classList.contains(style.numberRegistered) ||
            incorrectPhone.current.classList.contains(style.incorrectPhone) ||
            incorrectPassword.current.classList.contains(style.incorrectPassword)){
                incorrectLogin.current.classList.remove(style.incorrectLogin);
                numberRegistered.current.classList.remove(style.numberRegistered);
                incorrectPhone.current.classList.remove(style.incorrectPhone);
                incorrectPassword.current.classList.remove(style.incorrectPassword);
        }

        if(user.login.length === 0 || user.phone.length === 0 || user.phone.length === 0){
            return;
        }else if(regexpLogin.test(user.login) === false){
            incorrectLogin.current.classList.add(style.incorrectLogin);
            return;
        }else if(regexpPhone.test(user.phone) === false){
            incorrectPhone.current.classList.add(style.incorrectPhone);
        }else if(userTestPhone !== undefined){
            numberRegistered.current.classList.add(style.numberRegistered);
            return;
        }else if(regexpPassword.test(user.pswrd) === false){
            incorrectPassword.current.classList.add(style.incorrectPassword);
            return;
        }else{
            const userAddTmp = userAdd;
            userAddTmp.push(user);
            setUserAdd([...userAddTmp]);
            window.setTimeout(()=>{
                navigate('/regSuccess')
            },1000)
        }
    }

    useEffect(()=>{
        let userLocal = localStorage.getItem('user');

        if(userAdd.length === 0 && userLocal && userLocal.length > 0){
            userLocal = JSON.parse(userLocal);

            if(userLocal.length > 0) setUserAdd([...userLocal]);
        }else{
            userLocal = JSON.stringify(userAdd);
            localStorage.setItem('user', userLocal);
        }
    })

    const preventDefault = function(event){
        event.preventDefault();
    }

	return (
	    <section className='registration'>
            <div className="container">
	            <form ref={userForm} className={style.block__login_form}>
                    <h2>Начните совершать покупки в английских магазинах</h2>
                    <div className={style.block__login_form_field}>
                        <p ref={incorrectLogin} className={style.none}>Логин не должен начинатся с цифры и не должен содержать спецсимволов </p>
                        <p>Логин:</p>
                        <input maxLength={15} required type="text" name="login"/>
                    </div>
                    <div className={style.block__login_form_field}>
                        <p ref={incorrectPhone} className={style.none}>Некорректный номер</p> 
                        <p ref={numberRegistered} className={style.none}>Пользователь с таким номером уже зарегистрирован!</p> 
                        <p>Номер телефона в формате:</p>
                        <input maxLength={13} placeholder='+375 (XX) XXX-XX-XX' type="tel" name="phone"/>
                    </div>
                    <div className={style.block__login_form_field}>
                        <p ref={incorrectPassword} className={style.none}>Пароль может состоять из букв и цифр, должен быть не менее 8 символов</p> 
                        <p>Ваш пароль:</p>
                        <input maxLength={8} type="password" name="password"/>
                    </div>
                    <p>Нажимая на кнопку вы соглашаетесь с <button onClick={preventDefault} className={style.block__login_form_registration_privacyPolicy}>правилами предоставления услуг и политикой конфиденциальности</button></p>
                    <div className={style.block__login_btns}>
                        <button onClick={addUsers} className={style.block__login_form_registrationBtn}>Зарегистрироваться</button>
                    </div>
                </form>
            </div>
	    </section>
	);
}
export default Registration;