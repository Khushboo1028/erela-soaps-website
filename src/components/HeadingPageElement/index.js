import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeadingPageElement = () => {
	return (
		<div style={{ background: '#FAF0E4' }}>
			<Row style={{ padding: '5rem' }}>
				<Col>
					<div style={{ width: '100%', padding: '0' }} />
					<h1 style={{ textAlign: 'center', fontFamily: 'Bodoni', fontWeight: '600' }}>
						Explore our soap bars
					</h1>
				</Col>
			</Row>
		</div>
	);
};

export default HeadingPageElement;
