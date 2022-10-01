import './App.css';
import {data} from './data';
import {useState} from 'react';

function App() {
  const [places, setPlace] = useState(data);

  const removeItem = (id) =>{
    let newList = places.filter((item) => item.id !== id);
    setPlace(newList);
  }

  return (
  <div>
      <div className="container">
        <h1>{places.length} Things to Do in Santa Barbara, CA</h1>
      </div>

      {places.map((item =>{
        const {id, name, address, image} = item;

        return(
          <div className='box'>
            <div className="container">
              <h2>{id} - {name}</h2>
            </div>
            <div className="container">
              <img src={image} alt='image' width='500px' />
            </div>
            <div className="container">
              <h3>{address}</h3>
            </div>
            <div className='container'>
              <button className='btn' onClick={()=> removeItem(id)}>I was there</button>
            </div>
          </div>
        
        )
      }))}

      <br></br>
      <div className='container'>
        <button className='bigBtn' onClick={()=> setPlace([])}>Remove All</button>
      </div>

  </div>
  );
}

export default App;
