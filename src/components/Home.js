import React from 'react';
import logoRedux from '../assets/logo-redux.png';
import logoRouter from '../assets/logo-router.png';

const Home = () => (
	<div id="home-component">
		<h1>My boilerplate</h1>
		<h2>React</h2>
		<h1>+</h1>
		<div className="flex-row">
			<div id="router-logo">
				<img alt="router-logo" src={logoRouter} />
			</div>
			<div id="redux-logo">
				<img alt="redux-logo" src={logoRedux} />
			</div>
		</div>
	</div>
);

export default Home;
