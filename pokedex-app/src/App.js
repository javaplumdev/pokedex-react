import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
	const pokemonsUrl = `https://pokeapi.co/api/v2/pokemon?limit=3`;

	const [allPokemons, setAllPokemons] = useState([]);
	const [pokemon, setPokemon] = useState([]);
	const [pokemonContainer, setPokemonContainer] = useState([]);

	function fetchAPI() {
		axios.get(pokemonsUrl).then((response) => {
			setAllPokemons(response.data.results);
		});
	}

	allPokemons.forEach((item) => {
		axios.get(item.url).then((response) => {
			setPokemonContainer(response);
		});

		setPokemon((prevState) => [...prevState, pokemonContainer]);
	});

	useEffect(() => {
		fetchAPI();
	}, []);

	return (
		<div className="App">
			<p>Hi</p>
		</div>
	);
}

export default App;
