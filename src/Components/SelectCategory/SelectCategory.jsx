import { useContext, useRef } from 'react';
import { MainContext } from '../Dashboard/Dashboard';

import style from './SelectCategory.module.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

function SelectCategory(props) {
	const {allProducts} = useContext(MainContext);

	const transform = useRef();
	
	const changeSlide = function(event){
		let dir = event.target.parentNode.id;
		if(dir === "next"){
			let firstChild = transform.current.firstChild;
			transform.current.append(firstChild);
		}else{
			let lastChild = transform.current.lastChild;
			transform.current.prepend(lastChild);
		}
	}

	return (
	<div className="selectCategory">
		<div className="container">
	    	{/* <h2>{props.category}</h2> */}
			<div className={style.sliderProduct}>
				<div className={style.sliderProduct__wrapper}>
					<ul ref={transform} className={style.sliderProduct__list}>
						{allProducts.products.map((item, index)=>{
							if(item.category === props.category){	
								return(
									<li key={index} className={style.sliderProduct__item}>
										<p>{item.title}</p>
										<img  className={style.image} src={item.images[0]} alt="#" />
										<p>{item.rating}</p>
									</li>
								)
							}
						})}
					</ul>
				</div>
				<button id='prew' onClick={changeSlide} className={style.btn_prew}><img src={PUBLIC_URL + '/images/arrowLeft.png'} alt="#" /></button>
				<button id='next' onClick={changeSlide} className={style.btn_next}><img src={PUBLIC_URL + '/images/arrowRight.png'} alt="#" /></button>
			</div>
		</div>
	</div>
	);
}

export default SelectCategory;