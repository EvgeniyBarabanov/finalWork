import { useState, useEffect } from 'react';
import style from './Cart.module.css'

const PUBLIC_URL = process.env.PUBLIC_URL;

const getCookie = require('../GetCookie');

function Cart(){

    const [arrProduct, setProductArr] = useState([])

    const cart = function(){
        if(!getCookie('id')){
            return;
        }

        let localElem = localStorage.getItem('storage');
        localElem = JSON.parse(localElem);

        let productId = getCookie('id').split(',').map(Number);
        if(arrProduct.length === 0){
            let arrProductTmp = arrProduct;
            localElem.products.map((item)=>{
                if(productId.includes(item.id)){
                    arrProductTmp.push(item); 
                }
                setProductArr([...arrProductTmp])
            })
        }
    }

    useEffect(()=>{
        cart();
    },[arrProduct])

    return(
        <div>
            <section className='cart'>
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
                        <div className={style.cart__table_wrapper}>
                            <table className={style.cart__table}>
                            <thead>
                                <tr>
                                    <th><button>Id заказа <img src={PUBLIC_URL + '/images/arrowDown.png'} alt="#" /></button></th>
                                    <th><button>Наименование <img src={PUBLIC_URL + '/images/arrowDown.png'} alt="#" /></button></th>
                                    <th><button>Бренд <img src={PUBLIC_URL + '/images/arrowDown.png'} alt="#" /></button></th>
                                    <th><button>Категория <img src={PUBLIC_URL + '/images/arrowDown.png'} alt="#" /></button></th>
                                    <th><button>Цена <img src={PUBLIC_URL + '/images/arrowDown.png'} alt="#" /></button></th>
                                    <th><button>Скидка <img src={PUBLIC_URL + '/images/arrowDown.png'} alt="#" /></button></th>
                                    <th><button>Рейтинг <img src={PUBLIC_URL + '/images/arrowDown.png'} alt="#" /></button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {arrProduct.map((item,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.brand}</td>
                                            <td>{item.category}</td>
                                            <td>{item.price} $</td>
                                            <td>{item.discountPercentage} %</td>
                                            <td>{item.rating}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart;