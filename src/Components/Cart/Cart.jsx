import { useState, useEffect } from 'react';

import style from './Cart.module.css'

const getCookie = require('../GetCookie');

const PUBLIC_URL = process.env.PUBLIC_URL;

function Cart(){

    const [arrProduct, setProductArr] = useState([])
    const [flag, setFlag] = useState(true)


    const cart = function(){
        let localElem = localStorage.getItem('storage');
        localElem = JSON.parse(localElem);

        let userCart = localStorage.getItem('user');
		userCart = JSON.parse(userCart);

		userCart.map((item)=>{
			if(item.phone === getCookie('authPhone')){
                let productId = item.ident;
                if(arrProduct.length === 0 && productId !== undefined){
                    let arrProductTmp = arrProduct;
                    localElem.products.map((product)=>{
                        if(productId.includes( String(product.id))){
                            arrProductTmp.push(product); 
                        }
                        setProductArr([...arrProductTmp])
                    })
                }else{
                    return;
                }
            }
        })
    }

    useEffect(()=>{
        cart();
    },[arrProduct])

    const sortPrice = function (event) {
        let arrProductTmp = arrProduct;
        function sortByPrices(arr, flag){
            let cellTableName = event.target.id;

		    if(cellTableName === ''){
			    cellTableName = event.target.parentNode.id
		    }

            if(flag === true){
                arr.sort((a,b)=> a[cellTableName] > b[cellTableName] ? 1 : -1);
                setFlag(false);
            }else{
                arr.sort((a,b)=> a[cellTableName] > b[cellTableName] ? -1 : 1);
                setFlag(true);
            }
        }
        sortByPrices(arrProductTmp, flag);
        setProductArr([...arrProductTmp])
    }

    return(
        <div>
            <section className='cart'>
                <div className="container">
                    <div className={style.cart__wrapper}>
                        <div className={style.cart__info}>
                            <h2>Заказы пользователя {getCookie('authLogin')}</h2>
                            <a href='/'><button>Добавить новый заказ</button></a>
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
                                    <th>Id заказа</th>
                                    <th>Наименование</th>
                                    <th>Бренд</th>
                                    <th>Категория</th>
                                    <th><button id='price' onClick={sortPrice}>Цена <img src={PUBLIC_URL + '/images/arrowDown.png'} alt="#" /></button></th>
                                    <th><button id='discountPercentage' onClick={sortPrice}>Скидка <img src={PUBLIC_URL + '/images/arrowDown.png'} alt="#" /></button></th>
                                    <th><button id='rating' onClick={sortPrice}>Рейтинг <img src={PUBLIC_URL + '/images/arrowDown.png'} alt="#" /></button></th>
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