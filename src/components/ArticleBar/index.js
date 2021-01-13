import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import articleImage from '../../assets/article-image.png';
import styles from './index.module.css';
import Fade from 'react-reveal/Fade';

const ArticleBar = () => {
	return (
		<div style={{ background: '#B9D1DC' }}>
			<Fade>
				<Row>
					<Col md={6} style={{ padding: '0' }}>
						<img style={{ width: '100%', height: '500px' }} src={articleImage} alt="handmade soap" />
					</Col>
					<Col md={6}>
						<div style={{ width: '100%', padding: '0' }}>
							<h1 className={styles.h1Style}>
								The Natural<br /> Touch
							</h1>
							<h6 style={{ textAlign: 'center', fontWeight: 'bold', letterSpacing: '0.1rem' }}>
								CLEANLINESS AND PURITY TOGETHER
							</h6>
							<p className={styles.para}>
								Duis hendrerit accumsan quam, vitae posuere enim. Suspendisse malesuada efficitur
								ultricies. Aenean aliquam nec lorem ullamcorper congue. Donec sit amet risus et nunc
								sodales scelerisque eget ac risus. Nulla ac arcu sit amet sapien ultrices tempor eu sit
								amet magna. Nullam posuere, dui at tempor laoreet, neque massa volutpat sem, id congue
								tortor arcu sit amet tortor. Maecenas id mauris et mauris pretium sodales et vitae leo.
								Donec blandit felis faucibus tellus porta, eu gravida velit rutrum. In fermentum eu dui
								ac commodo. Donec nulla nibh, convallis ac quam et, imperdiet commodo augue. Donec
								euismod pellentesque elit, a iaculis mi vestibul.
							</p>
						</div>
					</Col>
				</Row>
			</Fade>
		</div>
	);
};

export default ArticleBar;
