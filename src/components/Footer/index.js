import React from 'react';
import styles from './index.module.css';
import { Container, Row, Col } from 'react-bootstrap';

import location from '../../assets/location.png';
import connect from '../../assets/connect.png';
import links from '../../assets/links.png';

const Index = () => {
	return (
		<div className={styles.footer}>
			<div className="text-center">
				<h3 style={{ fontFamily: 'Dancing Script', color: '#021C35' }}>Erela Soaps</h3>
			</div>
			<Container>
				<Row>
					<Col className="text-center" lg={4}>
						<div>
							<img src={location} className={styles.locationImage} alt="Location" />
							<p className={styles.locationTitle}>
								Erela Soaps<br />
								<span className={styles.locationContent}>
									<br />101, Siddhachal, Hanuman Rd,<br />Vile Parle East,<br />Near Cosmos Bank,<br />Mumbai-400
									057
								</span>
							</p>
						</div>
					</Col>
					<Col className="text-center" lg={4}>
						<div>
							<img src={connect} className={styles.connectImage} alt="Connect with us" />
							<p className={styles.connectTitle}>
								Connect with us<br />
								<span className={styles.connectContent}>
									<br />
									<a href="tel:+919004236811" style={{ color: 'inherit' }}>
										+91 9004236811
									</a>
									<br />
									<a href="tel:+917738514464" style={{ color: 'inherit' }}>
										+91 7738514464
									</a>
									<br />
									<br />
									<a href="mailto: enquiries@erelasoaps.com" style={{ color: 'inherit' }}>
										enquiries@erelasoaps.com
									</a>
									<br />
									<span style={{ color: '#eef2f5' }}>Santacruz (E), Near Axis Bank,</span>
								</span>
							</p>
						</div>
					</Col>
					<Col className="text-center" lg={4}>
						<div>
							<img src={links} className={styles.linksImage} alt="Links" />
							<p className={styles.linksTitle}>
								Quick Links<br />
								<span className={styles.linksContent}>
									<br />Instagram<br />
									<br />Facebook<br />
									<span style={{ color: '#eef2f5' }}>Santacruz (E), Near Axis Bank,</span>
								</span>
							</p>
						</div>
					</Col>
				</Row>
				<p className={`text-center ${styles.copyrightText}`}>
					Copyright © {new Date().getFullYear()} Erela Soaps | All Rights Reserved
				</p>
			</Container>
		</div>
	);
};

export default Index;
