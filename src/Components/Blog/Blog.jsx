import style from './Blog.module.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

function Blog() {
	return (
		<section className="blog">
			<div className='container'>
				<div className={style.blog__info}>
					<div className={style.blog__info_text}>
						<p>Главная / Блог</p>
						<h2>Блог</h2>
					</div>
				</div>

				<div className={style.blog__articles}>
					<a href="$" className={style.blog__articles_item}>
						<div className={style.blog__articles_item_wrapper}>
							<img src={PUBLIC_URL + '/images/urbanStore.png'} alt="#" />
							<h3>Интернет-магазин Urban Outfitters в UK: обзор</h3>
							<div className={style.blog__articles_item_time}>
								<p>22.10.2021</p>
								<img src={PUBLIC_URL + '/images/time_icon.png'} alt="#" />
								<span>Читать: 8 минут</span>
							</div>
						</div>
					</a>
					
					<a href="$" className={style.blog__articles_item}>
						<div className={style.blog__articles_item_wrapper}>
							<img src={PUBLIC_URL + '/images/overstock_icon.png'} alt="#" />
							<h3>Overstock. Брендовые товары по доступным ценам</h3>
							<div className={style.blog__articles_item_time}>
								<p>22.10.2021</p>
								<img src={PUBLIC_URL + '/images/time_icon.png'} alt="#" />
								<span>Читать: 8 минут</span>
							</div>
						</div>
					</a>

					<a href="$" className={style.blog__articles_item}>
						<div className={style.blog__articles_item_wrapper}>
							<img src={PUBLIC_URL + '/images/skechers_icon.png'} alt="#" />
							<h3>Skechers с Amazon. Удобная обувь для всей семьи</h3>
							<div className={style.blog__articles_item_time}>
								<p>22.10.2021</p>
								<img src={PUBLIC_URL + '/images/time_icon.png'} alt="#" />
								<span>Читать: 8 минут</span>
							</div>
						</div>
					</a>

					<a href="$" className={style.blog__articles_item}>
						<div className={style.blog__articles_item_wrapper}>
							<img src={PUBLIC_URL + '/images/gift_icon.png'} alt="#" />
							<h3>16 лучших подарков с Амазона в 2021 году</h3>
							<div className={style.blog__articles_item_time}>
								<p>22.10.2021</p>
								<img src={PUBLIC_URL + '/images/time_icon.png'} alt="#" />
								<span>Читать: 8 минут</span>
							</div>
						</div>
					</a>

					<a href="$" className={style.blog__articles_item}>
						<div className={style.blog__articles_item_wrapper}>
							<img src={PUBLIC_URL + '/images/target_icon.png'} alt="#" />
							<h3>Target — супермаркет с ценами от 300 рублей!</h3>
							<div className={style.blog__articles_item_time}>
								<p>22.10.2021</p>
								<img src={PUBLIC_URL + '/images/time_icon.png'} alt="#" />
								<span>Читать: 8 минут</span>
							</div>
						</div>
					</a>

					<a href="$" className={style.blog__articles_item}>
						<div className={style.blog__articles_item_wrapper}>
							<img src={PUBLIC_URL + '/images/ripndip_icon.png'} alt="#" />
							<h3>Английский RIPNDIP. Покупаем самовыражение</h3>
							<div className={style.blog__articles_item_time}>
								<p>22.10.2021</p>
								<img src={PUBLIC_URL + '/images/time_icon.png'} alt="#" />
								<span>Читать: 8 минут</span>
							</div>
						</div>
					</a>

					<a href="$" className={style.blog__articles_item}>
						<div className={style.blog__articles_item_wrapper}>
							<img src={PUBLIC_URL + '/images/nautica_icon.png'} alt="#" />
							<h3>Nautica. Элитные товары из Англии по низким ценам</h3>
							<div className={style.blog__articles_item_time}>
								<p>22.10.2021</p>
								<img src={PUBLIC_URL + '/images/time_icon.png'} alt="#" />
								<span>Читать: 8 минут</span>
							</div>
						</div>
					</a>

					<a href="$" className={style.blog__articles_item}>
						<div className={style.blog__articles_item_wrapper}>
							<img src={PUBLIC_URL + '/images/forever_icon.png'} alt="#" />
							<h3>Forever 21 - покупаем джинсы за 1 500 рублей</h3>
							<div className={style.blog__articles_item_time}>
								<p>22.10.2021</p>
								<img src={PUBLIC_URL + '/images/time_icon.png'} alt="#" />
								<span>Читать: 8 минут</span>
							</div>
						</div>
					</a>

					<a href="$" className={style.blog__articles_item}>
						<div className={style.blog__articles_item_wrapper}>
							<img src={PUBLIC_URL + '/images/balenciaga_icon.png'} alt="#" />
							<h3>Как купить Balenciaga на 30 000 рублей дешевле?</h3>
							<div className={style.blog__articles_item_time}>
								<p>22.10.2021</p>
								<img src={PUBLIC_URL + '/images/time_icon.png'} alt="#" />
								<span>Читать: 8 минут</span>
							</div>
						</div>
					</a>

					<a href="$" className={style.blog__articles_item}>
						<div className={style.blog__articles_item_wrapper}>
							<img src={PUBLIC_URL + '/images/louisVuitton_icon.png'} alt="#" />
							<h3>Топ-7 самых дорогих сумок Louis Vuitton</h3>
							<div className={style.blog__articles_item_time}>
								<p>22.10.2021</p>
								<img src={PUBLIC_URL + '/images/time_icon.png'} alt="#" />
								<span>Читать: 8 минут</span>
							</div>
						</div>
					</a>

					<a href="$" className={style.blog__articles_item}>
						<div className={style.blog__articles_item_wrapper}>
							<img src={PUBLIC_URL + '/images/BHCosmeticsGalaxy_icon.png'} alt="#" />
							<h3>Интернет-магазин Urban Outfitters в UK: обзор</h3>
							<div className={style.blog__articles_item_time}>
								<p>22.10.2021</p>
								<img src={PUBLIC_URL + '/images/time_icon.png'} alt="#" />
								<span>Читать: 8 минут</span>
							</div>
						</div>
					</a>

					<a href="$" className={style.blog__articles_item}>
						<div className={style.blog__articles_item_wrapper}>
							<img src={PUBLIC_URL + '/images/vans_icon.png'} alt="#" />
							<h3>Крутые кеды, которые не выйдут из моды никогда!</h3>
							<div className={style.blog__articles_item_time}>
								<p>22.10.2021</p>
								<img src={PUBLIC_URL + '/images/time_icon.png'} alt="#" />
								<span>Читать: 8 минут</span>
							</div>
						</div>
					</a>
				</div>

				<div className={style.blog__store_slider}>
						<button><img src={PUBLIC_URL + '/images/arrowLeft.png'} alt="#" /></button>
						<button>1</button>
						<button>2</button>
						<span>...</span>
						<button>23</button>
						<button>24</button>
						<button><img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
					</div>
			</div>
		</section>
	);
}

export default Blog;