import React, { useState, useEffect } from 'react';
import CityInfo from './components/CityInfo';
import { getList, setCity } from './services/list';
import './App.css';

function App() {
  const [alert, setAlert] = useState(false);
  const [inputCity, setInputCity] = useState('');
  const [data, setData] = useState(null);

  useEffect((): any => {
    let isMounted = true;
    getList().then((cities) => {
      if (isMounted) {
        setData(cities);
      }
    });
    return () => (isMounted = false);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCity(inputCity).then(() => {
      setInputCity('');
      setAlert(true);
    });
  };

  return (
    <div className="wrapper">
      <h1>City Information</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Add City</p>
          <input type="text" onChange={(event) => setInputCity(event.target.value)} value={inputCity} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {alert && <h4> City added</h4>}
      <CityInfo data={data} />
    </div>
  );
}

export default App;
