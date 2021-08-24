import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePageView } from './views/HomePageView/HomePageView';
import { OfferView } from './views/OfferView/OfferView';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/offers/:id" component={OfferView}/>
				<Route path="/" component={HomePageView}/>
			</Switch>
		</Router>
	);
}

export default App;
