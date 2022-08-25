import style from './Sale.module.css'

const PUBLIC_URL = process.env.PUBLIC_URL;

function Sale() {
	return (
		<section className="sale">
			<div className="container">
				<div className={style.sale__info}>
					<div className={style.sale__info_text}>
						<p>Главная / Распродажи</p>
						<h2>Распродажи</h2>
						<span>ранний доступ к распродажам в магазинах</span>
					</div>

					<div className={style.sale__info_btn}>
						<button>Получить адрес в UK</button>
					</div>
				</div>

				<div className={style.sale__store}>
					<h2>Black Friday Early Access ранний доступ к распродажам в магазинах Великобритании!</h2>
					<div className={style.sale__store_item_wrapper}>

						<div className={style.sale__store_item}>
							<div className={style.sale__store_item_image}>
							 	<img src={PUBLIC_URL + '/images/abercrombieFitch.png'} alt="#" />
							</div>

							<div className={style.sale__store_item_info}>
								<h3>Abercrombie Fitch</h3>
								<p>цены от <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365P)</span> разделе:</p>
								<p>мужские вещи: <span className={style.sale__store_item_info_boldGreen}>CLEARANCE</span></p>
								<p>женские: <span className={style.sale__store_item_info_boldGreen}>CLEARANCE</span></p>
								<p>качественные детские вещи на <span className={style.sale__store_item_info_boldGreen}>Albercombie kids</span></p>
								<button>Только выкуп с оператором <img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
							</div>
						</div>

						<div className={style.sale__store_item}>		
							<div className={style.sale__store_item_image}>
							 	<img src={PUBLIC_URL + '/images/timberland.png'} alt="#" />
							</div>

							<div className={style.sale__store_item_info}>
								<h3>Timberland</h3>
								<p><span className={style.sale__store_item_info_boldBlack}>NEW!</span></p>
								<p>Коллаб <span className={style.sale__store_item_info_boldGreen}>Tommy Hilfiger x Timberland!</span></p>
								<p>Ботинки от <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365)</span></p>
								<p>Зимние шапки за <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365P)</span></p>
								<button>Только выкуп с оператором <img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
							</div>
						</div>
						
						<div className={style.sale__store_item}>		
							<div className={style.sale__store_item_image}>
							 	<img src={PUBLIC_URL + '/images/poloRalphLauren.png'} alt="#" />
							</div>

							<div className={style.sale__store_item_info}>
								<h3>Polo Ralph Lauren</h3>
								<p><span className={style.sale__store_item_info_boldGreen}>Рубкашка</span> за <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365P)</span></p>
								<p><span className={style.sale__store_item_info_boldGreen}>Худи</span> за <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365P)</span></p>
								<p><span className={style.sale__store_item_info_boldGreen}>Свитшот с лого</span> за <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365P)</span></p>
								<p>До - <span className={style.sale__store_item_info_boldBlack}>40%</span> в разделе SALE</p>
								<button>Только выкуп с оператором <img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
							</div>
						</div>

						<div className={style.sale__store_item}>		
							<div className={style.sale__store_item_image}>
							 	<img src={PUBLIC_URL + '/images/hollisterCo.png'} alt="#" />
							</div>

							<div className={style.sale__store_item_info}>
								<h3>Hollister Co.</h3>
								<p>цены от <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365P)</span> разделе:</p>
								<p>мужские вещи: <span className={style.sale__store_item_info_boldGreen}>CLEARANCE</span></p>
								<p>женские: <span className={style.sale__store_item_info_boldGreen}>CLEARANCE</span></p>
								<button>Только выкуп с оператором <img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
							</div>
						</div> 

						<div className={style.sale__store_item}>		
							<div className={style.sale__store_item_image}>
							 	<img src={PUBLIC_URL + '/images/michaelKars.png'} alt="#" />
							</div>

							<div className={style.sale__store_item_info}>
								<h3>Michael Kars</h3>
								<p><span className={style.sale__store_item_info_boldBlack}>Новая коллекция!</span></p>
								<p><span className={style.sale__store_item_info_boldBlack}>Michael Kors x 007 (James Bond)</span></p>
								<p><span className={style.sale__store_item_info_boldBlack}>HOLIDAY HEAD START</span></p>
								<p><span className={style.sale__store_item_info_boldBlack}>-60%</span> на сумки, обувь и одежду</p>
								<button>В магазин <img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
							</div>
						</div> 

						<div className={style.sale__store_item}>		
							<div className={style.sale__store_item_image}>
							 	<img src={PUBLIC_URL + '/images/saks.png'} alt="#" />
							</div>

							<div className={style.sale__store_item_info}>
								<h3>Аутлет Saks OFF 5TH</h3>
								<p><span className={style.sale__store_item_info_boldBlack}>Black Friday Early Access</span></p>
								<p>Брендовые шапки, шарфы и перчатки<span className={style.sale__store_item_info_boldBlack}> -60% OFF</span></p>
								<p>Shop Pajar, Sorel, UGG, Calvin Klein Jeans, Tommy Hilfiger</p>
								<button>Только выкуп с оператором<img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
							</div>
						</div>

						<div className={style.sale__store_item}>		
							<div className={style.sale__store_item_image}>
							 	<img src={PUBLIC_URL + '/images/victoriasSecret.png'} alt="#" />
							</div>

							<div className={style.sale__store_item_info}>
								<h3>Victoria's Secret</h3>
								<p><span className={style.sale__store_item_info_boldBlack}>Лосьоны и мисты за £7.99 (3365P)</span></p>
								<p>Халаты за <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365P)</span></p>
								<p><span className={style.sale__store_item_info_boldBlack}>Потрать £7.99 (3365P)</span> - получи <span className={style.sale__store_item_info_boldBlack}>купон на $25</span> на следующий заказ</p>
								<button>В магазин<img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
							</div>
						</div>

						<div className={style.sale__store_item}>		
							<div className={style.sale__store_item_image}>
							 	<img src={PUBLIC_URL + '/images/leviCom.png'} alt="#" />
							</div>

							<div className={style.sale__store_item_info}>
								<h3>Levi.com</h3>
								<p><span className={style.sale__store_item_info_boldGreen}>Джинсы</span> от <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365P)</span></p>
								<p><span className={style.sale__store_item_info_boldBlack}>Скидка 30% на заказы от $100 с кодом TREAT30</span></p>
								<button>В магазин<img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
							</div>
						</div>

						<div className={style.sale__store_item}>		
							<div className={style.sale__store_item_image}>
							 	<img src={PUBLIC_URL + '/images/ugg.png'} alt="#" />
							</div>

							<div className={style.sale__store_item_info}>
								<h3>UGG - вход с VPN</h3>
								<p>Ботинки UGG от <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365P)</span> в разделе <span className={style.sale__store_item_info_boldGreen}>SALE</span></p>
								<p><span className={style.sale__store_item_info_boldGreen}>Мужские угги</span> за <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365P)</span></p>
								<p><span className={style.sale__store_item_info_boldGreen}>Слипперы</span> за <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365P)</span></p>
								<button>Только выкуп с оператором<img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
							</div>
						</div>

						<div className={style.sale__store_item}>		
							<div className={style.sale__store_item_image}>
							 	<img src={PUBLIC_URL + '/images/newBalance.png'} alt="#" />
							</div>

							<div className={style.sale__store_item_info}>
								<h3>New Balance</h3>
								<p><span className={style.sale__store_item_info_boldBlack}>Вход с VPN</span></p>
								<p><span className={style.sale__store_item_info_boldBlack}>30%</span>на некоторые модели</p>
								<p><span className={style.sale__store_item_info_boldBlack}>Бесплатная</span> доставка <span className={style.sale__store_item_info_boldBlack}>$50+</span></p>
								<button>Только выкуп с оператором<img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
							</div>
						</div>
					</div>

					<div className={style.sale__store_slider}>
						<button><img src={PUBLIC_URL + '/images/arrowLeft.png'} alt="#" /></button>
						<button>1</button>
						<button>2</button>
						<span>...</span>
						<button>23</button>
						<button>24</button>
						<button><img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
					</div>
				</div>
			</div> 
		</section>
	);
}

export default Sale;