import HomeCarousel from '../components/HomeCarousel';
import react, { useState } from 'react';
import { Helmet } from 'react-helmet';
import MiddleBar from '../components/MiddleBar';
import SellingBar from '../components/SellingBar';
import ArticleBar from '../components/ArticleBar';
import ReviewsCarousel from '../components/ReviewsCarousel';
import WhyShift from '../components/WhyShift';

const HomePage = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="website-theme">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Erela Soaps | Home</title>
				<meta
					name="description"
					content="Cold processed soaps based in Mumbai, India. Designer soaps that are homemade with love and care. Boutique Soaps at home. Order online now."
				/>
			</Helmet>

			<HomeCarousel />
			<MiddleBar />
			<SellingBar />
			<ArticleBar />
			<ReviewsCarousel />
			<WhyShift />
		</div>
	);
};

export default HomePage;
