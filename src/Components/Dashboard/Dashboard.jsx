import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './Dashboard.module.css';

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
		
		    <h1>New products</h1>
		
			<ul className={style.product__list}>
				{allProducts.products.map((item, index)=>{
					return(
						<li key={index} className={style.product__item}>
							<Link to="/product">
								<h2>{item.id}</h2>
								<p>{item.title}</p>
								<img src={item.images[0]} alt="" />
							</Link>
						</li>
					);
				})}
			</ul>	
		</div>
	);



}

export default Dashboard;