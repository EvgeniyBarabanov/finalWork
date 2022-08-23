import style from './RulesPay.module.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

function RulesPay() {
	return (
		<section className="RulesPay">
		    <div className="container">
				{/* <div className={style.wrapper}> */}
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
									<h3>Получаем адрес для покупок в магазинах Великобритании </h3>
									<p>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.</p>
								</div>
							</div>
							<div className={style.stepBuy_info_stage}>
								<img src={PUBLIC_URL + '/images/stepBuy2.png'} alt="#" />
								<div className={style.stepBuy_info_stage_wrapper}>
									<h3>Получаем адрес для покупок в магазинах Великобритании </h3>
									<p>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.</p>
								</div>
							</div>
							<div className={style.stepBuy_info_stage}>
								<img src={PUBLIC_URL + '/images/stepBuy3.png'} alt="#" />
								<div className={style.stepBuy_info_stage_wrapper}>
									<h3>Получаем адрес для покупок в магазинах Великобритании </h3>
									<p>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.</p>
								</div>
							</div>
							<div className={style.stepBuy_info_stage}>
								<img src={PUBLIC_URL + '/images/stepBuy4.png'} alt="#" />
								<div className={style.stepBuy_info_stage_wrapper}>
									<h3>Получаем адрес для покупок в магазинах Великобритании </h3>
									<p>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.</p>
								</div>
							</div>
							<div className={style.stepBuy_info_stage}>
								<img src={PUBLIC_URL + '/images/stepBuy5.png'} alt="#" />
								<div className={style.stepBuy_info_stage_wrapper}>
									<h3>Получаем адрес для покупок в магазинах Великобритании </h3>
									<p>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.</p>
								</div>
							</div>
						</div>
					</div>
				{/* </div> */}
			</div>
		</section>
	);
}

export default RulesPay;