import style from './Prices.module.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

function Prices() {
	return (
		<section className="prices">
		    <div className="container">
				<div className={style.prices__info}>
					<div className={style.prices__info_text}>
						<p>Главная / Цены </p>
						<h2>Услуги доставки из Великобритании</h2>
					</div>
				</div>

				<div className={style.prices__service}>
					<div className={style.prices__service_item}>
						<div className={style.prices__service_item_image}>
							<img src={PUBLIC_URL + '/images/service_icon1.png'} alt="#" />
						</div>
						<div className={style.prices__service_item_info}>
							<h3>Ваш личный адрес для покупок</h3>
							<p>На нашем современном автоматизированном складе в безналоговом Делавэре</p>
						</div>
						<div className={style.prices__service_item_btn}>
							<button>Бесплатно</button>
						</div>
					</div>

					<div className={style.prices__service_item}>
						<div className={style.prices__service_item_image}>
							<img src={PUBLIC_URL + '/images/service_icon2.png'} alt="#" />
						</div>
						<div className={style.prices__service_item_info}>
							<h3>Объединение посылок в одну</h3>
							<p>Ведь отправлять несколько посылок в одной коробке гораздо выгоднее, чем по одной</p>
						</div>
						<div className={style.prices__service_item_btn}>
							<button>от £10.00</button>
						</div>
					</div>

					<div className={style.prices__service_item}>
						<div className={style.prices__service_item_image}>
							<img src={PUBLIC_URL + '/images/service_icon3.png'} alt="#" />
						</div>
						<div className={style.prices__service_item_info}>
							<h3>Усиленная упаковка по запросу</h3>
							<p>Мы дополнительно упакуем вашу посылку в пленку, коробку с двойными стенками.</p>
						</div>
						<div className={style.prices__service_item_btn}>
							<button>от £0.25 </button>
						</div>
					</div>

					<div className={style.prices__service_item}>
						<div className={style.prices__service_item_image}>
							<img src={PUBLIC_URL + '/images/service_icon4.png'} alt="#" />
						</div>
						<div className={style.prices__service_item_info}>
							<h3>Хранение входящих посылок 30 дней</h3>
							<p>Чем больше срок хранения посылок у нас на складе – тем больше вы сможете собрать</p>
						</div>
						<div className={style.prices__service_item_btn}>
							<button>Бесплатно</button>
						</div>
					</div>
				</div>

				<div className={style.prices__stock}>
					<h2>Услуги склада</h2>
					<div className={style.prices__stock_wrapper}>
						<div className={style.prices__stock_item}>
							<p>Консолидация </p>
							<span>£1.00</span>
						</div>

						<div className={style.prices__stock_item}>
							<p>Дополнительная упаковка</p>
							<span>£5.00</span>
						</div>

						<div className={style.prices__stock_item}>
							<p>Заполнение декларации</p>
							<span>£1.00</span>
						</div>

						<div className={style.prices__stock_item}>
							<p>Заполнение декларации</p>
							<span>£1.00</span>
						</div> 

						<div className={style.prices__stock_item}>
							<p>Упаковка xрупкиx предметов</p>
							<span>£6.00</span>
						</div> 

						<div className={style.prices__stock_item}>
							<p>Разделение заказа</p>
							<span>£2.00</span>
						</div> 

						<div className={style.prices__stock_item}>
							<p>Сборка исходящей посылки вне очереди или экспресс сборка</p>
							<span>£5.00</span> 
						</div> 

						<div className={style.prices__stock_item}>
							<p>Фото содержимого входящей посылки </p>
							<span>£1.00 за 1 фото</span> 
						</div> 

						<div className={style.prices__stock_item}>
							<p>Возврат вещей в магазин</p>
							<span>£10 + почтовые расходы</span> 
						</div> 

						<div className={style.prices__stock_item}>
							<p>Проверка техники на работоспособность </p> 
							<span>£10</span>
						</div> 

						<div className={style.prices__stock_item}>
							<p>Удаление инвойса</p>
							<span>Бесплатно</span>
						</div> 

						<div className={style.prices__stock_item}>
							<p>Дополнительная упаковка</p>
							<span>По договоренности</span>
						</div> 
					</div>
				</div>

				<div className={style.prices__orderNow}>
					<div className={style.prices__orderNow_image}>
						<img src={PUBLIC_URL + '/images/orderNow_logo.png'} alt="#" />
					</div>
					<div className={style.prices__orderNow_info}>
						<h3>Попробуйте заказывать с оператором прямо сейчас. Пришлите ссылку на товар, его купят и доставят на наш склад в кратчайшие сроки.</h3>
						<p><img src={PUBLIC_URL + '/images/orderNow_link_logo.png'} alt="#" />Введите ссылку на товар</p>
						<input type="text" />
						<div className={style.prices__orderNow_infoBtn}>
							<button>Отправить</button>
							<span>Нажимая на кнопку вы подтверждаете согласие с правилами предоставления услуги и политикой конфиденциальности</span>
						</div>
					</div>
				</div>

				<div className={style.prices__insurance}>
					<h2>Страхование</h2>
					<div className={style.prices__insurance_wrapper}>
						<div className={style.prices__insurance_item}>
							<p>Дополнительное страхование</p>
							<span>5% от суммы на которую xотите застраxовать</span>
						</div>

						<div className={style.prices__insurance_item}>
							<p>Почта России и ЕМС</p>
							<span>Застраxовано по умолчанию на £50.00</span>
						</div>

						<div className={style.prices__insurance_item}>
							<p>Мелкие пакеты</p>
							<span>Застраxовано на £20.00</span>
						</div>
					</div>
				</div>

				<div className={style.prices__addPack}>
					<h2>Дополнительная упаковка</h2>
					<div className={style.prices__addPack_wrapper}>
						<div className={style.prices__addPack_item}>
							<p>Многослойная пленка</p>
							<span>£3.99</span>
						</div>

						<div className={style.prices__addPack_item}>
							<p>Упаковка в пакет</p>
							<span>£1.99</span>
						</div>

						<div className={style.prices__addPack_item}>
							<p>Упаковка в коробку с двойными стенками</p>
							<span>£4.99</span>
						</div>

						<div className={style.prices__addPack_item}>
							<p>Наклейка “Обращаться с осторожностью”</p>
							<span>£0.25</span>
						</div>

						<div className={style.prices__addPack_item}>
							<p>Наклейка “Хрупкий груз”</p>
							<span>£0.25</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Prices;