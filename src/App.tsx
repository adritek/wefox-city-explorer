import React, { useState, useReducer, useEffect } from 'react';
import CityInfo from './components/CityInfo';
import { getList, submitToAPI } from './services/list';
import './App.css';

const formReducer = (state: any, event: any) => {
  if (event.reset) {
    return {
      content: '',
      title: '',
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

function App() {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {});
  const [cityState, setLocalCityState]: any = useState(null);

  useEffect((): any => {
    let isMounted = true;
    getList().then((cities: any) => {
      if (isMounted) {
        setLocalCityState(cities);
      }
    });
    return () => (isMounted = false);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitting(true);

    submitToAPI(formData);
    console.log('Data submitted: ', formData);
    console.log('state: ', cityState);
    console.log('cityState isObject: ', typeof cityState);
    console.log('Data etarget submitted: ', { formData });

    setLocalCityState([...cityState, formData]);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 3000);
  };

  const handleChange = (event: any) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="wrapper">
      <h1>Add a new city and a description</h1>
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]: any) => (
              <li key={name}>
                <strong>{name}</strong>: {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>City Name</p>
            <input name="title" onChange={handleChange} value={formData.title || ''} required />
            <label>
              <p>City Description</p>
              <input name="content" onChange={handleChange} value={formData.content || ''} required />
            </label>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <CityInfo data={cityState} />
    </div>
  );
}

export default App;
