import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import soapImage1 from '../../assets/soap-image-1.png';
import soapImage2 from '../../assets/soap-image-2.png';
import soapImage3 from '../../assets/soap-image-3.png';
import soapImage4 from '../../assets/soap-image-4.png';
import soapImage5 from '../../assets/soap-image-5.png';
import soapImage6 from '../../assets/soap-image-6.png';
import MainButton from '../MainButton';
import styles from './index.module.css';
import Bounce from 'react-reveal/Bounce';

const SellingBar = () => {
	return (
		<div
			style={{
				paddingTop    : '4rem',
				textAlign     : 'center',
				paddingLeft   : '3rem',
				paddingRight  : '3rem',
				paddingBottom : '6rem'
			}}>
			<Bounce right cascade>
				<Container>
					<Row>
						<Col md={3}>
							<h3 style={{ textAlign: 'left' }}>
								Start your<br /> skincare today.
							</h3>
							<p style={{ textAlign: 'left' }}>
								Suspendisse eget risus mollis, molestie lectus vel, pellentesque nulla. Aliquamum
								feugiat lacus in sem fermentum finibus. Morbi tempor ac dui vel ullamcorper accumsan
								augue.
							</p>
						</Col>
						<Col md={3}>
							<div className={styles.hvrbox}>
								<img style={{ width: '80%', height: '90%' }} src={soapImage1} alt="lavender soap" />
								<div className={styles.hvrboxLayerTop}>
									<div className={styles.hvrboxText}>Lavender Soap</div>
								</div>
							</div>
						</Col>
						<Col md={3}>
							<div className={styles.hvrbox}>
								<img style={{ width: '80%', height: '90%' }} src={soapImage2} alt="lavender soap" />
								<div className={styles.hvrboxLayerTop}>
									<div className={styles.hvrboxText}>Lavender Soap</div>
								</div>
							</div>{' '}
						</Col>
						<Col md={3}>
							<div className={styles.hvrbox}>
								<img style={{ width: '80%', height: '90%' }} src={soapImage3} alt="lavender soap" />
								<div className={styles.hvrboxLayerTop}>
									<div className={styles.hvrboxText}>Lavender Soap</div>
								</div>
							</div>{' '}
						</Col>
					</Row>
					<Row>
						<Col md={3}>
							<MainButton text="Shop Now" />
						</Col>
						<Col md={3}>
							<div className={styles.hvrbox}>
								<img style={{ width: '80%', height: '90%' }} src={soapImage4} alt="lavender soap" />
								<div className={styles.hvrboxLayerTop}>
									<div className={styles.hvrboxText}>Lavender Soap</div>
								</div>
							</div>{' '}
						</Col>
						<Col md={3}>
							<div className={styles.hvrbox}>
								<img style={{ width: '80%', height: '90%' }} src={soapImage5} alt="lavender soap" />
								<div className={styles.hvrboxLayerTop}>
									<div className={styles.hvrboxText}>Lavender Soap</div>
								</div>
							</div>{' '}
						</Col>
						<Col md={3}>
							<div className={styles.hvrbox}>
								<img style={{ width: '80%', height: '90%' }} src={soapImage6} alt="lavender soap" />
								<div className={styles.hvrboxLayerTop}>
									<div className={styles.hvrboxText}>Lavender Soap</div>
								</div>
							</div>{' '}
						</Col>
					</Row>
				</Container>
			</Bounce>
		</div>
	);
};

export default SellingBar;
