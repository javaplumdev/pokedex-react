import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
	const [allPokemons, setAllPokemons] = useState([]);
	const [loadPoke, setLoadPoke] = useState(
		`https://pokeapi.co/api/v2/pokemon?limit=10`
	);

	const uniqueIds = [];

	const getAllPokemons = async () => {
		const res = await fetch(loadPoke);
		const data = await res.json();

		setLoadPoke(data.next);

		function createPokemonObject(result) {
			result.map(async (pokemon) => {
				const res = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
				);
				const data = await res.json();

				setAllPokemons((prevState) => [...prevState, data]);
			});
		}

		createPokemonObject(data.results);
	};

	const uniquePokemons = allPokemons.filter((element) => {
		const isDuplicate = uniqueIds.includes(element.id);

		if (!isDuplicate) {
			uniqueIds.push(element.id);

			return true;
		}

		return false;
	});

	console.log(uniquePokemons);

	useEffect(() => {
		getAllPokemons();
	}, []);

	return (
		<div className="app-container">
			<h1>Pokemon Kingdom .</h1>

			<div className="pokemon-card-container">
				{uniquePokemons.map((item) => {
					return <p key={item.id}>{item.name}</p>;
				})}
			</div>
		</div>
	);
}

export default App;
