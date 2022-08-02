import { createContext, useEffect, useRef, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SelectCategory from '../SelectCategory/SelectCategory';
import style from './Dashboard.module.css';

export const MainContext = createContext();

const PUBLIC_URL = process.env.PUBLIC_URL;


function Dashboard() {
	const [allProducts, setAllProducts] = useState({products:[]});

	const transform = useRef();

	const getData = function(){
		if(localStorage.length > 0){
			if(allProducts.products.length === 0){
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

	const productCategory = function(allProducts){
		let productTmp = [];
		allProducts.products.map((item)=>{
			if(!productTmp.includes(item.category)){
				productTmp.push(item.category)
			}
		});
		return productTmp;
	}

	const changeSlide = function(event){
		let dir = event.target.parentNode.id

		let slide = transform.current.style.transform;

		if(!slide) slide = 0;
		else slide = Math.abs(slide.replace('translateX(','').replace('%)', ''));
		
		if(dir === "next") slide += 12.5;
		else slide -= 12.5;

		let stop = (transform.current.children.length * 12.5) - 100;

		if (slide > stop) slide = 0;

		if(dir === "prew" && slide < 0){
			slide = stop;
		}

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
							<div className={style.sliderCategory_wrapper}>
								<ul ref={transform} className={style.sliderCategory_list}>
									{productCategory(allProducts).map((categories, index)=>{
										let result = allProducts.products.find(item=> item.category === categories)
										return(
											<li key={index} className={style.buy__product_item}>
												<Link to={'/' + categories}  className={style.selectCategory}>
													<img className={style.imageCategory} src={result.images[0]} alt="#" />
													<p>{categories}</p>
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
							<button id='prew' onClick={changeSlide} className={style.btn_prew}><img src={PUBLIC_URL + '/images/arrowLeft.png'} alt="#" /></button>
							<button id='next' onClick={changeSlide} className={style.btn_next}><img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
						</div>
					</div>
					<div>
						<MainContext.Provider value={ {allProducts} }>
							<Routes>
								{productCategory(allProducts).map((categories, index)=>{
									return(
										<Route key={index} path={'/' + categories} element={<SelectCategory category={categories} />} />
									)
								})}
							</Routes>
						</MainContext.Provider>
					</div>
				</div>
			</section>

		</div>
	);



}

export default Dashboard;