import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cleanIngredients from '../../assets/clean.png';
import ecofriendly from '../../assets/eco-friendly.png';
import qualityassured from '../../assets/quality-assured.png';
import chemicalfree from '../../assets/chemical-free.png';
import Zoom from 'react-reveal/Zoom';

const MiddleBar = () => {
	return (
		<div style={{ background: '#FAF0E4', textAlign: 'center', paddingTop: '2rem' }}>
			<h3 style={{ textAlign: 'center' }}>Give your skin a heeling feeling</h3>
			<p>Chemical Free, Preservative Free, 100% Natural </p>

			<Row style={{ textAlign: 'center', marginTop: '4rem', paddingBottom: '2rem' }}>
				<Col xs={4} md={3}>
					<img src={cleanIngredients} alt="clean ingredients" />
					<p style={{ marginTop: '1rem', fontSize: ' 1.2rem' }}>Clean Ingredients</p>
					<p style={{ marginTop: '0.25rem' }}>
						Natural Plant Oils that keep your skin well nourished and moisturised.
					</p>
				</Col>
				<Col xs={4} md={3}>
					<img src={ecofriendly} alt="Eco Friendly" />
					<p style={{ marginTop: '1rem', fontSize: ' 1.2rem' }}>Eco Friendly</p>
					<p style={{ marginTop: '0.25rem' }}>All soaps are made with the environment in mind.</p>
				</Col>
				<Col xs={4} md={3}>
					<img src={qualityassured} alt="Quality Assured" />
					<p style={{ marginTop: '1rem', fontSize: ' 1.2rem' }}>Quality Assured</p>
					<p style={{ marginTop: '0.25rem' }}>
						Natural Plant Oils that keep your skin well nourished and moisturised.
					</p>
				</Col>
				<Col xs={4} md={3}>
					<img src={chemicalfree} alt="Chemical Free" />
					<p style={{ marginTop: '1rem', fontSize: ' 1.2rem' }}>Chemical Free</p>
					<p style={{ marginTop: '0.25rem' }}>
						Natural Plant Oils that keep your skin well nourished and moisturised.
					</p>
				</Col>
			</Row>
		</div>
	);
};

export default MiddleBar;
