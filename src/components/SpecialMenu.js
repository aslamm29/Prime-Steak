import React, { useContext } from 'react';
import { SpecialMenuContext } from '../contexts/SpecialMenuContext'

const SpecialMenu = () => {
	const { specialMenuData } = useContext(SpecialMenuContext)
	let loopMenu = () => {
		return specialMenuData.map((item, index) => {
			return (
				<div className="col-md-4" key={index}>
					<div className="box">
						<div className="box-img">
							<div className="price-circle">${item.price}</div>
						</div>
						<span className="title">{item.title}</span>
						<p className="details">{item.description}</p>
					</div>
				</div>
			);
		});
	};

	return (
		<section id="SpecialMenu" className="textureBG">
			<div className="container">
				<h5 className="comp-title">Special Menu</h5>
				<h2>Delicious Flavour of Autumn</h2>
				<div className="row boxes">{loopMenu()}</div>
				<a href="#" className="link">
					View Full Menu
				</a>
			</div>
		</section>
	);
}

export default SpecialMenu