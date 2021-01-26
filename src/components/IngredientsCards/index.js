import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import ingredient1 from '../../assets/ingredient-1.png';
import ingredient2 from '../../assets/ingredient-2.png';
import ingredient3 from '../../assets/ingredient-3.png';

const IngredientCards = () => {
	return (
		<div>
			<div className="ingredient-cards">
				<Container>
					<Row>
						<Col sm>
							<Card style={{ width: '18rem', marginTop: '1rem' }}>
								<Card.Img variant="top" src={ingredient1} />
								<Card.Body style={{ background: '#F0EACA' }}>
									<Card.Text>
										Natural Plant Oils that keep your skin well nourished and moisturised.
									</Card.Text>
									{/* <Button variant="primary">Go somewhere</Button> */}
								</Card.Body>
							</Card>
						</Col>
						<Col sm>
							<Card style={{ width: '18rem', marginTop: '1rem' }}>
								<Card.Img variant="top" src={ingredient2} />
								<Card.Body style={{ background: '#F0EACA' }}>
									<Card.Text>
										Aromatic Oils that leave your skin longing for that luxurious scent and finish.
									</Card.Text>
									{/* <Button variant="primary">Go somewhere</Button> */}
								</Card.Body>
							</Card>
						</Col>
						<Col sm>
							<Card style={{ width: '18rem', marginTop: '1rem' }}>
								<Card.Img variant="top" src={ingredient3} />
								<Card.Body style={{ background: '#F0EACA' }}>
									<Card.Text>
										Gentle and safe colours to ensure your skin gets the treatment it deserves.
									</Card.Text>
									{/* <Button variant="primary">Go somewhere</Button> */}
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default IngredientCards;
