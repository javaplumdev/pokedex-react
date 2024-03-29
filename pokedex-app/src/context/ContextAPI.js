import React, { useState, useEffect, createContext } from 'react';

export const contextHolder = createContext();

export function ContextProvider({ children }) {
	const [allPokemons, setAllPokemons] = useState([]);
	const [loadPoke, setLoadPoke] = useState(
		`https://pokeapi.co/api/v2/pokemon?limit=750`
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

	useEffect(() => {
		getAllPokemons();
	}, []);

	return (
		<contextHolder.Provider value={{ uniquePokemons }}>
			{children}
		</contextHolder.Provider>
	);
}
