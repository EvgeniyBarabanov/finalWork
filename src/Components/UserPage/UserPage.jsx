import moment from 'moment';
import { useEffect, useState, useContext } from 'react';
import { MainContext } from '../Main';
import style from './UserPage.module.css'

const PUBLIC_URL = process.env.PUBLIC_URL;


function UserPage(){
    
    const {user} = useContext(MainContext);
    const [dateNow, setDateNow] = useState('')
    console.log(user);
    useEffect(()=>{
        window.setTimeout(() => {
            setDateNow(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);
    }, [dateNow])

    return(
        <div>
            <section className={style.block}>
                <div className="container">
                    <div className={style.block__menu}>
                        <div className={style.block__menu_wrapper}>
                            <div className={style.block__menu_currentTime}>
                                <img src={PUBLIC_URL + '/images/clock_icon.png'} alt="#" />
                                <span>{dateNow}</span>
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
                            <div className={style.block__menu_buy}>
                                <button>Совершить покупку</button>
                            </div>
                            <div className={style.block__payment_btns}>
                                <button><img src={PUBLIC_URL + '/images/payPal_icon.png'} alt="#" /></button>
                                <button><img src={PUBLIC_URL + '/images/visa_icon.png'} alt="#" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className={style.info__userLogo}>
                        <img src="https://via.placeholder.com/150" alt="#" />
                    </div>
                    <div>
                        <p>Имя: {user[0].name}</p>
                        <p>Логин:</p>
                        <p>E-mail:</p>
                        <p>Телефон: {user[0].phone}</p>
                        <p>Адрес:</p>
                        <div className={style.info__profileBtns}>
                            <button>Редактировать</button>
                            <button>Изменить пароль</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default UserPage;