function Pokecard({
	name,
	image,
	types,
	colorType,
	order,
	height,
	weight,
	abilities,
	stats,
}) {
	return (
		<>
			{
				<div
					className={`${colorType} position-relative p-3 m-2`}
					style={{
						width: '320px',
						borderRadius: '20px',
						border: '5px solid yellow',
					}}
				>
					<div>
						<p className="lead fw-bold" style={{ marginLeft: '20px' }}>
							{name.charAt(0).toUpperCase() + name.slice(1)}
						</p>
						<small className="bg-lightrounded px-2 py-2 bg-light rounded-circle fw-bold ">
							{order}
						</small>
					</div>
					<img
						src={image}
						alt={name}
						className="pokemon-img img-fluid"
						style={{ width: '270px', height: '170px' }}
					/>

					<div className="my-1">
						<small>
							Length: {height}", Weight: {weight}lbs
						</small>
					</div>
					<div className="d-flex flex-wrap my-2">
						{stats
							.filter((data) => data.stat.name != 'hp')
							.map((item) => {
								return (
									<small className="bg-light m-1 p-1 rounded">
										{item.stat.name}: {item.base_stat}
									</small>
								);
							})}
					</div>
					<div
						className="d-flex py-2 align-items-center"
						style={{ borderTop: '1px solid black' }}
					>
						<small>Pokemon type:</small>
						{types.map((item) => {
							return (
								<div key={item.id} className="me-2 ">
									<small key={item.slot}>{item.type.name}</small>
								</div>
							);
						})}
					</div>

					<div
						className="position-absolute top-0 my-3 d-flex"
						style={{ right: '10%' }}
					>
						{stats
							.filter((item) => item.stat.name === 'hp')
							.map((item) => {
								return (
									<div>
										<small className="me-1">
											{item.stat.name.toUpperCase()}:
										</small>
										<small className="fw-bold fs-5">{item.base_stat}</small>
									</div>
								);
							})}
					</div>
					<div
						className="d-flex justify-content-around"
						style={{ borderTop: '1px solid black' }}
					>
						{abilities.map((item) => {
							return <small>{item.ability.name}</small>;
						})}
					</div>
				</div>
			}
		</>
	);
}

export default Pokecard;
