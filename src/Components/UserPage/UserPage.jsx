import moment from 'moment';
import { useEffect, useState } from 'react';

import style from './UserPage.module.css'

let test = moment().format('MMMM Do YYYY, h:mm:ss a');

const PUBLIC_URL = process.env.PUBLIC_URL;



function UserPage(){

    let [dateNow, setDateNow] = useState('');

    useEffect(()=>{
       /* window.setTimeout(() => { */
        setDateNow(test)
       /* }, 1000); */
    })

    return(
        <section className={style.block}>
            <div className="container">
                <div className={style.block__menu}>
                    <div className={style.block__menu_currentTime}>
                        <img src={PUBLIC_URL + '/images/clock_icon.png'} alt="#" />
                        <span>{dateNow}</span>
                    </div>
                    <div className={style.block__menu_exchangeRates}>
                        <button><img src={PUBLIC_URL + '/images/bank_icon.png'} alt="#" />Курс валют</button>
                    </div>
                    <div className={style.block__menu_bonusAccount}>
                        <button><img src={PUBLIC_URL + '/images/bonusAccont_icon.png'} alt="#" />Бонусный счет</button>
                    </div>
                    <div className={style.block__menu_balance}>
                        <p>ваш баланс: 0</p>
                    </div>
                    <div className={style.block__menu_buy}>
                        <button>Совершить покупку</button>
                    </div>
                    <div>
                        <button><img src={PUBLIC_URL + '/images/payPal_icon.png'} alt="#" /></button>
                        <button><img src={PUBLIC_URL + '/images/visa_icon.png'} alt="#" /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserPage;