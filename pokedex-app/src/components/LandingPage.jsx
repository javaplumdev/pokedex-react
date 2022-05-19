import Pokecard from './Pokecard';
import React, { useContext } from 'react';
import { contextHolder } from '../context/ContextAPI';

function LandingPage() {
	const { uniquePokemons } = useContext(contextHolder);

	return (
		<>
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
