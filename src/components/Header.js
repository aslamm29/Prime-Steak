import React from 'react';

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="logo">PS</div>
				<nav class="header-menu">
					<a href="#OurStory">Our Story</a>
					<a href="#Reviews">Reviews</a>
					<a href="#SpecialMenu">Special Menu</a>
					<a href="#ContactUs">Contact Us</a>
				</nav>
			</div>
			<div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
			<nav className="mobile-menu">
					<a href="#OurStory">Our Story</a>
					<a href="#Reviews">Reviews</a>
					<a href="#SpecialMenu">Special Menu</a>
					<a href="#ContactUs">Contact Us</a>
			</nav>
		</header>
	);
}

export default Header