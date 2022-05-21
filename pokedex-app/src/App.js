import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

import { ContextProvider } from './context/ContextAPI';
import LandingPage from './components/LandingPage';

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<Container>
					<LandingPage />
				</Container>
			</div>
		</ContextProvider>
	);
}

export default App;
