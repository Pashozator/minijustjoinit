import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePageView } from './views/HomePageView/HomePageView';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={HomePageView}/>
			</Switch>
		</Router>
	);
}

export default App;
