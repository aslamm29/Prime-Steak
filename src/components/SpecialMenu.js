import React from 'react';

export default function SpecialMenu() {
	let loopMenu = function() {
		return [
			{
				title: 'Super BBQ Grill No Smoke',
				description:
					'Fried Egg, Steak, Baked Potato, French Fries, Side of vegetables',
				price: 25
			},
			{
				title: 'Mixed Vegetables',
				description:
					'Fried Egg, Steak, Baked Potato, French Fries, Side of vegetables',
				price: 15
			},
			{
				title: 'All Canadian Mix',
				description:
					'Fried Egg, Steak, Baked Potato, French Fries, Side of vegetables',
				price: 17
			}
		].map(item => {
			return (
				<div className="col-md-4">
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
