import { useContext, useRef } from 'react';
import { MainContext } from '../Dashboard/Dashboard';

import style from './SelectCategory.module.css';

const getCookie = require('../GetCookie');

const PUBLIC_URL = process.env.PUBLIC_URL;

function SelectCategory(props) {
	const {allProducts} = useContext(MainContext);

	const transform = useRef();
	
	const changeSlide = function(event){
		let dir = event.target.parentNode.id;
		if(dir === "next"){
			let firstChild = transform.current.firstChild;
			transform.current.append(firstChild);
			for (let child of transform.current.children){
				child.classList.remove(style.prewSlide);
				child.classList.add(style.nextSlide);
			}
		}else{
			let lastChild = transform.current.lastChild;
			transform.current.prepend(lastChild);
			for (let child of transform.current.children){
				child.classList.remove(style.nextSlide);
				child.classList.add(style.prewSlide)
			}
		}
	}

	const addToCart = function(){
		let currentProduct = transform.current.firstChild.nextSibling;
		if(!getCookie("id")){
			document.cookie = 'id=' + currentProduct.id + '; max-age=60';
			console.log(getCookie("id"));
		}else{
			let arr = (getCookie("id").match(/\d+/g))
			if(arr.includes(getCookie("id").match(/\d+/g))){
				return;
			}else{
				arr.push
			}
			/* document.cookie = 'id=' + currentProduct.id + '; max-age=60';
			console.log(getCookie("id")); */
		}
		
	}

	return (
		<div className="selectCategory">
			<div className="container">
				<div className={style.sliderProduct}>
					<div className={style.sliderProduct__wrapper}>
						<ul ref={transform} className={style.sliderProduct__list}>
							{allProducts.products.map((item, id)=>{
								if(item.category === props.category){	
									return(
										<li key={id} id={item.id} className={style.sliderProduct__item}>
											<p>{item.title}</p>
											<img  className={style.image} src={item.images[0]} alt="#" />
											<progress value={item.rating} max='5'>progress</progress>
											<p>{item.description}</p>
											<p>{item.price + "$"}</p>
										</li>
									)
								}
							})}
						</ul>
					</div>
					<button id='prew' onClick={changeSlide} className={style.btn_prew}><img src={PUBLIC_URL + '/images/arrowLeft.png'} alt="#" /></button>
					<button id='next' onClick={changeSlide} className={style.btn_next}><img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
					<button onClick={addToCart} className={style.sliderProduct__addToCart}>добавить в корзину</button>
				</div>
			</div>
		</div>
	);
}

export default SelectCategory;