import { useState } from 'react';
import './App.scss';

const products = [
	{ title: 'Pizza', no_of_slices: 4, diameter: '30' },
	{ title: 'Soup', spiciness_scale: 0 },
	{ title: 'Sandwich', slices_of_bread: 0 },
];

const App = () => {
  const baseData = { name: '', preparation_time: '00:00:00' };
  const baseDish = { title: '' };
	const [data, setData] = useState(baseData);
	const [dish, setDish] = useState(baseDish);

	const handleSelect = (e) => {
		const selectedDish = products.filter(
			(product) => product.title === e.target.value
		);
		setDish(...selectedDish);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setData({ ...data, ...dish });
    console.log(data);
    setData(baseData);
    setDish(baseDish);
	};

	return (
		<div className='root'>
			<form onSubmit={(e) => handleSubmit(e)}>
        <span>Name :</span>
				<input
					type='text'
					value={data.name}
					onChange={(e) => setData({ ...data, name: e.target.value })}
					placeholder={'product name'}
				/>
        <span>Preparation time :</span>
				<input
					type='time'
					value={data.preparation_time}
					onChange={(e) =>
						setData({ ...data, preparation_time: e.target.value })
					}
				/>
        <span>select a dish :</span>
				<select value={dish.title} onChange={(e) => handleSelect(e)}>
					<option className='emptyOption'></option>
					{products.map((product) => (
						<option key={product.title} value={product.title} className='opt'>
							{product.title}
						</option>
					))}
				</select>
				{dish.title === 'Pizza' && (
					<div className='optionWrapper'>
            <span>slices :</span>
						<input
							type='number'
							value={dish.no_of_slices}
							onChange={(e) =>
								setDish({ ...dish, no_of_slices: e.target.value })
							}
						/>
            <span>diameter :</span>
						<input
							type='number'
							value={dish.diameter}
              step='0.1'
							onChange={(e) => setDish({ ...dish, diameter: e.target.value })}
						/>
					</div>
				)}
				{dish.title === 'Soup' && (
					<div className='optionWrapper'>
            <span>Spiciness :</span>
						<input
							type='number'
							value={dish.spiciness_scale}
							onChange={(e) =>
								setDish({ ...dish, spiciness_scale: e.target.value })
							}
						/>
					</div>
				)}
        {dish.title === 'Sandwich' && (
					<div className='optionWrapper'>
            <span>Slices of bread :</span>
						<input
							type='number'
							value={dish.slices_of_bread}
							onChange={(e) =>
								setDish({ ...dish, spiciness_scale: e.target.value })
							}
						/>
					</div>
				)}

 				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default App;

// const users = async () => {
//   const url = 'https://webhook.site/46c5b490-5caa-4468-9e22-a974554601e2';

//   const response = await fetch(url);
//   const data = await response.json();
//   const jsonStr = JSON.stringify(data[0])
//   console.log(jsonStr);
// }
