import React from 'react';

function Pokedex({ name, image, types }) {
	return (
		<div>
			<img src={image} alt={name} />
			<p>{name}</p>
			{types.map((item) => {
				return <p key={item.slot}>{item.type.name}</p>;
			})}
		</div>
	);
}

export default Pokedex;
