import React, { useState } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const MainButton = ({ text, link, download }) => {
	const [ show, setShow ] = useState(false);

	return (
		<div class={`text-center mt-5 mb-5`}>
			{link ? (
				<Link to={link} class={`${styles.link}`}>
					{text}
				</Link>
			) : (
				<div>
					<div className={styles.link} onClick={() => setShow(true)}>
						{text}
					</div>
				</div>
			)}
		</div>
	);
};

export default MainButton;
