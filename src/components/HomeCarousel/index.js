import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sample from '../../assets/sample.jpg';
import Fade from 'react-reveal/Fade';
import styles from './index.css';
import MainButton from '../../components/MainButton';

const HomeCarousel = () => {
	const captionStyle1 = {
		marginBottom : '13rem',
		color        : '#021C35'
	};

	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src={sample} alt="Erela Soaps" />
					<Carousel.Caption style={captionStyle1}>
						<Fade bottom>
							<h1 style={{ fontSize: '3rem', fontFamily: 'Dancing Script', fontWeight: '600' }}>
								Luxurious. Handmade. Natural.
							</h1>
							<MainButton text="Shop Now" />
						</Fade>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default HomeCarousel;
