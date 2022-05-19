import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Pokedex from './components/Pokedex';

import './App.css';

function App() {
	const pokemonUrl = `https://pokeapi.co/api/v2/pokemon?limit=500`;
	const [pokemonUrls, setPokemonUrls] = useState([]);
	const [pokemonContainer, setPokemonContainer] = useState([]);

	const uniqueIds = [];

	function fetchApi() {
		axios.get(pokemonUrl).then((response) => {
			setPokemonUrls(response.data.results);
		});

		pokemonUrls.forEach((item) => {
			axios.get(item.url).then((response) => {
				console.log(response.data);
				setPokemonContainer((allList) => [...allList, response.data]);
			});
		});
	}

	const uniquePokemons = pokemonContainer.filter((element) => {
		const isDuplicate = uniqueIds.includes(element.id);

		if (!isDuplicate) {
			uniqueIds.push(element.id);

			return true;
		}

		return false;
	});

	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<div className="app-container">
			<h1>Pokemon Kingdom .</h1>

			<div className="pokemon-card-container">
				{uniquePokemons.map((item) => {
					return (
						<Pokedex
							key={item.id}
							name={item.name}
							image={item.sprites.other.dream_world.front_default}
							types={item.types}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
