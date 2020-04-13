import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation.js';
import HomePage from './Pages/home.js';
import AboutUsPage from './Pages/about-us';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
	return (
		<Router>
			<div className='App' id='App'>
				<Navigation/>
				<div className='contentHolder'>
					<Switch>
						<Route exact path='/'>
							<HomePage></HomePage>
						</Route>
						<Router path='/about-us'>
							<AboutUsPage></AboutUsPage>
						</Router>
					</Switch>
				</div>
				<Footer></Footer>
			</div>
		</Router>
	);
}

export default App;
