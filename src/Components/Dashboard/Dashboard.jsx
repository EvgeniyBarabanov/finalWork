import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './Dashboard.module.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

function Dashboard() {
	const [allProducts, setAllProducts] = useState({products:[]});

	const transform = useRef();

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

	const productCategory = function(productCategory){
		let productTmp = []
		productCategory.products.map((item)=>{
			if(!productTmp.includes(item.category)){
				productTmp.push(item.category)
			}
		});
		return productTmp;
	}

	const cnahgeSlide = function(){
		let slide = transform.current.style.transform;

		if(!slide) slide = 0;
		else slide = Math.abs(slide.replace('translateX(','').replace('%)', ''));
	
		slide += 100;

		let stop = (transform.current.children.length * 100) - 100;

		if (slide > stop) slide = 0
		console.log(stop);

		transform.current.style = `transform: translateX(-${slide}%);`;
	}

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
						<div className={style.sliderCategory}>
							<ul ref={transform} className={style.sliderCategory_list}>
								{productCategory(allProducts).map((item, index)=>{
									return(
										<li key={index} className={style.buy__product_item}>
											<button className={style.butt}>{item}</button>
										</li>
									);
								})}
							</ul>
							<button onClick={cnahgeSlide} className={style.btn_prew}><img src={PUBLIC_URL + '/images/arrowLeft.png'} alt="#" /></button>
							<button onClick={cnahgeSlide} className={style.btn_next}><img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
						</div>
					</div>
					
				</div>
			</section>

		</div>
	);



}

export default Dashboard;


{/* <ul className={style.buy__product_list}>
						{allProducts.products.map((item, index)=>{
							return(
								<li key={index} className={style.buy__product_item}>
									<Link to="/product">
										<p>{item.category}</p>
									</Link>
								</li>
							);
						})}
</ul> */}


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