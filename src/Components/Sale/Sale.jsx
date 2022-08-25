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
								<p>цены от <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365₽)</span> разделе:</p>
								<p>мужские вещи: <span className={style.sale__store_item_info_boldGreen}>CLEARANCE</span></p>
								<p>женские: <span className={style.sale__store_item_info_boldGreen}>CLEARANCE</span></p>
								<p>качественные десткие вещи на <span className={style.sale__store_item_info_boldGreen}>Albercombie kids</span></p>
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
								<p>Ботинки от<span className={style.sale__store_item_info_boldBlack}>£7.99 (3365₽)</span></p>
								<p>Зимние шапки за <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365₽)</span></p>
								<button>Только выкуп с оператором <img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
							</div>
						</div>
						
						<div className={style.sale__store_item}>		
							<div className={style.sale__store_item_image}>
							 	<img src={PUBLIC_URL + '/images/poloRalphLauren.png'} alt="#" />
							</div>

							<div className={style.sale__store_item_info}>
								<h3>Polo Ralph Lauren</h3>
								<p><span className={style.sale__store_item_info_boldGreen}>Рубкашка</span> за <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365₽)</span></p>
								<p><span className={style.sale__store_item_info_boldGreen}>Худи</span> за <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365₽)</span></p>
								<p><span className={style.sale__store_item_info_boldGreen}>Свитшот с лого</span> за <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365₽)</span></p>
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
								<p>цены от <span className={style.sale__store_item_info_boldBlack}>£7.99 (3365₽)</span> разделе:</p>
								<p>мужские вещи: <span className={style.sale__store_item_info_boldGreen}>CLEARANCE</span></p>
								<p>женские: <span className={style.sale__store_item_info_boldGreen}>CLEARANCE</span></p>
								<button>Только выкуп с оператором <img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
							</div>
						</div> 

					</div>
				</div>
			</div> 
		</section>
	);
}

export default Sale;