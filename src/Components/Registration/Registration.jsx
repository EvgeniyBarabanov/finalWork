import { useRef, useState } from 'react';
import style from './Registration.module.css';

function Registration(){

    const userForm = useRef([]);

    

    const addUsers = function(event){
        event.preventDefault();
        const formData = new FormData(userForm.current);

        let user = {
            name: formData.get('firstName'),
            phone: formData.get('phone'),
            pswrd: formData.get('password')
        }
        
        window.localStorage.setItem('userStorage', JSON.stringify(user));
        console.log(localStorage.getItem('userStorage'));
    }

    const preventDefault = function(event){
        event.preventDefault();
        
    }

	return (
	<div className={style.block}>
        <div className="container">
	        <form ref={userForm} className={style.block__login_form}>
                <h2>Начните совершать покупки в английских магазинах</h2>
                <div className={style.block__login_form_field}>
                    <p>Имя:</p>
                    <input type="text" name="firstName"/>
                </div>
                <div className={style.block__login_form_field}>
                    <p>Номер телефона:</p>
                    <input type="tel" name="phone"/>
                </div>
                <div className={style.block__login_form_field}>
                    <p>Ваш пароль:</p>
                    <input type="password" name="password"/>
                </div>
                <p>Нажимая на кнопку вы соглашаетесь с <button onClick={preventDefault} className={style.block__login_form_registration_privacyPolicy}>правилами предоставления услуг и политикой конфиденциальности</button></p>
                <div className={style.block__login_btns}>
                    <button onClick={addUsers} className={style.block__login_form_registrationBtn}>Зарегистрироваться</button>
                </div>
            </form>
        </div>
	</div>
	);
}
export default Registration;