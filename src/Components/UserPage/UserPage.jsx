import moment from 'moment';
import { useEffect, useState } from 'react';

import style from './UserPage.module.css'

const getCookie = require('../GetCookie');

const PUBLIC_URL = process.env.PUBLIC_URL;

function UserPage(){
    
    const [dateNow, setDateNow] = useState(moment().format('MMMM Do YYYY'));
    const [data, setData] = useState([])

    const logOut = function () {
        if(!getCookie('auth') || !getCookie('authLogin')) return;

        document.cookie = 'auth=; max-age=-1';
        document.cookie = 'authLogin=; max-age=-1';
        document.cookie = 'authPhone=; max-age=-1';
        document.cookie = 'id=; max-age=-1';

        if(!getCookie('auth')) window.location.reload();
    }

    const userData = function(){
        if(!getCookie('auth')){
            window.location = "http://localhost:3000";
        }
        let userInfo = localStorage.getItem('user');
        userInfo = JSON.parse(userInfo);

        userInfo.map((item)=>{
            if(data.length === 0){
                if(item.phone === getCookie('authPhone')){
                    setData([item]);
                }
            }
        })
    };
    
    useEffect(()=>{
        userData();
    })

    return(
        <div>
            <section className='personal__information_menu'>
                <div className="container">
                    <div className={style.block__menu}>
                        <div className={style.block__menu_wrapper}>
                            <div className={style.block__menu_currentTime}>
                                <img src={PUBLIC_URL + '/images/clock_icon.png'} alt="#" />
                                <p>{dateNow}</p>
                            </div>
                            <div className={style.block__menu_exchangeRates}>
                                <button><img src={PUBLIC_URL + '/images/bank_icon.png'} alt="#" />Курс валют</button>
                            </div>
                            <div className={style.block__menu_bonusAccount}>
                                <button><img src={PUBLIC_URL + '/images/bonusAccount_icon.png'} alt="#" />Бонусный счет</button>
                            </div>
                            <div className={style.block__menu_balance}>
                                <p>Ваш баланс: 0</p>
                            </div>
                            <div className={style.block__payment_btns}>
                                <button><img src={PUBLIC_URL + '/images/payPal_icon.png'} alt="#" /></button>
                                <button><img src={PUBLIC_URL + '/images/visa_icon.png'} alt="#" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='personal__information_info'>
                <div className="container">
                    <div className={style.personal__information_wrapper}>
                        <div className={style.personal__information_logo}>
                            <img src="https://via.placeholder.com/200" alt="#" />
                        </div>
                        {data.map((item,index)=>{
                            return(
                                <div key={index} className={style.personal__information_data}>
                                    <p>Имя:</p>
                                    <p>Логин: {item.login}</p>
                                    <p>Телефон: {item.phone}</p>
                                    <p>Электронная почта:</p>
                                    <div className={style.personal__information_btns}>
                                        <button>Редактировать</button>
                                        <button>Изменить пароль</button>
                                    </div>
                                </div>
                            )
                        })}
                        <div className={style.block__logOut}>
                            <button onClick={logOut}>Выход из аккаунта</button>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
        
    )
}

export default UserPage;