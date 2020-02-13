import React from 'react';

export default function RandomQuote() {
	return (
		<section
			id="RandomQuote"
			style={{
				backgroundImage:
					'linear-gradient(135deg,rgba(0,0,0,.2) 0,#000 100%),url("https://assets.rbl.ms/10664115/origin.png")'
			}}
		>
			<div className="container">
				<h1>"Cooking is an expression that crosses boundaries."</h1>
				<span className="author">- Khurana -</span>
			</div>
		</section>
	);
}
