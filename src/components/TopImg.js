import React from 'react';

export default function TopImg() {
	return (
		<section id="TopImg">
			<div className="container">
				<div className="title">
					<h5>Welcome</h5>
					<h1>Prime Steak Restaurant</h1>
				</div>
				<div className="contact-info">
					<div className="container">
						<div className="booking">Book Table Directly</div>
						<h2>(647) - 925 - 7932</h2>
						<div className="hours">
							Opening Hours <strong>Mon - Fri: </strong> 9am - 9pm{' '}
							<strong>Weekend:</strong> 9am - 11pm
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

