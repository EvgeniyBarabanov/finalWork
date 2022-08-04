import style from './Footer.module.css';


const PUBLIC_URL = process.env.PUBLIC_URL;

function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className={style.footer__subsubscription}>
                    <p>Подпишитеть и будьте в курсе всех скидок и акций магазинов Великобритании!</p>
                    <div>
                        <p><img src={PUBLIC_URL + '/images/email_icon.png'} alt="#" />Введите ваш Email</p>
                        <input type="email" name="email" />
                    </div>
                    <button>Подписаться</button>
                </div>
                <div>
                    <ul className={style.footer__list}>
                        <li>
                            <ul className={style.footer__list_messengers}>
                                <li><a href="/"><img src={PUBLIC_URL + '/images/logo.png'} alt="#" /></a></li>
                                <li><a href="/"><img src={PUBLIC_URL + '/images/WS_icon.png'} alt="#" /></a></li>
                                <li><a href="/"><img src={PUBLIC_URL + '/images/VB_icon.png'} alt="#" /></a></li>
                                <li><a href="/"><img src={PUBLIC_URL + '/images/chat_icon.png'} alt="#" /></a></li>
                            </ul>
                        </li>
                        <li>
                        <ul>О компании
                            <li><a href="/">Услуги</a></li>
                            <li><a href="/">Цены</a></li>
                            <li><a href="/">Отзывы</a></li>
                            <li><a href="/">Контакты</a></li>
                            <li><a href="/">Вакансии</a></li>
                            <li><a href="/">Соглашение о персональных данных</a></li>
                            <li><a href="/">Условия пользования</a></li>
                        </ul>
                        </li>
                        <li>
                        <ul>Полезное
                            <li><a href="/">Как работает наш сервис</a></li>
                            <li><a href="/">Как покупать с оператором</a></li>
                            <li><a href="/">Ответы на частые вопросы</a></li>
                            <li><a href="/">Популярные магазины</a></li>
                            <li><a href="/">Черный список магазинов</a></li>
                            <li><a href="/">Актуальные распродажи</a></li>  
                        </ul>
                        </li>
                        <li>
                        <ul>Спецпроекты
                            <li><a href="/">50% на первую доставку</a></li>
                            <li><a href="/">Скидки для постоянных клиeнтов</a></li>
                            <li><a href="/">Реферальная программа</a></li>
                            <li><a href="/">Кэшбек Mr. Rebates и Rakuten</a></li>
                            <li><a href="/">Stop Fraud</a></li>
                        </ul>
                        </li>
                    </ul>
                    <hr />
                    <p className={style.footer__copyright}>© 2021 Okeypost . Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;