import { useState, useContext, useRef } from 'react';
import { MainContext } from '../Dashboard/Dashboard';

import style from './SelectCategory.module.css';

const getCookie = require('../GetCookie');

const PUBLIC_URL = process.env.PUBLIC_URL;

function SelectCategory(props) {
	const {allProducts} = useContext(MainContext);

	const [cartChecked, setCartChecked] = useState([])

	const direction = useRef();


	const changeSlide = function(event){
		let dir = event.target.id;

		if(dir === ''){
			dir = event.target.parentNode.id
		}
		if(dir === "next"){
			let firstChild = direction.current.firstChild;
			direction.current.append(firstChild);
			for(let child of direction.current.children[1].children[1].children){
				child.classList.remove(style.prewSlide);
				child.classList.add(style.nextSlide);
			}
		}else{
			let lastChild = direction.current.lastChild;
			direction.current.prepend(lastChild);
			for(let child of direction.current.children[1].children[1].children){
				child.classList.remove(style.nextSlide);
				child.classList.add(style.prewSlide);
			}
		}
	}

	const addToCart = function(){
		let currentProduct = direction.current.firstChild.nextSibling;
		let idProduct = [currentProduct.id];


		let userCart = localStorage.getItem('user');
		userCart = JSON.parse(userCart);
		userCart.map((item)=>{
			if(item.phone === getCookie('authPhone')){
				if(item.ident === undefined){
					item.ident = idProduct;
					setCartChecked([...idProduct])
				}else if(item.ident !== undefined){
					if(item.ident.includes(currentProduct.id)){
						return;
					}else{
						item.ident.push(currentProduct.id);
						setCartChecked([...item.ident])
					}
				}
			}
		})
		userCart = JSON.stringify(userCart);
		localStorage.setItem('user', userCart);
	}

	const showButtom = function(id){
		let userCart = localStorage.getItem('user');
		userCart = JSON.parse(userCart);

		userCart.map((item)=>{
			if(item.phone === getCookie('authPhone')){
				if(cartChecked.length === 0 && item.ident !== undefined){
					setCartChecked([...item.ident])
				}
			}
		})

		if(!getCookie("auth")){
			return(
				<button className={style.sliderProduct__addToCart}>Для добавления в корзину авторизуйтесь</button>
			)
		}
		if(cartChecked.filter((currentId)=>{
			return currentId == id
		}).length > 0){
			return (
				<button onClick={()=>{
				}} className={style.sliderProduct__addToCart}>Добавлено</button>
			)
		}else{
			return (
				<button onClick={addToCart} className={style.sliderProduct__addToCart}>Добавить в корзину</button>
			)
		}
	}

	return (
		<div className="selectCategory">
			<div className="container">
				<div className={style.sliderProduct}>
					<div className={style.sliderProduct__wrapper}>
						<ul ref={direction} className={style.sliderProduct__list}>
							{allProducts.products.map((item, id)=>{
								if(item.category === props.category){	
									return(
										<li key={id} id={item.id} className={style.sliderProduct__item}>
											<button id='prew' onClick={changeSlide} className={style.btn_prew}><img src={PUBLIC_URL + '/images/arrowLeft.png'} alt="#" /></button>
												<div className={style.sliderProduct__item_wrapper}>
													<div className={style.sliderProduct__item_wrapper_elem}>
														<div className={style.images_container}>
															<img className={style.image} src={item.images[0]} alt="#" />
														</div>

														<div className={style.sliderProduct__item_info}>
															<div className={style.sliderProduct__item_info_title}>
																<p>{item.title}</p>
																<p>{item.price + "$"}</p>
															</div>
															<div className={style.sliderProduct__item_info_rating}>
																<div style={{background: `linear-gradient(90deg, #00C97B ${item.rating/0.05}%, #ffffff 0%`}} className={style.images_mask}></div>
																<img className={style.sliderProduct_item_info_stars} style={{backgroundColor: 'transparent'}} src={PUBLIC_URL + '/images/stars.png'} alt="#" />
															</div>
															<div className={style.sliderProduct__item_info_description}>
																<p>{item.description}</p>
															</div>
															{showButtom(item.id) }
														</div>
													</div>
												</div>
											<button id='next' onClick={changeSlide} className={style.btn_next}><img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
										</li>
									)
								}
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SelectCategory;