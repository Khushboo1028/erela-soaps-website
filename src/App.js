import react, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={HomePage} />

				{/* <Route path="*" component={NotFound} /> */}
			</Switch>
			{/* <Footer /> */}
		</Router>
	);
}

export default App;
