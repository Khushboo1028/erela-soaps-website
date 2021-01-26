import React from 'react';
import react, { useState } from 'react';

import { Helmet } from 'react-helmet';
import EcwidShop from '../components/EcwidShop';

const ShopPage = () => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Erela Soaps | Shop</title>
				<meta
					name="description"
					content="Cold processed soaps based in Mumbai, India. Designer soaps that are homemade with love and care. Boutique Soaps at home. Order online now."
				/>
			</Helmet>

			<EcwidShop />
		</div>
	);
};

export default ShopPage;
