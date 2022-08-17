import { useRef, useState, useEffect } from 'react';
import style from './Registration.module.css';

function Registration(){

    const userForm = useRef([]);
    const emptyField = useRef();
    const warning = useRef();

    const [userAdd, setUserAdd] = useState([]);

    const addUsers = function(event){
        event.preventDefault();
        const formData = new FormData(userForm.current);

        let user = {
            login: formData.get('login'),
            phone: formData.get('phone'),
            pswrd: formData.get('password')
        }


        if(user.login.length === 0 || user.phone.length === 0 || user.phone.length === 0){
            emptyField.current.classList.add(style.block__emptyField)
            return;
        }

        let userTest = userAdd.find(item => item.phone === user.phone);
        
        if(userTest !== undefined){
            warning.current.classList.remove(style.block__warning_none)
            return;
        }else{
            const userAddTmp = userAdd;
            userAddTmp.push(user);
            setUserAdd([...userAddTmp]);
            console.log("пользователь добавлен, вы можете войти на свою страницу");
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
	<div className={style.block}>
        <div className="container">
	        <form ref={userForm} className={style.block__login_form}>
                <h2>Начните совершать покупки в английских магазинах</h2>
                    <p ref={warning} className={style.block__warning_none}>Пользователь с таким номером уже зарегистрирован</p>
                    <p ref={emptyField} className={style.block__emptyField_none}>Пожалуйста, заполните поля</p>  
                <div className={style.block__login_form_field}>
                    <p>Логин:</p>
                    <input required type="text" name="login"/>
                </div>
                <div className={style.block__login_form_field}>
                    <p>Номер телефона:</p>
                    <input required type="tel" name="phone"/>
                </div>
                <div className={style.block__login_form_field}>
                    <p>Ваш пароль:</p>
                    <input required type="password" name="password"/>
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