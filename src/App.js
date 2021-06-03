import { useState } from 'react';
import './App.scss';

const products = [
  {title: 'Pizza', no_of_slices: 4, diameter: '30'}, 
  {title: 'Soup', spiciness_scale: 0}, 
  {title: 'Sandwich', slices_of_bread: 0}
];


const App = () => {
  const [data, setData] = useState({name:'', preparation_time: '00:00:00',});
  const [dish, setDish] = useState({});
  console.log(dish);      
  
  
  const handleSelect = (e) => {
    const selectedDish = products.filter(product => product.title === e.target.value);
    setDish(...selectedDish);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData({...data, ...dish})
    console.log(data);
  }
  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' value={data.name} onChange={(e) => setData({...data, name:e.target.value})} placeholder={'product name'}/>
        <input type='time' value={data.preparation_time} onChange={(e) => setData({...data, preparation_time:e.target.value})} />
        <select value={''} onChange={(e) => handleSelect(e)}>
          {products.map(product => (
            <option key={product.title} value={product.title}>{product.title}</option>
          ))}
        </select>
        <button type='submit'>Submit</button>
        {/* {data.type === 'Pizza' && 
        <>
        <input type='number' step='0.1' value={products[0].no_of_slices} onChange={(e) => setData({...data, no_of_slices: e.target.value})}/>
        <input type='number' value={products[0].diameter} onChange={(e) => setData({...data, diameter: e.target.value})}/>
        </>
        } */}


      </form>
    </div>
  );
}

export default App;


  // const users = async () => {
  //   const url = 'https://webhook.site/46c5b490-5caa-4468-9e22-a974554601e2';
    
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   const jsonStr = JSON.stringify(data[0])
  //   console.log(jsonStr);
  // }
