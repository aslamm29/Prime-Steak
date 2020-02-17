import React, { useContext } from 'react';
import { CompanyInfoContext } from '../contexts/CompanyInfoContext';

const ContactUs = () => {
	const { companyInfo } = useContext(CompanyInfoContext)
	return (
		<section id="ContactUs" className="textureBG">
			<div className="container">
				<h5 className="comp-title">Contact Us</h5>
				<h2>Always here to help you</h2>
				<div className="box">
					<div className="row">
						<div className="col-md-6">
							<div className="title">{companyInfo.location}</div>
							<h6 className="address">
								435 Yonge Street <br />
								Greater Toronto Area, M2H562
							</h6>
							<p>
								<strong>Email:</strong>{' '}
								<a href="mailto:info@primesteak.com">info@primesteak.com</a>
							</p>
						</div>
						<div className="col-md-6">
							<h6>Phone:</h6>
							<div className="title">{companyInfo.phone}</div>
							<h6>Lunch Service</h6>
							<p>
								Friday, Saturday and Sunday <br /> from 12pm-1.30pm
							</p>
							<h6>Dinner Service</h6>
							<p>
								Daily <br /> from 6pm-9.30pm
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactUs