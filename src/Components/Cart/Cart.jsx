import { useEffect } from 'react';
import style from './Cart.module.css'

const PUBLIC_URL = process.env.PUBLIC_URL;

const getCookie = require('../GetCookie');

function Cart(){

    const cart = function(){
        let localElem = localStorage.getItem('storage');
        localElem = JSON.parse(localElem);
        console.log(localElem);

    }

    useEffect(()=>{
        cart();
    })

    return(
        <div>
            <section className={style.cart}>
                <div className="container">
                    <div className={style.cart__wrapper}>
                        <div className={style.cart__info}>
                            <h2>Заказы пользователя {getCookie('authLogin')}</h2>
                            <button>Добавить новый заказ</button>
                        </div>
                        <div className={style.cart__search}>
                            <div className={style.cart__searchOrderBtn}>
                                <button>Все</button>
                                <button>Мои заказы</button>
                            </div>
                            <div className={style.cart__searchTrack}>
                                <div className={style.cart__searchTrack_input}>
                                    <input placeholder='Поиск по трек номеру' name='search' type="search" />
                                    <button className={style.cart__searchTrack_input_deleteText}><img src={PUBLIC_URL + '/images/magnifyingGlass_logo.png'} alt="#" /></button>
                                </div>
                                <button><img src={PUBLIC_URL + '/images/filter_logo.png'} alt="#" /></button>
                            </div>
                        </div>
                        <table className={style.cart__table}>
                            <thead>
                                <tr>
                                    <th>Дата</th>
                                    <th>Id заказа</th>
                                    <th>Наименование</th>
                                    <th>Бренд</th>
                                    <th>Категория</th>
                                    <th>Цена</th>
                                    <th>Скидка</th>
                                    <th>Рейтинг</th>
                                    <th>Количество</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart;