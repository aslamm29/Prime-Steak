import React, { useContext } from 'react';
import { ReviewsContext } from '../contexts/ReviewsContext';

const Reviews = () => {
	const { reviews, currentReview, dispatch } = useContext(ReviewsContext)
	console.log(reviews)
	console.log(currentReview)
	console.log(dispatch)
	let displayReview = () => {
		return (
			<div>
				<h5 className="comp-title">REVIEWS</h5>
				<h2>{reviews[currentReview].company}</h2>
				<h4>
					"{reviews[currentReview].highlight}"
				</h4>
				<p>{reviews[currentReview].review}</p>
				<div className="author">
					<strong>
						{reviews[currentReview].author}
					</strong>{' '}
					-{' '}
					<em>
						{reviews[currentReview].authorInfo}
					</em>
				</div>
			</div>
		);
	};

	const leftClickBTN = () => {
		if (currentReview == 0) {
			return;
		} else {
			dispatch({type: 'CLICK_LEFT'})
		}
	};

	const rightClickBTN = () => {
		if (currentReview == reviews.length - 1) {
			return;
		} else {
			dispatch({type: 'CLICK_RIGHT'})
		}
	};

	return (
		<section id="Reviews">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="side-img">
							<img src="https://s3.amazonaws.com/tinycards/image/8a924d9d7b6647348734a1ca0fcd9a43" />
						</div>
					</div>
					<div className="col-md-4">
						{displayReview()}
						<div className="arrows">
							<i
								onClick={leftClickBTN}
								className={`fas fa-arrow-left ${
									currentReview > 0 ? 'ready' : ''
								}`}
							></i>
							<i
								onClick={rightClickBTN}
								className={`fas fa-arrow-right ${
									currentReview ==
									reviews.length - 1
										? ''
										: 'ready'
								}`}
							></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Reviews
