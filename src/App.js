import react, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Footer from './components/Footer';

function App() {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Router>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/shop" exact component={ShopPage} />

				{/* <Route path="*" component={NotFound} /> */}
			</Switch>
			{/* <Footer /> */}
			<Footer />
		</Router>
	);
}

export default App;
