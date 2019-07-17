import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Counter from './Counter';

const App = () => (

	<div id="app-component">

		<BrowserRouter>

			<div id="router-div">

				<Nav />

				<Route
					exact
					path="/"
					component={Home}
				/>
				<Route
					exact
					path="/count"
					component={Counter}
				/>


			</div>
		</BrowserRouter>

	</div>
);

export default App;
