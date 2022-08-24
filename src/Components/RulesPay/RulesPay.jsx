import style from './RulesPay.module.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

function RulesPay() {
	return (
		<section className="RulesPay">
		    <div className="container">
				<div className={style.promo}>
					<div className={style.promo_info}>
						<p>Главная / Как покупать</p>
						<h2>Научим покупать в Великобритании! </h2>
						<span>и экономить до 70%</span>
					</div>
					<div className={style.promo_btn}>
						<button>Получить адрес в UK</button>
					</div>
				</div>
				<div className={style.stepBuy}>
					<h2>Покупать в Великобритании очень просто</h2>
					<p>Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем и отправим их к вам домой.</p>
					<div className={style.stepBuy_info}>
						<div className={style.stepBuy_info_stage}>
							<img src={PUBLIC_URL + '/images/stepBuy1.png'} alt="#" />
							<div className={style.stepBuy_info_stage_wrapper}>
								<h3 className={style.test}>Получаем адрес для покупок в магазинах Великобритании </h3>
								<p>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.</p>
							</div>
						</div>
						<div className={style.stepBuy_info_stage}>
							<img src={PUBLIC_URL + '/images/stepBuy2.png'} alt="#" />
							<div className={style.stepBuy_info_stage_wrapper}>
								<h3 className={style.test}>Идём за покупками в онлайн-магазины</h3>
								<p>Выбираем нужные товары в магазинах Англии. Расплачиваемся, как обычно, в качестве адреса доставки указываем координаты одного из складов Okeypost. Оформить покупки можно самостоятельно или с нашей помощью. Вот список того, что покупать нельзя.</p>
							</div>
						</div>
						<div className={style.stepBuy_info_stage}>
							<img src={PUBLIC_URL + '/images/stepBuy3.png'} alt="#" />
							<div className={style.stepBuy_info_stage_wrapper}>
								<h3 className={style.test}>Следим за перемещением посылки до склада</h3>
								<p>После оформление заказа магазин пришлет трек-номер посылки на ваш e-mail и отправит вещи на наш склад. Через 5-7 дней покупки придут к нам, мы поместим их в специальное хранилище, закрепленное за вашим аккаунтом.</p>
							</div>
						</div>
						<div className={style.stepBuy_info_stage}>
							<img src={PUBLIC_URL + '/images/stepBuy4.png'} alt="#" />
							<div className={style.stepBuy_info_stage_wrapper}>
								<h3 className={style.test}>Оплачиваем доставку и покупки отправляются домой</h3>
								<p>Мы сообщим, когда ваши покупки поступят на склад. Вы сможете заказать что-то еще в других магазинах и отправить все одной посылкой (так выгоднее). До 30 дней покупки будут храниться бесплатно. Когда все товары поступили на склад, выбирайте способ доставки, мы надежно все упакуем и отправим вам, сообщив трек-номер.</p>
							</div>
						</div>
						<div className={style.stepBuy_info_stage}>
							<img src={PUBLIC_URL + '/images/stepBuy5.png'} alt="#" />
							<div className={style.stepBuy_info_stage_wrapper}>
								<h3 className={style.test}>Получаем посылку и спешим сделать новый заказ</h3>
								<p>Примерно через 2 недели посылка приедет к вам домой, в пункт выдачи заказов или на почту. Получаем покупки и радуемся!</p>
							</div>
						</div>
						<div className={style.promo_btn_down}>
							<button>Получить адрес в UK</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default RulesPay;