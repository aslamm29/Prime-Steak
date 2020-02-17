import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<nav className="menu">
					<a href="#OurStory">Our Story</a>
					<a href="#Reviews">Reviews</a>
					<a href="#SpecialMenu">Special Menu</a>
					<a href="#ContactUs">Contact Us</a>
				</nav>

				<ul className="social-media">
					<li>
						<a href="http://www.facebook.com" target="new">
							<i className="fab fa-facebook-square"></i>
						</a>
					</li>
					<li>
						<a href="http://www.twitter.com" target="new">
							<i className="fab fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="http://www.google.com" target="new">
							<i className="fab fa-google-plus-g"></i>
						</a>
					</li>
					<li>
						<a href="http://www.youtube.com" target="new">
							<i className="fab fa-youtube"></i>
						</a>
					</li>
				</ul>

				<div className="copyright">© 2020 Copyright</div>
			</div>
		</footer>
	);
}

export default Footer