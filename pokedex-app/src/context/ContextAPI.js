import React, { useState, useEffect, createContext } from 'react';

export const contextHolder = createContext();

export function ContextProvider({ children }) {
	const [allPokemons, setAllPokemons] = useState([]);
	const [loadPoke, setLoadPoke] = useState(
		`https://pokeapi.co/api/v2/pokemon?limit=10`
	);

	// We start with an empty list of items.
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	// Here we use item offsets; we could also use page offsets
	// following the API or data you're working with.
	const [itemOffset, setItemOffset] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(5);

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
		const endOffset = itemOffset + itemsPerPage;
		console.log(`Loading items from ${itemOffset} to ${endOffset}`);
		setCurrentItems(uniquePokemons.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(uniquePokemons.length / itemsPerPage));
	}, [itemOffset, itemsPerPage]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % uniquePokemons.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};

	return (
		<contextHolder.Provider
			value={{ uniquePokemons, currentItems, handlePageClick, pageCount }}
		>
			{children}
		</contextHolder.Provider>
	);
}
