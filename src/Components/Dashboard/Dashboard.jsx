import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './Dashboard.module.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

function Dashboard() {
	const [allProducts, setAllProducts] = useState({products:[]});

	const getData = function(){
		if(localStorage.length > 0){
			if(allProducts.products.length == 0){
				let localElem = localStorage.getItem('storage');
        		localElem = JSON.parse(localElem);
				setAllProducts(localElem);
			}
		}else{
			fetch('https://dummyjson.com/products?skip=0&limit=100')
        	    .then(res=>res.json())
        	    .then(dataJSON=> {
						localStorage.setItem('storage', JSON.stringify(dataJSON))
						let localElem = localStorage.getItem('storage');
        				localElem = JSON.parse(localElem);
						setAllProducts(localElem);
				})
		}
	};

	useEffect(()=>{
		getData();
	})

	return (
		<div className={style.dashboard}>
		
			<section className={style.delivery}>
				<div className='container'>
					<div className={style.delivery_info}>
						<div className={style.delivery_info_description}>
							<h2>Доставка товаров из Великобритании в Россию</h2>
							<p>Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.</p>
							<button>Получить адрес в UK</button>
						</div>
						<div className={style.delivery_info_image}>
							<img src={PUBLIC_URL + '/images/deliveryImage.png'} alt="#" />
						</div>
					</div>
				</div>
			</section>

			<section className={style.buy}>
				<div className="container">
					<div>
						<h3>Насколько выгодно у нас покупать?</h3>
						<ul className={style.buy__product_list}>
						{allProducts.products.map((item, index)=>{
							return(
								<li key={index} className={style.buy__product_item}>
									<Link to="/product">
										<p>{item.category}</p>
									</Link>
								</li>
							);
						})}
					</ul>
					</div>
				</div>
			</section>

		</div>
	);



}

export default Dashboard;




{/* <ul className={style.product__list}>
						{allProducts.products.map((item, index)=>{
							return(
								<li key={index} className={style.product__item}>
									<Link to="/product">
										<h2>{item.id}</h2>
										<p>{item.title}</p>
										<img src={item.images[0]} alt="" />
										<p>{item.category}</p>
									</Link>
								</li>
							);
						})}
					</ul>	 */}