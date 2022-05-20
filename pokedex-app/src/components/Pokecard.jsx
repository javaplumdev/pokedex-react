function Pokecard({ name, image, types, colorType, order }) {
	return (
		<div
			className={`${colorType} position-relative p-3 m-2`}
			style={{
				width: '320px',
				borderRadius: '20px',
				border: '5px solid yellow',
			}}
		>
			<img
				src={image}
				alt={name}
				className="pokemon-img img-fluid"
				style={{ width: '270px', height: '300px' }}
			/>
			<p className="lead fw-bold">{name}</p>
			<div className="d-flex">
				{types.map((item) => {
					return (
						<div className="me-2 bg-light text-dark rounded p-2">
							<small key={item.slot}>{item.type.name}</small>
						</div>
					);
				})}
			</div>
			<p className="position-absolute top-0 bg-light p-2 rounded my-3 fw-bold">
				{order}
			</p>
		</div>
	);
}

export default Pokecard;
