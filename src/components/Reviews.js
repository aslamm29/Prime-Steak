import React from 'react';

export default function Reviews({ state, actions }) {
	var currentReview = function() {
		return (
			<div>
				<h5 class="comp-title">REVIEWS</h5>
				<h2>{state.reviewsData[state.reviewStatus.currentReview].company}</h2>
				<h4>
					"{state.reviewsData[state.reviewStatus.currentReview].highlight}"
				</h4>
				<p>{state.reviewsData[state.reviewStatus.currentReview].review}</p>
				<div class="author">
					<strong>
						{state.reviewsData[state.reviewStatus.currentReview].author}
					</strong>{' '}
					-{' '}
					<em>
						{state.reviewsData[state.reviewStatus.currentReview].authorInfo}
					</em>
				</div>
			</div>
		);
	};

	var leftClickBTN = function() {
		if (state.reviewStatus.currentReview == 0) {
			return;
		} else {
			actions.reviewLeftClicked();
		}
	};

	var rightClickBTN = function() {
		if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {
			return;
		} else {
			actions.reviewRightClicked();
		}
	};

	return (
		<section id="Reviews">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="side-img">
							<img src="https://s3.amazonaws.com/tinycards/image/8a924d9d7b6647348734a1ca0fcd9a43" />
						</div>
					</div>
					<div class="col-md-4">
						{currentReview()}
						<div class="arrows">
							<i
								onclick={leftClickBTN}
								class={`fas fa-arrow-left ${
									state.reviewStatus.currentReview > 0 ? 'ready' : ''
								}`}
							></i>
							<i
								onclick={rightClickBTN}
								class={`fas fa-arrow-right ${
									state.reviewStatus.currentReview ==
									state.reviewsData.length - 1
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
