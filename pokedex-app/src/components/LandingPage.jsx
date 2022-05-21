import Pokecard from './Pokecard';
import React, { useContext } from 'react';
import { contextHolder } from '../context/ContextAPI';
import ReactPaginate from 'react-paginate';

function LandingPage() {
	const { uniquePokemons } = useContext(contextHolder);

	return (
		<>
			<div className="text-dark py-5 ">
				<h1 className="fw-bold display-5">
					Pokedex.<br></br> Gotta catch em all.
				</h1>
				<p className="lead">Get to see more of over a thousand of pokemons</p>
			</div>

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
						>
							{item.name}
						</Pokecard>
					);
				})}
			</div>
		</>
	);
}

export default LandingPage;
