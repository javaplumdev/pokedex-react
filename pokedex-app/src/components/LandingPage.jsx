import Pokecard from './Pokecard';
import React, { useContext } from 'react';
import { contextHolder } from '../context/ContextAPI';
import ReactPaginate from 'react-paginate';

function LandingPage() {
	const { uniquePokemons, currentItems, handlePageClick, pageCount } =
		useContext(contextHolder);

	return (
		<>
			<h1 className="text-center fw-bold">Pokedex. Gotta catch em all.</h1>
			<div className="pokemon-card-container">
				{uniquePokemons.map((item) => {
					const colorType = item.types.slice(0, 1).map((item) => {
						return item.type.name;
					});

					return (
						<Pokecard
							key={item.id}
							image={item.sprites.other.dream_world.front_default}
							name={item.name}
							types={item.types}
							colorType={colorType}
							order={item.order}
							height={item.height}
							weight={item.weight}
							abilities={item.abilities}
							stats={item.stats}
							currentItems={currentItems}
						>
							{item.name}
						</Pokecard>
					);
				})}
				<ReactPaginate
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
				/>
			</div>
		</>
	);
}

export default LandingPage;
