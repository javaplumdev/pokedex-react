import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ContextProvider } from './context/ContextAPI';
import LandingPage from './components/LandingPage';

function App() {
	return (
		<ContextProvider>
			<div className="app-container">
				<h1>Pokemon Kingdom .</h1>

				<LandingPage />
			</div>
		</ContextProvider>
	);
}

export default App;
