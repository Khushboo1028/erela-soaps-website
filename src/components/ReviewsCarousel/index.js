import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import reviewBackground from '../../assets/review-background.png';

const ReviewsCarousel = () => {
	const captionStyle1 = {
		marginBottom : '2rem',
		color        : '#021C35',
		fontSize     : '2rem',
		fontFamilt   : 'Dancing Queen'
	};

	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<img
						style={{ height: '300px' }}
						className="d-block w-100"
						src={reviewBackground}
						alt="Erela Soap Reviews"
					/>
					<Carousel.Caption style={captionStyle1}>
						<h6 style={{ fontFamily: 'Dancing Script', fontSize: '3rem', fontWeight: '600' }}>
							Testimonials.
						</h6>
						<h6 style={{ fontSize: '2rem', fontFamily: 'Dancing Script' }}>
							Erela. believe in the truth and transparency in the personal care industry - what you see is
							what you get, with no compromise on luxury.”
						</h6>
						<h6 style={{ fontSize: '2rem', fontFamily: 'Dancing Script', textAlign: 'right' }}>
							-Jovita Gandhi
						</h6>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						style={{ height: '300px' }}
						className="d-block w-100"
						src={reviewBackground}
						alt="Erela Soap Reviews"
					/>
					<Carousel.Caption style={captionStyle1}>
						<h6 style={{ fontFamily: 'Dancing Script', fontSize: '3rem', fontWeight: '600' }}>
							Testimonials.
						</h6>
						<h6 style={{ fontSize: '2rem', fontFamily: 'Dancing Script' }}>
							Erela. believe in the truth and transparency in the personal care industry - what you see is
							what you get, with no compromise on luxury.”
						</h6>
						<h6 style={{ fontSize: '2rem', fontFamily: 'Dancing Script', textAlign: 'right' }}>
							-Nidhi Doshi
						</h6>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						style={{ height: '300px' }}
						className="d-block w-100"
						src={reviewBackground}
						alt="Erela Soap Reviews"
					/>
					<Carousel.Caption style={captionStyle1}>
						<h6 style={{ fontFamily: 'Dancing Script', fontSize: '3rem', fontWeight: '600' }}>
							Testimonials.
						</h6>
						<h6 style={{ fontSize: '2rem', fontFamily: 'Dancing Script' }}>
							Erela. believe in the truth and transparency in the personal care industry - what you see is
							what you get, with no compromise on luxury.”
						</h6>
						<h6 style={{ fontSize: '2rem', fontFamily: 'Dancing Script', textAlign: 'right' }}>
							-Priya Jain
						</h6>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						style={{ height: '300px' }}
						className="d-block w-100"
						src={reviewBackground}
						alt="Erela Soap Reviews"
					/>
					<Carousel.Caption style={captionStyle1}>
						<h6 style={{ fontFamily: 'Dancing Script', fontSize: '3rem', fontWeight: '600' }}>
							Testimonials.
						</h6>
						<h6 style={{ fontSize: '2rem', fontFamily: 'Dancing Script' }}>
							Erela. believe in the truth and transparency in the personal care industry - what you see is
							what you get, with no compromise on luxury.”
						</h6>
						<h6 style={{ fontSize: '2rem', fontFamily: 'Dancing Script', textAlign: 'right' }}>
							-Mansii Lahoti
						</h6>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default ReviewsCarousel;
