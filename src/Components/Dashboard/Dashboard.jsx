import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './Dashboard.module.css';

function Dashboard() {
	const [allProducts, setAllProducts] = useState([]);

	const getData = async function(){
		if(localStorage.length > 0){
			if(allProducts.length == 0){
				let localElem = localStorage.getItem('storage');
        		localElem = JSON.parse(localElem);
				setAllProducts(localElem);
			}
		}else{
			await fetch('https://fakestoreapi.com/products')
        	    .then(res=>res.json())
        	    .then(dataJSON=> {
						localStorage.setItem('storage', JSON.stringify(dataJSON))
						let localElem = localStorage.getItem('storage');
        				localElem = JSON.parse(localElem);
						setAllProducts(localElem);
					}
				)
			}
	};

	useEffect(()=>{
		getData()
		console.log(allProducts.length);
	})

	return (
		<div className={style.dashboard}>
		
		    <h1>New products</h1>
		
			<ul className={style.product__list}>
				{allProducts.map((item, index)=>{
					return(
						<li key={index} className={style.product__item}>
							<Link to="/product">
								<h2>{item.title}</h2>
								{/* <img src={item.image} alt="#" /> */}
							</Link>
						</li>
				);
				})}
			</ul>
		</div>
	);



}

export default Dashboard;